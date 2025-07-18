'use client';

export default function GlobalReach() {
  const countries = [
    { name: 'United States', flag: '🇺🇸', routes: '15,000+ shipments' },
    { name: 'China', flag: '🇨🇳', routes: '12,000+ shipments' },
    { name: 'Dubai (UAE)', flag: '🇦🇪', routes: '8,500+ shipments' },
    { name: 'Turkey', flag: '🇹🇷', routes: '6,200+ shipments' },
    { name: 'India', flag: '🇮🇳', routes: '9,800+ shipments' },
    { name: 'Germany', flag: '🇩🇪', routes: '7,400+ shipments' },
    { name: 'Japan', flag: '🇯🇵', routes: '5,900+ shipments' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-50 relative overflow-hidden">
      {/* Floating Airplane */}
      <div className="absolute top-32 right-16 w-20 h-12 opacity-30 animate-bounce">
        <img 
          src="https://readdy.ai/api/search-image?query=modern%20cargo%20airplane%20flying%20through%20clear%20blue%20sky%2C%20clean%20side%20profile%20view%2C%20minimalist%20flat%20design%20with%20sky%20blue%20and%20white%20colors%2C%20commercial%20aviation%20logistics%20theme&width=80&height=48&seq=plane2&orientation=landscape" 
          alt="Airplane decoration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Global Reach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting you to major markets worldwide with reliable shipping networks
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* World Map */}
          <div className="relative bg-white rounded-2xl p-8 shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl flex items-center justify-center relative overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=world%20map%20with%20highlighted%20shipping%20routes%20connecting%20USA%20China%20Dubai%20Turkey%20India%20Germany%20Japan%2C%20dotted%20lines%20showing%20global%20logistics%20network%2C%20clean%20minimal%20design%20with%20sky%20blue%20and%20sea%20blue%20colors&width=600&height=400&seq=worldmap1&orientation=landscape"
                alt="Global shipping network map"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+ Countries Served</h3>
              <p className="text-gray-600">Expanding our network every month</p>
            </div>
          </div>

          {/* Countries List */}
          <div className="space-y-4">
            {countries.map((country, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{country.flag}</span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{country.name}</h4>
                    <p className="text-sm text-gray-500">{country.routes}</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-plane-line text-white text-sm"></i>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center bg-white rounded-xl p-8 shadow-md">
            <div className="text-4xl font-bold text-sky-500 mb-2">50+</div>
            <p className="text-gray-600">Countries Served</p>
          </div>
          <div className="text-center bg-white rounded-xl p-8 shadow-md">
            <div className="text-4xl font-bold text-blue-500 mb-2">100+</div>
            <p className="text-gray-600">Shipping Routes</p>
          </div>
          <div className="text-center bg-white rounded-xl p-8 shadow-md">
            <div className="text-4xl font-bold text-sky-600 mb-2">24/7</div>
            <p className="text-gray-600">Global Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}