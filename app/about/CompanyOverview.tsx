'use client';

export default function CompanyOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Mission & Vision
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-sky-600 mb-4">Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To simplify global shipping by providing fast, affordable, and secure logistics solutions 
                  that connect people to products worldwide. We believe everyone should have access to 
                  international shopping without the complexity of traditional shipping barriers.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the world's most trusted shipping partner, making international commerce 
                  as simple as local shopping. We envision a future where distance is no longer a 
                  barrier to accessing the products you love.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-12 h-8 opacity-30">
                <img 
                  src="https://readdy.ai/api/search-image?query=elegant%20white%20cloud%20with%20soft%20rounded%20edges%20floating%20peacefully%2C%20subtle%20cool%20blue%20shadows%2C%20minimalist%20design%20perfect%20for%20corporate%20backgrounds%2C%20transparent%20background&width=48&height=32&seq=cloud2&orientation=landscape" 
                  alt="Cloud decoration"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold text-sky-500 mb-4">1.8k+</div>
                <p className="text-xl text-gray-700 mb-6">Satisfied Customers</p>
                
                <div className="text-6xl font-bold text-blue-500 mb-4">25+</div>
                <p className="text-xl text-gray-700 mb-6">Countries Served</p>
                
                <div className="text-6xl font-bold text-sky-600 mb-4">99%</div>
                <p className="text-xl text-gray-700">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}