'use client';

import Link from 'next/link';

export default function FeaturedArticle() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-3xl overflow-hidden shadow-lg">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20shipping%20warehouse%20with%20packages%20and%20logistics%20operations%2C%20professional%20business%20environment%2C%20bright%20lighting%2C%20organized%20workflow%2C%20international%20commerce&width=600&height=400&seq=featured1&orientation=landscape" 
                alt="Featured Article"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-blue-600 font-medium text-sm">SHIPPING GUIDE</span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-500 text-sm">December 15, 2024</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Complete Guide to International Shipping: From Product Purchase to Your Doorstep
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Learn everything you need to know about international shipping, including customs procedures, packaging requirements, shipping methods, and cost optimization strategies for your global purchases.
              </p>
              <Link href="/blog/international-shipping-guide" className="inline-flex items-center bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap font-medium w-fit">
                Read Full Article
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}