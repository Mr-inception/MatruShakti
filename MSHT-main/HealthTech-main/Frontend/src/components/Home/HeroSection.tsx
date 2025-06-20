import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return <div className="relative overflow-hidden bg-gradient-to-b from-white to-matru-blue/30 py-16 sm:py-24 bg-red-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <h2 className="text-2xl font-bold text-matru-primary">MatruShakti</h2>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              AI-Powered Maternal Healthcare
              <span className="block text-matru-primary mt-2">With Government Support</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Empowering expectant mothers with personalized healthcare insights, financial support through government schemes, and a secure community of support.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="matru-button bg-matru-primary hover:bg-matru-secondary">
                <Link to="/register">Join MatruShakti</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="matru-button border-matru-primary text-matru-primary hover:bg-matru-primary/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 animate-fade-in">
            <div className="absolute top-0 left-0 w-full h-full bg-matru-accent rounded-2xl transform rotate-3"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-matru-light rounded-2xl transform -rotate-3 opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/New-born-and-child-care-min.png" 
                alt="Maternal Healthcare" 
                className="rounded-xl shadow-lg max-h-full max-w-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;