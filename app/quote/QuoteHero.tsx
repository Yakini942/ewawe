'use client';

export default function QuoteHero() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-sky-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-16 w-20 h-20 opacity-10">
          <img 
            src="https://readdy.ai/api/search-image?query=cargo%20airplane%20silhouette%20flying%2C%20minimal%20flat%20design%2C%20professional%20aviation%20symbol%2C%20clean%20lines%20and%20modern%20styling&width=80&height=80&seq=quoteplane1&orientation=squarish" 
            alt="Cargo plane decoration"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
        <div className="absolute bottom-20 left-16 w-24 h-24 opacity-10">
          <img 
            src="https://readdy.ai/api/search-image?query=globe%20with%20shipping%20routes%20and%20connections%2C%20minimal%20design%2C%20professional%20logistics%20symbol%2C%20clean%20geographic%20representation&width=96&height=96&seq=quoteglobe1&orientation=squarish" 
            alt="Globe decoration"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 opacity-10">
          <img 
            src="https://readdy.ai/api/search-image?query=shipping%20container%20icon%20with%20clean%20lines%2C%20minimal%20rectangular%20design%2C%20professional%20logistics%20symbol%2C%20modern%20flat%20style&width=64&height=64&seq=quotecontainer1&orientation=squarish" 
            alt="Container decoration"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Calculate Your Shipping Cost{' '}
          <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            Instantly
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get transparent pricing for your international shipments. No hidden fees, no surprises - just honest, upfront costs.
        </p>
      </div>
    </section>
  );
}