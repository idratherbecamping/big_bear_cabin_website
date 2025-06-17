import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-amber-700" />
            <h1 className="text-2xl font-bold text-amber-900">Buzzy's Cabin</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-amber-800 hover:text-amber-500 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-amber-800 hover:text-amber-500 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-amber-800 hover:text-amber-500 font-medium transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('amenities')}
              className="text-amber-800 hover:text-amber-500 font-medium transition-colors"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-amber-800 hover:text-amber-500 font-medium transition-colors"
            >
              Booking
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-amber-800 hover:text-amber-500 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-800 hover:text-amber-500"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-amber-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-amber-800 hover:text-amber-500 font-medium transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-amber-800 hover:text-amber-500 font-medium transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-amber-800 hover:text-amber-500 font-medium transition-colors text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('amenities')}
                className="text-amber-800 hover:text-amber-500 font-medium transition-colors text-left"
              >
                Amenities
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="text-amber-800 hover:text-amber-500 font-medium transition-colors text-left"
              >
                Booking
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-amber-800 hover:text-amber-500 font-medium transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;