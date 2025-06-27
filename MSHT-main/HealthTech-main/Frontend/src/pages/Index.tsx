import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Home/HeroSection';
import FeatureSection from '@/components/Home/FeatureSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Shield, Baby, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import HealthAssistant from '@/components/AI/HealthAssistant';

const Index = () => {
  const [user, setUser] = useState(null);
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem('matruUser');
    if (stored) setUser(JSON.parse(stored));
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        
        {/* Government Schemes Section */}
        <section id="government-support-section" className="py-16 bg-matru-blue/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Shield className="h-10 w-10 text-matru-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold">Government Support</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Access financial assistance and healthcare benefits through integrated government schemes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="matru-card overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-transform duration-200">
                <div className="h-2 bg-matru-primary"></div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Janani Suraksha Yojana</h3>
                  <p className="text-gray-600 mb-4">Financial assistance for institutional deliveries to reduce maternal and infant mortality.</p>
                  <Button asChild variant="outline" className="w-full border-matru-primary text-matru-primary hover:bg-matru-primary/10">
                    <Link to="/schemes">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="matru-card overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-transform duration-200">
                <div className="h-2 bg-matru-secondary"></div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Pradhan Mantri Matru Vandana Yojana</h3>
                  <p className="text-gray-600 mb-4">Maternity benefit program providing financial support for pregnant women.</p>
                  <Button asChild variant="outline" className="w-full border-matru-primary text-matru-primary hover:bg-matru-primary/10">
                    <Link to="/schemes">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="matru-card overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-transform duration-200">
                <div className="h-2 bg-matru-tertiary"></div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">SUMAN Initiative</h3>
                  <p className="text-gray-600 mb-4">Providing assured, dignified, and quality healthcare at no cost to mothers and newborns.</p>
                  <Button asChild variant="outline" className="w-full border-matru-primary text-matru-primary hover:bg-matru-primary/10">
                    <Link to="/schemes">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-10">
              <Button asChild className="bg-matru-primary hover:bg-matru-secondary">
                <Link to="/schemes">View All Schemes</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* AI Assistant Preview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Baby className="h-10 w-10 text-matru-primary mb-4" />
                <h2 className="text-3xl font-bold mb-6">AI-Powered Health Assistant</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our intelligent assistant provides personalized guidance throughout your pregnancy journey. Get answers to your questions, receive tailored health insights, and access relevant information about government schemes.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Personalized nutrition and exercise recommendations', 'Trimester-specific guidance and alerts', 'Information about government schemes and benefits', 'Symptom assessment and care suggestions', 'Mental wellness check-ins and support'].map((item, index) => <li key={index} className="flex items-start">
                      <span className="text-matru-primary mr-2">✓</span>
                      <span>{item}</span>
                    </li>)}
                </ul>
                <Button asChild className="bg-matru-primary hover:bg-matru-secondary">
                  <Link to="/health-assistant">Try Health Assistant</Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-matru-blue/20 rounded-3xl transform rotate-3"></div>
                <Card className="relative z-10 border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Heart className="h-5 w-5 text-matru-primary animate-pulse" />
                      <h3 className="font-medium">MatruShakti AI</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
                        How can I manage morning sickness during my first trimester?
                      </div>
                      <div className="bg-matru-primary/10 p-3 rounded-lg rounded-tr-none">
                        <p>
                          Morning sickness is common in early pregnancy. Here are some tips that might help:
                        </p>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• Eat small, frequent meals throughout the day</li>
                          <li>• Stay hydrated with small sips of water</li>
                          <li>• Try ginger tea or ginger candies</li>
                          <li>• Avoid strong smells that trigger nausea</li>
                          <li>• Get plenty of rest</li>
                        </ul>
                        <p className="mt-2 text-sm">
                          If your symptoms are severe, please consult your doctor as you might need medical intervention.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Section */}
        <section className="py-16 bg-matru-accent/30">
          <div className="container mx-auto px-4 text-center bg-slate-200">
            <MessageCircle className="h-10 w-10 text-matru-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Connect with other mothers, share experiences, and get advice from healthcare professionals in our secure, verified community.
            </p>
            <Button asChild className="bg-matru-primary hover:bg-matru-secondary">
              <Link to="/community">Join Community</Link>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full border rounded-lg shadow-sm bg-gray-50">
              <AccordionItem value="q1">
                <AccordionTrigger>What is MatruShakti?</AccordionTrigger>
                <AccordionContent>
                  MatruShakti is a platform that empowers expectant mothers with AI-driven health guidance, access to government schemes, and a supportive community.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>How do I use the AI Health Assistant?</AccordionTrigger>
                <AccordionContent>
                  Simply click on "Try Health Assistant" and start asking your questions about pregnancy, health, or government benefits. The assistant will provide personalized responses.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                  Yes, your data is encrypted and never shared without your consent. We follow strict privacy guidelines to protect your information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>How can I join the community?</AccordionTrigger>
                <AccordionContent>
                  Click on "Join Community" to access our forum, where you can connect with other mothers and healthcare professionals.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Floating AI Assistant Mini Chat */}
      <div>
        {/* Floating Button */}
        {!showChat && (
          <button
            onClick={() => setShowChat(true)}
            className="fixed bottom-6 right-6 z-50 bg-matru-primary hover:bg-matru-secondary text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-matru-primary"
            aria-label="Open AI Assistant Chat"
          >
            <MessageCircle className="h-7 w-7 animate-pulse" />
          </button>
        )}
        {/* Chat Window */}
        {showChat && (
          <div
            className="fixed bottom-6 right-6 z-50 w-[350px] max-w-[90vw] bg-white rounded-xl shadow-2xl border border-matru-primary flex flex-col"
            style={{ minHeight: 420, maxHeight: 600 }}
          >
            <div className="flex items-center justify-between p-3 border-b bg-matru-primary/90 rounded-t-xl">
              <span className="text-white font-semibold flex items-center gap-2"><MessageCircle className="h-5 w-5" /> MatruShakti AI</span>
              <button
                onClick={() => setShowChat(false)}
                className="text-white hover:text-matru-secondary/90 text-xl font-bold px-2 focus:outline-none"
                aria-label="Close Chat"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <HealthAssistant />
            </div>
          </div>
        )}
      </div>
    </div>;
};

export default Index;

function MessageSquare(props: any) {
  return <Heart {...props} />;
}