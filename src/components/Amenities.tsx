import React from 'react';
import { 
  Wifi, 
  Car, 
  Tv, 
  Coffee, 
  Flame, 
  Waves,
  TreePine,
  UtensilsCrossed,
  Bath,
  Bed,
  Wind,
  Mountain,
  Thermometer,
  Sprout
} from 'lucide-react';

const Amenities: React.FC = () => {
  const amenities = [
    { icon: Bed, title: "3 Bedrooms", description: "1 King, 1 Full, 2 Twins, and 1 pull-out couch" },
    { icon: Bath, title: "1.5 Bathrooms", description: "Modern bathrooms with all essentials" },
    { icon: UtensilsCrossed, title: "Full Kitchen", description: "Complete with all appliances & cookware" },
    { icon: Thermometer, title: "Heater", description: "Wall mounted heating system" },
    { icon: Flame, title: " One Button Fireplace", description: "Cozy stone fireplace for perfect evenings" },
    { icon: Tv, title: "Entertainment", description: "Smart TV with streaming services" },
    { icon: Wifi, title: "Free WiFi", description: "High-speed internet throughout" },
    { icon: Car, title: "Parking", description: "Free parking for multiple vehicles" },
    { icon: Coffee, title: "Coffee Station", description: "Drip coffee maker" },
    { icon: TreePine, title: "Nature Access", description: "Hiking trails nearby" },
    { icon: Wind, title: "Fresh Mountain Air", description: "Clean, crisp mountain atmosphere" },
    { icon: Mountain, title: "Offroading", description: "Access to nearby offroad trails" },
    { icon: Sprout, title: "Meadow Views", description: "Breathtaking panoramic meadow vistas" },
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Cabin Amenities
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Everything you need for a comfortable and memorable stay in the mountains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-amber-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-amber-100"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <amenity.icon className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-amber-700">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Special Features Section */}
        {/* <div className="mt-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-amber-900 mb-6">
              Special Features
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌿</div>
                <h4 className="text-xl font-bold text-amber-900 mb-2">Meadow Views</h4>
                <p className="text-amber-800">Breathtaking panoramic meadow vistas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌲</div>
                <h4 className="text-xl font-bold text-amber-900 mb-2">Forest Access</h4>
                <p className="text-amber-800">Surrounded by pristine forest land</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚙</div>
                <h4 className="text-xl font-bold text-amber-900 mb-2">Offroading</h4>
                <p className="text-amber-800">Access to exciting offroad trails</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Amenities;