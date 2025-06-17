import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Users } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = () => {
    const subject = `Booking Inquiry from ${formData.firstName} ${formData.lastName}`;
    const body = `
Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:hello@buzzyscabin.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              Ready to book your mountain getaway? We're here to help make your stay perfect.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900">Phone</h4>
                      <p className="text-amber-800">(949) 412-2146</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900">Email</h4>
                      <p className="text-amber-800">hello@buzzyscabin.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900">Location</h4>
                      <p className="text-amber-800">1409 E Big Bear Blvd, Big Bear City, CA 92314</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900">Quick Response</h4>
                      <p className="text-amber-800">Text us for fastest reply</p>
                      <p className="text-sm text-amber-600">Perfect for urgent questions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-amber-700" />
                    <div>
                      <p className="font-bold text-amber-900">Capacity</p>
                      <p className="text-sm text-amber-600">Up to 6 guests</p>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-amber-700" />
                    <div>
                      <p className="font-bold text-amber-900">Min Stay</p>
                      <p className="text-sm text-amber-600">2 nights </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">
                Send Us a Message
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-800 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-800 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-800 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us about your planned stay, number of guests, or any special requests..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>

              <p className="text-sm text-amber-600 mt-4 text-center">
                Your email client will open automatically with a pre-filled message
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;