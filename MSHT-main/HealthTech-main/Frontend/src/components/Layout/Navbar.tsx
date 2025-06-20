import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Calendar, User } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 bg-orange-200">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-matru-primary to-matru-secondary bg-clip-text text-transparent">
              MatruShakti
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <Button variant="ghost" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/schemes">Govt Schemes</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/community">Community</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/health-assistant">Health Assistant</Link>
            </Button>
            <div className="flex items-center space-x-2 pl-2">
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-matru-primary hover:bg-matru-secondary">
                <Link to="/register">Register</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden pt-4 pb-3 space-y-2 animate-fade-in">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/schemes">Govt Schemes</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/community">Community</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/health-assistant">Health Assistant</Link>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button className="w-full bg-matru-primary hover:bg-matru-secondary" asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>}
      </div>
    </nav>;
};
export default Navbar;