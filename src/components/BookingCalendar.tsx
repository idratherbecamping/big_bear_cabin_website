import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { DateRange, Range } from 'react-date-range';
import { addDays, isWithinInterval } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface BookedDate {
  start: string;
  end: string;
}

const BookingCalendar: React.FC = () => {
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: addDays(new Date(), 2),
    key: 'selection'
  });
  const [bookedDates, setBookedDates] = useState<BookedDate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [showMinStayAlert, setShowMinStayAlert] = useState(false);

  useEffect(() => {
    fetchBookedDates();
  }, []);

  const fetchBookedDates = async () => {
    try {
      // Use our Vercel serverless function to fetch calendar data
      const response = await fetch('/api/calendar');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const icsData = await response.text();
      
      // Parse ICS data to extract booked dates
      const bookedDatesArray = parseICSData(icsData);
      setBookedDates(bookedDatesArray);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching booked dates:', error);
      setIsLoading(false);
      // Fallback to empty array if calendar fetch fails
      setBookedDates([]);
    }
  };

  // Helper function to parse ICS calendar data
  const parseICSData = (icsData: string): BookedDate[] => {
    const events: BookedDate[] = [];
    const lines = icsData.split('\n');
    let currentEvent: { start?: string; end?: string } = {};
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('BEGIN:VEVENT')) {
        currentEvent = {};
      } else if (trimmedLine.startsWith('DTSTART')) {
        const match = trimmedLine.match(/DTSTART[^:]*:(.+)/);
        if (match) {
          currentEvent.start = parseICSDate(match[1]);
        }
      } else if (trimmedLine.startsWith('DTEND')) {
        const match = trimmedLine.match(/DTEND[^:]*:(.+)/);
        if (match) {
          currentEvent.end = parseICSDate(match[1]);
        }
      } else if (trimmedLine.startsWith('END:VEVENT')) {
        if (currentEvent.start && currentEvent.end) {
          events.push({
            start: currentEvent.start,
            end: currentEvent.end
          });
        }
      }
    }
    
    return events;
  };

  // Helper function to parse ICS date format
  const parseICSDate = (icsDate: string): string => {
    // ICS date format: YYYYMMDD or YYYYMMDDTHHMMSSZ
    let dateStr = icsDate.replace(/[TZ]/g, '');
    
    if (dateStr.length >= 8) {
      const year = dateStr.substring(0, 4);
      const month = dateStr.substring(4, 6);
      const day = dateStr.substring(6, 8);
      
      return `${year}-${month}-${day}`;
    }
    
    return new Date().toISOString().split('T')[0];
  };

  // Determine if dates are in winter season (November through February)
  const isWinterSeason = (date: Date) => {
    const month = date.getMonth();
    return month === 10 || month === 11 || month === 0 || month === 1; // November, December, January, February
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    if (!dateRange.startDate || !dateRange.endDate) return 0;
    let total = 0;
    const currentDate = new Date(dateRange.startDate);
    
    while (currentDate < dateRange.endDate) {
      total += isWinterSeason(currentDate) ? 325 : 275;
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return total + 175; // Add cleaning fee
  };

  const calculateNights = (range: Range = dateRange) => {
    if (!range.startDate || !range.endDate) return 0;
    const timeDiff = range.endDate.getTime() - range.startDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleReservation = () => {
    if (!guestName.trim() || !guestPhone.trim()) {
      alert('Please fill in your name and phone number before making a reservation.');
      return;
    }

    const subject = `Cabin Reservation Request - ${formatDate(dateRange.startDate)} to ${formatDate(dateRange.endDate)}`;
    
    const emailBody = `
Hello,

I would like to make a reservation for your Big Bear Cabin with the following details:

GUEST INFORMATION:
Name: ${guestName}
Phone: ${guestPhone}

BOOKING DETAILS:
Check-in: ${formatDate(dateRange.startDate)}
Check-out: ${formatDate(dateRange.endDate)}
Number of Nights: ${calculateNights()}
Season: ${dateRange.startDate && isWinterSeason(dateRange.startDate) ? 'Winter (Nov-Feb)' : 'Standard (Mar-Oct)'}

PRICING BREAKDOWN:
Nightly Rate: $${dateRange.startDate && isWinterSeason(dateRange.startDate) ? '325' : '275'} × ${calculateNights()} nights = $${calculateTotalPrice() - 175}
Cleaning Fee: $175
Total Cost: $${calculateTotalPrice()}

ADDITIONAL NOTES:
${additionalNotes || 'None'}

Please confirm availability and let me know the next steps for securing this reservation.

Thank you!

${guestName}
${guestPhone}
    `.trim();

    const mailtoLink = `mailto:gazoo1@cox.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  // Convert booked dates to disabled dates array
  const disabledDates: Date[] = [];
  bookedDates.forEach(booking => {
    const startDate = new Date(booking.start);
    const endDate = new Date(booking.end);
    
    // Add all dates between start and end (inclusive)
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      disabledDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  });

  const handleDateChange = (item: any) => {
    const nights = calculateNights(item.selection);
    setShowMinStayAlert(nights === 1);
    setDateRange(item.selection);
  };

  return (
    <section id="booking" className="py-20 bg-amber-50">
      <style>{`
        .rdrDayDisabled {
          background-color: #fce7f3 !important;
          color: #be185d !important;
        }
        .rdrDayDisabled .rdrDayNumber span {
          color: #be185d !important;
        }
        .rdrDayPassive {
          background-color: #f3f4f6 !important;
          color: #9ca3af !important;
        }
        .rdrDayPassive .rdrDayNumber span {
          color: #9ca3af !important;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Book Your Stay
            </h2>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
              Select your dates to see pricing and availability
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Date Range Picker */}
            <div className="bg-white rounded-2xl shadow-xl p-6 relative">
              {isLoading && (
                <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-2xl z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mx-auto mb-2"></div>
                    <p className="text-amber-800">Loading calendar availability...</p>
                  </div>
                </div>
              )}
              <div className="aspect-[4/3] w-full">
                <DateRange
                  ranges={[dateRange]}
                  onChange={handleDateChange}
                  months={1}
                  direction="horizontal"
                  minDate={new Date()}
                  rangeColors={['#b45309']} // amber-700
                  showDateDisplay={false}
                  showMonthAndYearPickers={true}
                  showPreview={true}
                  dragSelectionEnabled={true}
                  className="rounded-lg"
                  disabledDates={disabledDates}
                />
              </div>

              {showMinStayAlert && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm">
                    ⚠️ Minimum stay is 2 nights. Please select additional nights for your stay.
                  </p>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-amber-600 rounded"></div>
                  <span className="text-amber-800">Selected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-amber-200 rounded"></div>
                  <span className="text-amber-800">Selected Range</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-pink-200 rounded"></div>
                  <span className="text-amber-800">Unavailable</span>
                </div>
              </div>
            </div>

            {/* Booking Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
                <Calendar className="h-6 w-6 mr-2" />
                Booking Summary
              </h3>

              <div className="space-y-6">
                <div className="bg-amber-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="font-medium text-amber-900">Selected Dates</span>
                  </div>
                  <div className="space-y-2 text-amber-800">
                    <p><strong>Check-in:</strong> {formatDate(dateRange.startDate)}</p>
                    <p><strong>Check-out:</strong> {formatDate(dateRange.endDate)}</p>
                    <p><strong>Nights:</strong> {calculateNights()}</p>
                    <div className="mt-2 pt-2 border-t border-amber-200">
                      <p className="font-medium text-amber-900">
                        {dateRange.startDate && isWinterSeason(dateRange.startDate) ? 
                          "Winter Rate: $325/night (Nov-Feb)" : 
                          "Standard Rate: $275/night (Mar-Oct)"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="space-y-3 text-amber-800">
                    <div className="flex justify-between">
                      <span>Nightly rate × {calculateNights()} nights</span>
                      <span>${calculateTotalPrice() - 175}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cleaning fee</span>
                      <span>$175</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between font-bold text-lg text-amber-900">
                        <span>Total</span>
                        <span>${calculateTotalPrice()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="guestName" className="block text-sm font-medium text-amber-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="guestName"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="guestPhone" className="block text-sm font-medium text-amber-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="guestPhone"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-medium text-amber-900 mb-2">
                      Additional Notes or Requests
                    </label>
                    <textarea
                      id="additionalNotes"
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                      placeholder="Any special requests, questions, or additional information..."
                    />
                  </div>
                </div>

                <button 
                  onClick={handleReservation}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-lg transition-colors"
                >
                  Request Reservation
                </button>
                
                <div className="mt-4 text-center text-sm text-amber-800">
                  <p>Your email client will open automatically with a pre-filled message. After submitting your request via email, you'll receive a confirmation email within 1-2 business days with next steps to secure your reservation.</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-900 mb-2">Booking Details</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Minimum stay: 2 nights</li>
                    <li>• Check-in: 3:00 PM</li>
                    <li>• Check-out: 11:00 AM</li>
                    <li className="space-y-2">
                      <span>• Cancellation Policy:</span>
                      <ul className="ml-8 space-y-1">
                        <li>100% refund if canceled at least 14 days before check-in</li>
                        <li>50% refund if canceled 7–13 days before check-in</li>
                        <li>No refund if canceled less than 7 days before check-in</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;