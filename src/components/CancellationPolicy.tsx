import React from 'react';

const CancellationPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 mb-8">Cancellation Policy</h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            <div className="border-b border-amber-100 pb-6">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">Our Cancellation Policy</h2>
              <p className="text-amber-700 leading-relaxed">
                We understand that plans can change. Here's our cancellation policy to help you understand your options:
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-amber-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-amber-800 mb-2">14+ Days Before Check-in</h3>
                <p className="text-amber-700">
                  Full refund (100%) if canceled at least 14 days before check-in.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-amber-800 mb-2">7-13 Days Before Check-in</h3>
                <p className="text-amber-700">
                  50% refund if canceled 7–13 days before check-in.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-amber-800 mb-2">Less Than 7 Days Before Check-in</h3>
                <p className="text-amber-700">
                  No refund if canceled less than 7 days before check-in.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-100">
              <p className="text-amber-700">
                For any questions about our cancellation policy, please don't hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy; 