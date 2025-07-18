'use client';

import { useState } from 'react';

interface TrackingData {
  trackingNumber: string;
  status: string;
  currentLocation: string;
  estimatedDelivery: string;
  lastUpdate: string;
  progress: number;
  events: Array<{
    date: string;
    time: string;
    status: string;
    location: string;
    description: string;
  }>;
}

export default function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  const mockTrackingData: Record<string, TrackingData> = {
    'EW123456789': {
      trackingNumber: 'EW123456789',
      status: 'In Transit',
      currentLocation: 'Shanghai, China',
      estimatedDelivery: 'Dec 28, 2024',
      lastUpdate: '2 hours ago',
      progress: 65,
      events: [
        {
          date: 'Dec 20, 2024',
          time: '10:30 AM',
          status: 'Package Picked Up',
          location: 'Los Angeles, CA',
          description: 'Package collected from sender'
        },
        {
          date: 'Dec 21, 2024',
          time: '3:45 PM',
          status: 'Departed Facility',
          location: 'Los Angeles, CA',
          description: 'Left sorting facility'
        },
        {
          date: 'Dec 23, 2024',
          time: '11:20 AM',
          status: 'In Transit',
          location: 'Shanghai, China',
          description: 'Package in transit to destination'
        },
        {
          date: 'Dec 25, 2024',
          time: '2:15 PM',
          status: 'Customs Clearance',
          location: 'Shanghai, China',
          description: 'Undergoing customs inspection'
        }
      ]
    },
    'EW987654321': {
      trackingNumber: 'EW987654321',
      status: 'Delivered',
      currentLocation: 'New York, NY',
      estimatedDelivery: 'Dec 22, 2024',
      lastUpdate: '3 days ago',
      progress: 100,
      events: [
        {
          date: 'Dec 18, 2024',
          time: '9:00 AM',
          status: 'Package Picked Up',
          location: 'Dubai, UAE',
          description: 'Package collected from sender'
        },
        {
          date: 'Dec 19, 2024',
          time: '7:30 PM',
          status: 'In Transit',
          location: 'Frankfurt, Germany',
          description: 'Package in transit'
        },
        {
          date: 'Dec 21, 2024',
          time: '1:45 PM',
          status: 'Out for Delivery',
          location: 'New York, NY',
          description: 'Package out for delivery'
        },
        {
          date: 'Dec 22, 2024',
          time: '4:20 PM',
          status: 'Delivered',
          location: 'New York, NY',
          description: 'Package delivered successfully'
        }
      ]
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setIsSearching(true);
    setError('');
    setTrackingData(null);

    setTimeout(() => {
      const data = mockTrackingData[trackingNumber.toUpperCase()];
      if (data) {
        setTrackingData(data);
      } else {
        setError('Tracking number not found. Please check and try again.');
      }
      setIsSearching(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'text-green-600 bg-green-50 border-green-200';
      case 'in transit': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'out for delivery': return 'text-orange-600 bg-orange-50 border-orange-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Floating Cloud */}
      <div className="absolute top-20 right-32 w-16 h-10 opacity-20 animate-pulse">
        <img 
          src="https://readdy.ai/api/search-image?query=fluffy%20white%20cloud%20floating%20in%20blue%20sky%2C%20soft%20edges%20and%20gentle%20curves%2C%20minimalist%20design%20for%20tracking%20page%20decoration%2C%20transparent%20background&width=64&height=40&seq=cloud4&orientation=landscape" 
          alt="Cloud decoration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tracking Form */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Enter Tracking Information</h2>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter Order ID or Tracking Number"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                >
                  {isSearching ? 'Tracking...' : 'Track Shipment'}
                </button>
              </div>
            </form>

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">{error}</p>
              </div>
            )}

            <div className="mt-6 text-sm text-gray-600">
              <p>Try these sample tracking numbers:</p>
              <div className="flex gap-4 justify-center mt-2">
                <button
                  onClick={() => setTrackingNumber('EW123456789')}
                  className="text-sky-600 hover:text-sky-800 underline cursor-pointer"
                >
                  EW123456789
                </button>
                <button
                  onClick={() => setTrackingNumber('EW987654321')}
                  className="text-sky-600 hover:text-sky-800 underline cursor-pointer"
                >
                  EW987654321
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tracking Results */}
        {trackingData && (
          <div className="space-y-8">
            {/* Status Overview */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Tracking #{trackingData.trackingNumber}</h3>
                  <p className="text-gray-600">Last updated: {trackingData.lastUpdate}</p>
                </div>
                <div className={`px-4 py-2 rounded-full border font-semibold ${getStatusColor(trackingData.status)}`}>
                  {trackingData.status}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900">Current Location</h4>
                  <p className="text-gray-600">{trackingData.currentLocation}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-calendar-line text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900">Estimated Delivery</h4>
                  <p className="text-gray-600">{trackingData.estimatedDelivery}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-truck-line text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900">Progress</h4>
                  <p className="text-gray-600">{trackingData.progress}% Complete</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Package Journey</span>
                  <span>{trackingData.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-sky-400 to-blue-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${trackingData.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Tracking Events */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tracking History</h3>
              
              <div className="space-y-6">
                {trackingData.events.map((event, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-4 h-4 rounded-full ${index === 0 ? 'bg-sky-500' : 'bg-gray-300'}`}></div>
                      {index < trackingData.events.length - 1 && (
                        <div className="w-0.5 h-12 bg-gray-300 ml-1.5 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900">{event.status}</h4>
                        <div className="text-sm text-gray-500">
                          {event.date} at {event.time}
                        </div>
                      </div>
                      <p className="text-gray-600 mt-1">{event.location}</p>
                      <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}