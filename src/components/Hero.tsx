import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/IMG_6656_hero.JPG")',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
          Buzzy's Cabin
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg max-w-2xl mx-auto leading-relaxed">
          Your perfect mountain escape awaits. Create unforgettable memories in our cozy family cabin 
          surrounded by nature's beauty.
        </p>
        
        {/* Quick Info Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center space-x-2">
            <Users className="h-5 w-5 text-amber-700" />
            <span className="text-amber-900 font-medium">Sleeps 6</span>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-amber-700" />
            <span className="text-amber-900 font-medium">Mountain Views</span>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-amber-700" />
            <span className="text-amber-900 font-medium">Year Round</span>
          </div>
        </div>

        <button
          onClick={scrollToBooking}
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          Book Your Stay
        </button>
      </div>

    </section>
  );
};

export default Hero;