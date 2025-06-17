import React from 'react';
import { Home, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Home className="h-8 w-8 text-amber-300" />
              <h3 className="text-2xl font-bold text-white">Buzzy's Cabin</h3>
            </div>
            <p className="text-amber-200 mb-6 max-w-md leading-relaxed">
              Your perfect mountain escape awaits. Create unforgettable memories with family 
              and friends in our cozy cabin surrounded by nature's beauty.
            </p>
            <div className="flex items-center space-x-2 text-amber-200">
              <Heart className="h-4 w-4 text-red-400" />
              <span className="text-sm">Made with love for our guests</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-amber-200 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-amber-200 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block text-amber-200 hover:text-white transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('amenities')}
                className="block text-amber-200 hover:text-white transition-colors"
              >
                Amenities
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="block text-amber-200 hover:text-white transition-colors"
              >
                Booking
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-amber-200 hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-amber-300" />
                <span className="text-amber-200">(949) 412-2146</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-amber-300" />
                <span className="text-amber-200">hello@buzzyscabin.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-amber-300 mt-1" />
                <span className="text-amber-200">Beautiful Mountain Valley</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-amber-200 text-sm">
              © 2025 Buzzy's Cabin. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                Terms of Service
              </a>
              <Link to="/cancellation-policy" className="text-amber-200 hover:text-white transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;