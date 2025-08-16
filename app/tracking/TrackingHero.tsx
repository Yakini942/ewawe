'use client';

export default function TrackingHero() {
  return (
    <section className="relative bg-gradient-to-br from-sky-100 to-blue-50 py-20 overflow-hidden">
      {/* Floating Package */}
      <div className="absolute top-16 right-24 w-16 h-12 opacity-30 animate-bounce">
        <img 
          src="https://readdy.ai/api/search-image?query=shipping%20package%20with%20tracking%20barcode%20and%20delivery%20labels%2C%20modern%20flat%20design%20illustration%2C%20sky%20blue%20and%20white%20colors%2C%20clean%20geometric%20box%20for%20logistics%20tracking&width=64&height=48&seq=trackpackage1&orientation=landscape" 
          alt="Tracking package"
          className="w-full h-full object-contain"
        />
      </div>
      {/* Floating Delivery Truck */}
      <div className="absolute bottom-20 left-16 w-20 h-12 opacity-20 animate-bounce">
        <img 
          src="https://readdy.ai/api/search-image?query=delivery%20truck%20icon%20in%20motion%2C%20modern%20flat%20design%20with%20sky%20blue%20and%20white%20colors%2C%20simple%20geometric%20vehicle%20for%20shipping%20logistics%20tracking%20page&width=80&height=48&seq=truck1&orientation=landscape" 
          alt="Delivery truck"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Track Your <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Shipment</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Enter your tracking number below to get real-time updates on your package location and delivery status. 
          Stay informed every step of the way.
        </p>
      </div>
    </section>
  );
}