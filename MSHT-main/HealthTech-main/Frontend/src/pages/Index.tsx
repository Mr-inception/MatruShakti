import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Home/HeroSection';
import FeatureSection from '@/components/Home/FeatureSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Shield, Baby } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Index = () => {
  const [user, setUser] = useState(null);
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
        <section className="py-16 bg-matru-blue/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Shield className="h-10 w-10 text-matru-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold">Government Support</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Access financial assistance and healthcare benefits through integrated government schemes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="matru-card overflow-hidden">
                <div className="h-2 bg-matru-primary"></div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Janani Suraksha Yojana</h3>
                  <p className="text-gray-600 mb-4">Financial assistance for institutional deliveries to reduce maternal and infant mortality.</p>
                  <Button asChild variant="outline" className="w-full border-matru-primary text-matru-primary hover:bg-matru-primary/10">
                    <Link to="/schemes">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="matru-card overflow-hidden">
                <div className="h-2 bg-matru-secondary"></div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">Pradhan Mantri Matru Vandana Yojana</h3>
                  <p className="text-gray-600 mb-4">Maternity benefit program providing financial support for pregnant women.</p>
                  <Button asChild variant="outline" className="w-full border-matru-primary text-matru-primary hover:bg-matru-primary/10">
                    <Link to="/schemes">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="matru-card overflow-hidden">
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
            <MessageSquare className="h-10 w-10 text-matru-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Connect with other mothers, share experiences, and get advice from healthcare professionals in our secure, verified community.
            </p>
            <Button asChild className="bg-matru-primary hover:bg-matru-secondary">
              <Link to="/community">Join Community</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};

export default Index;

function MessageSquare(props: any) {
  return <Heart {...props} />;
}