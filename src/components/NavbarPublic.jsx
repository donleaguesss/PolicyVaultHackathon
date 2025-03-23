
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield } from 'lucide-react';

const NavbarPublic = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled ? 'bg-white shadow-md backdrop-blur-lg bg-opacity-90' : 
        isLandingPage ? 'bg-transparent' : 'bg-white shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-insurance-600 flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <span className="font-semibold text-xl tracking-tight text-insurance-800">PolicyVault</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-insurance-600 transition-colors">Home</Link>
          <Link to="/#features" className="text-gray-700 hover:text-insurance-600 transition-colors">Features</Link>
          <Link to="/#how-it-works" className="text-gray-700 hover:text-insurance-600 transition-colors">How It Works</Link>
          <Link to="/#about" className="text-gray-700 hover:text-insurance-600 transition-colors">About</Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-insurance-600 text-insurance-600 hover:bg-insurance-50">
                Login
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 hover:text-insurance-600"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-insurance-600 py-2" onClick={closeMenu}>Home</Link>
            <Link to="/#features" className="text-gray-700 hover:text-insurance-600 py-2" onClick={closeMenu}>Features</Link>
            <Link to="/#how-it-works" className="text-gray-700 hover:text-insurance-600 py-2" onClick={closeMenu}>How It Works</Link>
            <Link to="/#about" className="text-gray-700 hover:text-insurance-600 py-2" onClick={closeMenu}>About</Link>
            
            <Link to="/login" className="w-full" onClick={closeMenu}>
              <Button className="bg-insurance-600 hover:bg-insurance-700 text-white w-full">
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarPublic;
