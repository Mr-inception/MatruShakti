
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import HealthAssistant from '@/components/AI/HealthAssistant';
import { Baby, Heart, Shield, BriefcaseMedical } from 'lucide-react';

const HealthAssistantPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-white to-matru-light/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="h-10 w-10 text-matru-primary mx-auto mb-4 animate-pulse-gentle" />
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                AI-Powered Health Assistant
              </h1>
              <p className="text-lg text-gray-600">
                Your personal guide through pregnancy with tailored health insights and information about government support.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1 lg:col-span-2">
                <Card className="shadow-lg border-matru-primary/20 h-full">
                  <CardContent className="p-0 h-full">
                    <HealthAssistant />
                  </CardContent>
                </Card>
              </div>
              
              <div className="col-span-1 space-y-6">
                <Card className="border-matru-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <Baby className="h-5 w-5 text-matru-primary mr-2" />
                      How It Works
                    </h2>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-matru-primary mr-2 font-bold">1.</span>
                        <span>Ask questions about your pregnancy, symptoms, or government schemes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-matru-primary mr-2 font-bold">2.</span>
                        <span>Receive personalized guidance based on your specific needs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-matru-primary mr-2 font-bold">3.</span>
                        <span>Track your progress and get trimester-specific recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-matru-primary mr-2 font-bold">4.</span>
                        <span>Learn about government schemes you qualify for</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-matru-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-matru-primary mr-2" />
                      Your Privacy
                    </h2>
                    <p className="text-gray-600">
                      Your conversations are private and secure. MatruShakti employs state-of-the-art encryption and follows strict privacy guidelines to protect your personal health information.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-matru-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <BriefcaseMedical className="h-5 w-5 text-matru-primary mr-2" />
                      Sample Questions
                    </h2>
                    <ul className="space-y-2 text-gray-600">
                      <li>"What foods should I avoid during pregnancy?"</li>
                      <li>"How can I apply for Janani Suraksha Yojana?"</li>
                      <li>"I'm experiencing back pain, what can I do?"</li>
                      <li>"What are the benefits of PMMVY scheme?"</li>
                      <li>"How can I manage morning sickness?"</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HealthAssistantPage;
