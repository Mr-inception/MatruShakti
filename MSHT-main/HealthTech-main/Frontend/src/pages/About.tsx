import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, BriefcaseMedical, MessageSquare, Baby } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-white to-matru-blue/30 py-16 sm:py-24">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/New-born-and-child-care-min.png" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70"></div>
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About MatruShakti
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Empowering expectant mothers with technology-driven healthcare solutions and seamless access to government support programs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  MatruShakti aims to transform maternal healthcare in India by combining advanced AI technology with existing government welfare schemes, creating a comprehensive support system for expectant mothers.
                </p>
                <p className="text-lg text-gray-600">
                  We believe that every mother deserves access to quality healthcare, financial support, and a community of care throughout her pregnancy journey and beyond.
                </p>
              </div>
              <div className="relative h-64 sm:h-80">
                <div className="absolute top-0 left-0 w-full h-full bg-matru-accent rounded-2xl transform rotate-3"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-matru-light rounded-2xl transform -rotate-3 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/New-born-and-child-care-min.png" 
                    alt="Mother and Child" 
                    className="rounded-xl shadow-lg max-h-full max-w-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="py-16 bg-matru-blue/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-gray-600">
                We've developed a holistic platform that addresses the medical, financial, educational, and emotional aspects of maternal care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="matru-card bg-white">
                <CardContent className="p-6">
                  <BriefcaseMedical className="h-10 w-10 text-matru-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">AI-Driven Care</h3>
                  <p className="text-gray-600">
                    Personalized health recommendations using advanced AI algorithms tailored to each mother's unique journey.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="matru-card bg-white">
                <CardContent className="p-6">
                  <BriefcaseMedical className="h-10 w-10 text-matru-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Government Integration</h3>
                  <p className="text-gray-600">
                    Seamless access to maternal welfare schemes, ensuring financial support reaches those who need it.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="matru-card bg-white">
                <CardContent className="p-6">
                  <Shield className="h-10 w-10 text-matru-tertiary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Secure Records</h3>
                  <p className="text-gray-600">
                    State-of-the-art security for maternal health records, ensuring privacy while enabling authorized access.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="matru-card bg-white">
                <CardContent className="p-6">
                  <MessageSquare className="h-10 w-10 text-matru-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Community Support</h3>
                  <p className="text-gray-600">
                    Verified network connecting mothers with peers and healthcare professionals for guidance and support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Impact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-lg text-gray-600">
                MatruShakti is working to transform maternal healthcare outcomes across India.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-matru-blue/10 rounded-lg">
                <p className="text-4xl font-bold text-matru-primary mb-2">5000+</p>
                <p className="text-gray-700">Mothers Supported</p>
              </div>
              
              <div className="text-center p-6 bg-matru-accent/30 rounded-lg">
                <p className="text-4xl font-bold text-matru-secondary mb-2">₹2.5 Cr</p>
                <p className="text-gray-700">Govt Benefits Facilitated</p>
              </div>
              
              <div className="text-center p-6 bg-matru-light/30 rounded-lg">
                <p className="text-4xl font-bold text-matru-tertiary mb-2">200+</p>
                <p className="text-gray-700">Healthcare Providers</p>
              </div>
              
              <div className="text-center p-6 bg-matru-blue/10 rounded-lg">
                <p className="text-4xl font-bold text-matru-primary mb-2">15</p>
                <p className="text-gray-700">States Covered</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-matru-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-lg text-gray-600">
                We're a passionate team of healthcare professionals, technologists, and social welfare experts committed to improving maternal care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Priya Sharma",
                  role: "Medical Director",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  name: "Rajesh Kumar",
                  role: "Technology Lead",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  name: "Anita Desai",
                  role: "Government Relations",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              ].map((member, index) => (
                <Card key={index} className="matru-card overflow-hidden bg-white">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gradient-to-r from-matru-primary to-matru-secondary rounded-2xl p-8 text-center">
              <Baby className="h-12 w-12 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Join the MatruShakti Journey</h2>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                Experience the future of maternal healthcare. Register today to access personalized care, government benefits, and a supportive community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-white text-matru-primary hover:bg-gray-100 matru-button">
                  <Link to="/register">Register Now</Link>
                </Button>
                <Button asChild className="bg-white text-matru-primary hover:bg-gray-100 matru-button">
                  <Link to="/health-assistant">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
