'use client';

import Link from 'next/link';

export default function BlogGrid() {
  const articles = [
    {
      id: 1,
      category: 'SHIPPING TIPS',
      title: '5 Ways to Reduce International Shipping Costs',
      excerpt: 'Discover proven strategies to minimize your shipping expenses while maintaining quality service and delivery speed.',
      image: 'https://readdy.ai/api/search-image?query=calculator%20with%20shipping%20boxes%20and%20money%20symbols%2C%20cost%20optimization%20concept%2C%20professional%20business%20setting%2C%20clean%20modern%20style&width=400&height=250&seq=blog1&orientation=landscape',
      date: 'December 12, 2024',
      readTime: '6 min read'
    },
    {
      id: 2,
      category: 'CUSTOMS GUIDE',
      title: 'Understanding Customs Declarations and Duties',
      excerpt: 'Navigate customs procedures with confidence. Learn about declaration requirements and duty calculations.',
      image: 'https://readdy.ai/api/search-image?query=customs%20documents%20and%20official%20papers%20on%20desk%2C%20professional%20office%20environment%2C%20international%20trade%20paperwork%2C%20organized%20workspace&width=400&height=250&seq=blog2&orientation=landscape',
      date: 'December 10, 2024',
      readTime: '8 min read'
    },
    {
      id: 3,
      category: 'PACKAGING',
      title: 'Best Practices for Secure Package Shipping',
      excerpt: 'Protect your valuable items during transit with proper packaging techniques and materials.',
      image: 'https://readdy.ai/api/search-image?query=well-packaged%20shipping%20boxes%20with%20protective%20materials%2C%20bubble%20wrap%20and%20packaging%20supplies%2C%20secure%20shipping%20preparation&width=400&height=250&seq=blog3&orientation=landscape',
      date: 'December 8, 2024',
      readTime: '5 min read'
    },
    {
      id: 4,
      category: 'TRACKING',
      title: 'How to Track Your International Shipments',
      excerpt: 'Master the art of shipment tracking across different carriers and understand delivery status updates.',
      image: 'https://readdy.ai/api/search-image?query=digital%20tracking%20interface%20on%20computer%20screen%2C%20package%20tracking%20system%2C%20modern%20logistics%20technology%2C%20professional%20dashboard&width=400&height=250&seq=blog4&orientation=landscape',
      date: 'December 5, 2024',
      readTime: '4 min read'
    },
    {
      id: 5,
      category: 'DELIVERY',
      title: 'Express vs Standard Shipping: Which to Choose?',
      excerpt: 'Compare shipping options to make the best choice for your timeline and budget requirements.',
      image: 'https://readdy.ai/api/search-image?query=delivery%20truck%20and%20airplane%20side%20by%20side%2C%20shipping%20speed%20comparison%20concept%2C%20professional%20logistics%20illustration%2C%20clean%20design&width=400&height=250&seq=blog5&orientation=landscape',
      date: 'December 3, 2024',
      readTime: '7 min read'
    },
    {
      id: 6,
      category: 'BUSINESS',
      title: 'Shipping Solutions for Small Businesses',
      excerpt: 'Scale your business globally with efficient shipping strategies tailored for small and medium enterprises.',
      image: 'https://readdy.ai/api/search-image?query=small%20business%20owner%20with%20shipping%20packages%2C%20professional%20entrepreneur%20workspace%2C%20e-commerce%20fulfillment%2C%20modern%20office%20setting&width=400&height=250&seq=blog6&orientation=landscape',
      date: 'December 1, 2024',
      readTime: '9 min read'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="relative h-48">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link href={`/blog/${article.id}`} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                      Read More
                      <i className="ri-arrow-right-line ml-1"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Search */}
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Search Articles</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search shipping tips..."
                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                    <i className="ri-search-line text-gray-400"></i>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-3">
                  {[
                    { name: 'Shipping Tips', count: 12 },
                    { name: 'Customs Guide', count: 8 },
                    { name: 'Packaging', count: 6 },
                    { name: 'Tracking', count: 5 },
                    { name: 'Business', count: 4 },
                    { name: 'Delivery', count: 7 }
                  ].map((category) => (
                    <li key={category.name}>
                      <Link href={`/blog/category/${category.name.toLowerCase()}`} className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                        <span>{category.name}</span>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{category.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {[
                    'Complete Guide to International Shipping',
                    '5 Ways to Reduce Shipping Costs',
                    'Understanding Customs Declarations'
                  ].map((title, index) => (
                    <Link key={index} href={`/blog/${index + 1}`} className="block group cursor-pointer">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {title}
                      </h4>
                      <span className="text-xs text-gray-500 mt-1">December {15 - index * 2}, 2024</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}