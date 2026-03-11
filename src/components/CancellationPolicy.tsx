import React from 'react';

const CancellationPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 mb-8">Cancellation Policy</h1>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            <div className="border-b border-amber-100 pb-6">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">No Cancellations</h2>
              <p className="text-amber-700 leading-relaxed">
                All reservations are final. No cancellations or refunds will be issued once a booking is confirmed.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-amber-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-amber-800 mb-2">Deposits</h3>
                <ul className="text-amber-700 space-y-2">
                  <li>Pet Deposit: $75 (refunded within 7 days after checkout)</li>
                  <li>Damage Deposit: $100 (refunded within 7 days after checkout)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-100">
              <p className="text-amber-700">
                For any questions, please don't hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
