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

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChatHistory([...chatHistory, { role: 'user', content: message }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAcJZ676Uz3w5HPsFLsIOy99sA0QGl_-L8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: "You are a helpful maternal health assistant. Answer questions about pregnancy, maternal health, and government schemes in India." },
                ...chatHistory.map(chat => ({ text: chat.content })),
                { text: message }
              ]
            }
          ]
        })
      });
      const data = await response.json();
      const aiMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't find an answer.";
      setChatHistory(prev => [...prev, { role: 'assistant', content: aiMessage }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { role: 'assistant', content: "Sorry, there was an error getting a response." }]);
    }
    setIsLoading(false);
    setMessage('');
  };

  return (
    <div className="flex flex-col h-full max-h-[600px]">
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
