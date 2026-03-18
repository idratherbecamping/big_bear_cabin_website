import React from 'react';
import { Mail, MessageCircle, MapPin, Clock, Users } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              Ready to book your mountain getaway? The best way to reach us is by text or email.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Text Card */}
            <a
              href="sms:+19494122146"
              className="bg-amber-50 rounded-2xl p-8 border border-amber-100 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Text Us</h3>
              <p className="text-amber-800 text-lg mb-2">(949) 412-2146</p>
              <p className="text-sm text-amber-600">Fastest way to reach us for questions and booking requests</p>
            </a>

            {/* Email Card */}
            <a
              href="mailto:gazoo1@cox.net"
              className="bg-amber-50 rounded-2xl p-8 border border-amber-100 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Email Us</h3>
              <p className="text-amber-800 text-lg mb-2">gazoo1@cox.net</p>
              <p className="text-sm text-amber-600">Best for detailed inquiries and booking requests</p>
              <p className="text-sm text-amber-700 mt-3 font-medium">Your email app will open automatically with a pre-filled message.</p>
              <p className="text-sm text-amber-600 mt-1">If nothing pops up, just email us directly at gazoo1@cox.net</p>
            </a>
          </div>

          {/* Location & Info */}
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-900">Location</h4>
                  <p className="text-amber-800">E Big Bear Blvd, Big Bear City, CA 92314</p>
                  <p className="text-sm text-amber-600">Exact address provided after booking</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-900">Capacity</h4>
                  <p className="text-amber-800">Up to 6 guests</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-900">Nightly Rate</h4>
                  <p className="text-amber-800">$350/night</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
