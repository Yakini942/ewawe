'use client';
import Link from "next/link";

export default function TrackingFeatures() {
  const features = [
    {
      icon: 'ri-smartphone-line',
      title: 'SMS & Email Alerts',
      description: 'Get instant notifications when your package status changes. Never miss an important update.'
    },
    {
      icon: 'ri-map-line',
      title: 'Real-Time GPS Tracking',
      description: 'See your package location on a live map with precise GPS coordinates and route information.'
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Delivery Scheduling',
      description: 'Choose your preferred delivery time and reschedule if needed. Flexible options for your convenience.'
    },
    {
      icon: 'ri-customer-service-line',
      title: '24/7 Support',
      description: 'Our tracking support team is available around the clock to help with any shipping questions.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50 relative overflow-hidden">
      {/* Floating Ship */}
      <div className="absolute bottom-20 right-20 w-16 h-12 opacity-20 animate-bounce">
        <img 
          src="https://readdy.ai/api/search-image?query=cargo%20ship%20sailing%20on%20ocean%20waves%2C%20minimal%20flat%20design%20with%20sky%20blue%20colors%2C%20simple%20geometric%20vessel%20for%20shipping%20tracking%20features%20section&width=64&height=48&seq=ship4&orientation=landscape" 
          alt="Ship decoration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Tracking Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most comprehensive shipment tracking with features designed to keep you informed and in control
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Tracking?</h3>
            <p className="text-gray-600 mb-6">
              Can't find your package or having issues with tracking? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">          
<Link 
  href="/contact" 
  className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
>
  Contact Support
</Link>

<Link 
  href="https://wa.me/+25078794248678" 
  target="_blank" 
  className="border border-sky-400 text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-all duration-300 cursor-pointer whitespace-nowrap"
>
  Live Chat
</Link>
            </div>
          </div>
        </div>

        {/* Tracking Tips */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Tracking Tips</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="text-center">
              <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-information-line text-white"></i>
              </div>
              <p className="text-gray-600">Tracking numbers are usually 10-12 characters long and start with 'EW'</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-time-line text-white"></i>
              </div>
              <p className="text-gray-600">Tracking information updates every 2-4 hours during transit</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-phone-line text-white"></i>
              </div>
              <p className="text-gray-600">Contact us if your tracking hasn't updated for 48+ hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
