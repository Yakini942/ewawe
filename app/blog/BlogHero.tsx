'use client';

export default function BlogHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-sky-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-16 h-16 opacity-10">
          <img 
            src="https://readdy.ai/api/search-image?query=minimal%20ship%20icon%20with%20clean%20lines%2C%20professional%20maritime%20symbol%2C%20transparent%20background%2C%20logistics%20branding%20element&width=64&height=64&seq=blogship1&orientation=squarish" 
            alt="Ship decoration"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
        <div className="absolute bottom-20 left-10 w-20 h-20 opacity-10">
          <img 
            src="https://readdy.ai/api/search-image?query=simple%20globe%20with%20shipping%20routes%2C%20minimal%20design%2C%20professional%20logistics%20symbol%2C%20clean%20and%20modern&width=80&height=80&seq=blogglobe1&orientation=squarish" 
            alt="Globe decoration"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 opacity-10">
          <img 
            src="https://readdy.ai/api/search-image?query=shipping%20container%20icon%2C%20minimal%20flat%20design%2C%20professional%20logistics%20symbol%2C%20clean%20rectangular%20shape&width=48&height=48&seq=blogcontainer1&orientation=squarish" 
            alt="Container decoration"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Shipping <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Insights</span> & Tips
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest shipping trends, practical tips, and industry insights to make your international shipping experience seamless and cost-effective.
        </p>
      </div>
    </section>
  );
}