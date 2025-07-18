'use client';

export default function OurValues() {
  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Trust',
      description: 'We build lasting relationships through transparency, reliability, and consistent service delivery that exceeds expectations.'
    },
    {
      icon: 'ri-eye-line',
      title: 'Transparency',
      description: 'No hidden fees, clear communication, and real-time tracking so you always know exactly where your shipment stands.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Speed',
      description: 'Fast processing, quick delivery times, and efficient logistics networks to get your packages where they need to be.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Customer Care',
      description: '24/7 support, personalized service, and dedicated account managers who truly care about your shipping experience.'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Floating Globe */}
      <div className="absolute top-20 left-20 w-16 h-16 opacity-20 animate-spin">
        <img 
          src="https://readdy.ai/api/search-image?query=world%20globe%20with%20subtle%20meridian%20lines%20and%20dotted%20shipping%20routes%20connecting%20continents%2C%20minimal%20flat%20design%20with%20sky%20blue%20accents%2C%20transparent%20background%20showing%20global%20connectivity&width=64&height=64&seq=globe1&orientation=squarish" 
          alt="Globe decoration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do and define who we are as a company
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${value.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}