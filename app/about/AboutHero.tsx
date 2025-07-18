'use client';

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-sky-100 to-blue-50 py-20 overflow-hidden">
      {/* Floating Ship */}
      <div className="absolute top-10 right-20 w-16 h-12 opacity-30 animate-bounce">
        <img 
          src="https://readdy.ai/api/search-image?query=modern%20cargo%20ship%20illustration%20floating%20on%20calm%20ocean%20waves%2C%20minimal%20flat%20design%20with%20sky%20blue%20and%20sea%20blue%20colors%2C%20transparent%20background%2C%20side%20view%20of%20container%20vessel%20with%20clean%20geometric%20lines&width=64&height=48&seq=ship2&orientation=landscape" 
          alt="Floating ship"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Floating Clouds */}
      <div className="absolute top-16 left-32 w-12 h-8 opacity-40 animate-pulse">
        <img 
          src="https://readdy.ai/api/search-image?query=white%20fluffy%20cloud%20with%20soft%20edges%20and%20gentle%20curves%2C%20minimalist%20design%20with%20subtle%20cool%20blue%20shading%2C%20transparent%20background%2C%20perfect%20for%20web%20overlay%20graphics&width=48&height=32&seq=cloud1&orientation=landscape" 
          alt="Cloud decoration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-20 left-10 w-20 h-12 opacity-20 animate-bounce">
        <img 
          src="https://readdy.ai/api/search-image?query=commercial%20cargo%20airplane%20flying%20through%20blue%20sky%2C%20clean%20side%20view%20silhouette%2C%20minimal%20flat%20design%20with%20sky%20blue%20colors%2C%20modern%20aviation%20logistics%20theme&width=80&height=48&seq=plane1&orientation=landscape" 
          alt="Airplane decoration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          About <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Ewawe</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Connecting the world through reliable, fast, and affordable shipping solutions. 
          Your trusted partner in global logistics since day one.
        </p>
      </div>
    </section>
  );
}