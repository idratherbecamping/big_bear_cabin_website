import React from 'react';
import { Heart, TreePine, Coffee, Wifi } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Welcome to Our Mountain Sanctuary
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
              Nestled in the heart of the mountains, Buzzy's Cabin offers the perfect blend of rustic charm 
              and modern comfort for your family getaway.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-amber-900 mb-4">
                Your Home Away From Home
              </h3>
              <p className="text-lg text-amber-700 leading-relaxed">
                Our beautifully appointed cabin features everything you need for a memorable stay. 
                From cozy evenings by the fireplace to adventurous days exploring the great outdoors, 
                Buzzy's Cabin is your gateway to unforgettable experiences.
              </p>
              <p className="text-lg text-amber-700 leading-relaxed">
                Whether you're seeking a peaceful retreat, a family adventure, or a romantic getaway, 
                our cabin provides the perfect setting for creating lasting memories with your loved ones.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-red-500" />
                  <span className="text-amber-800 font-medium">Family Friendly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TreePine className="h-6 w-6 text-green-600" />
                  <span className="text-amber-800 font-medium">Nature Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Coffee className="h-6 w-6 text-amber-600" />
                  <span className="text-amber-800 font-medium">Full Kitchen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi className="h-6 w-6 text-blue-500" />
                  <span className="text-amber-800 font-medium">Free WiFi</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="IMG_4456.JPG"
                  alt="Cozy cabin interior"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100 rounded-2xl shadow-lg flex items-center justify-center"> */}
                {/* <div className="text-center">
                  <div className="text-2xl font-bold text-amber-900">5★</div>
                  <div className="text-sm text-amber-700">Guest Rating</div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;