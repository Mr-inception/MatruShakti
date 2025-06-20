
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Send } from 'lucide-react';

const HealthAssistant = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm your MatruShakti AI Health Assistant. How can I help you today with your maternal health questions?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, { role: 'user', content: message }]);
    
    // Simulate AI response
    setIsLoading(true);
    
    // Demo responses based on keywords
    setTimeout(() => {
      let response = "I'm not sure about that. Can you tell me more about what you're experiencing?";
      
      const lowercaseMessage = message.toLowerCase();
      
      if (lowercaseMessage.includes('nausea') || lowercaseMessage.includes('sick') || lowercaseMessage.includes('morning sickness')) {
        response = "Morning sickness is common in early pregnancy. Try eating small, frequent meals, staying hydrated, and avoiding triggering smells. Ginger tea might help too. If vomiting is severe, please consult your doctor as you might be experiencing hyperemesis gravidarum.";
      } else if (lowercaseMessage.includes('tired') || lowercaseMessage.includes('fatigue') || lowercaseMessage.includes('exhausted')) {
        response = "Feeling tired during pregnancy is normal due to hormonal changes. Make sure to get adequate rest, stay hydrated, eat iron-rich foods, and consider gentle exercise like walking. If fatigue is severe, discuss with your doctor as it could indicate anemia.";
      } else if (lowercaseMessage.includes('back pain') || lowercaseMessage.includes('backache')) {
        response = "Back pain is common as your center of gravity shifts. Try maintaining good posture, using supportive footwear, avoiding heavy lifting, and practicing prenatal yoga. A warm (not hot) compress might also provide relief.";
      } else if (lowercaseMessage.includes('jsy') || lowercaseMessage.includes('janani suraksha')) {
        response = "Janani Suraksha Yojana (JSY) is a government scheme that provides financial assistance to promote institutional deliveries. Eligible mothers can receive ₹1,400 in rural areas and ₹1,000 in urban areas. You can apply through your local ASHA worker or healthcare center.";
      } else if (lowercaseMessage.includes('pmmvy') || lowercaseMessage.includes('matru vandana')) {
        response = "Pradhan Mantri Matru Vandana Yojana (PMMVY) provides a cash benefit of ₹5,000 to pregnant women for their first child. This is paid in three installments, tied to specific health checkups and registration. You can apply at your local Anganwadi Center.";
      }
      
      setChatHistory(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
      setMessage('');
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full max-h-[700px]">
      <div className="bg-matru-primary/10 p-4 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <Heart className="h-5 w-5 text-matru-primary animate-pulse" />
          <h2 className="text-lg font-medium">MatruShakti Health Assistant</h2>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Ask me questions about your pregnancy, maternal health, or government schemes.
        </p>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 bg-gray-50 rounded-b-lg">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`mb-4 ${
              chat.role === 'user' ? 'flex justify-end' : 'flex justify-start'
            }`}
          >
            <Card
              className={`max-w-[80%] ${
                chat.role === 'user'
                  ? 'bg-matru-primary text-white'
                  : 'bg-white'
              }`}
            >
              <CardContent className="p-3 text-sm">
                {chat.content}
              </CardContent>
            </Card>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <Card className="max-w-[80%] bg-white">
              <CardContent className="p-3">
                <div className="flex space-x-2">
                  <div className="h-2 w-2 bg-matru-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="h-2 w-2 bg-matru-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  <div className="h-2 w-2 bg-matru-primary rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSendMessage} className="p-2 border-t">
        <div className="flex space-x-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your question..."
            className="matru-input"
          />
          <Button 
            type="submit" 
            className="bg-matru-primary hover:bg-matru-secondary"
            disabled={isLoading || !message.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HealthAssistant;
