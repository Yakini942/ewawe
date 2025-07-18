
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent font-pacifico">
                Ewawe
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                About
              </Link>
              <Link href="/tracking" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Tracking
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Blog
              </Link>
              <Link href="/faqs" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                FAQs
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Contact
              </Link>
              <Link href="/quote" className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap">
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 cursor-pointer"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-menu-line text-xl"></i>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                  Home
                </Link>
                <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                  About
                </Link>
                <Link href="/tracking" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                  Tracking
                </Link>
                <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                  Blog
                </Link>
                <Link href="/faqs" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                  FAQs
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                  Contact
                </Link>
                <div className="px-3 py-2">
                  <Link href="/quote" className="block w-full bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap text-center">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100/30 to-blue-200/30"></div>
          {/* Floating Clouds */}
          <div className="absolute top-20 left-10 w-24 h-16 opacity-20">
            <img 
              src="https://readdy.ai/api/search-image?query=fluffy%20white%20cloud%20with%20soft%20edges%20and%20faint%20cool%20blue%20shading%2C%20transparent%20background%2C%20minimal%20design%2C%20floating%20in%20sky&width=96&height=64&seq=cloud1&orientation=landscape" 
              alt="Cloud decoration"
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
          <div className="absolute top-32 right-20 w-32 h-20 opacity-15">
            <img 
              src="https://readdy.ai/api/search-image?query=soft%20fluffy%20white%20cloud%20with%20gentle%20blue%20shadows%2C%20transparent%20background%2C%20dreamy%20appearance%2C%20floating%20peacefully&width=128&height=80&seq=cloud2&orientation=landscape" 
              alt="Cloud decoration"
              className="w-full h-full object-contain animate-pulse"
            />
          </div>
          <div className="absolute top-64 left-1/3 w-28 h-18 opacity-10">
            <img 
              src="https://readdy.ai/api/search-image?query=delicate%20white%20cloud%20with%20subtle%20blue%20tinting%2C%20transparent%20background%2C%20wispy%20edges%2C%20celestial%20atmosphere&width=112&height=72&seq=cloud3&orientation=landscape" 
              alt="Cloud decoration"
              className="w-full h-full
               object-contain animate-pulse"
            />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8 text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
               With ESL Global Shipping Made Easy{' '}
              </h1>
              <p className="text-xl md:text-2xl text-blue-600 font-medium">
                Fast, Affordable, Secure
              </p>
              <p className="text-lg text-gray-600 max-w-lg">
                Paste your product link and get an instant shipping quote. We handle everything from purchase to delivery.
              </p>
              
              {/* Quote Input */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-lg">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="url"
                    placeholder="Paste your product link here..."
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <Link href="/quote" className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap font-medium text-center">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=modern%20cargo%20container%20ship%20sailing%20on%20calm%20blue%20ocean%20with%20sky%20background%2C%20minimal%20flat%20design%20style%2C%20side%20view%20silhouette%20with%20colorful%20shipping%20containers%2C%20professional%20maritime%20logistics%20illustration&width=600&height=400&seq=cargoship1&orientation=landscape" 
                  alt="Cargo Ship"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome to Ewawe Shipping
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We are your trusted partner in global shipping, connecting you to the world's best products. 
                With our extensive network spanning USA, China, Dubai, Turkey, India, Germany, and Japan, 
                we make international shopping simple and affordable.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From small personal items to bulk orders, our team handles every shipment with care and precision, 
                ensuring your products reach you safely and on time.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://readdy.ai/api/search-image?query=clean%20modern%20cargo%20airplane%20side%20view%2C%20minimal%20flat%20design%2C%20professional%20aviation%20logistics%2C%20blue%20and%20white%20color%20scheme%2C%20transparent%20background%20suitable%20for%20shipping%20company&width=400&height=300&seq=airplane1&orientation=landscape" 
                alt="Cargo Airplane"
                className="w-80 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-50 relative overflow-hidden">
        {/* Wave Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" fill="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="url(#wave-gradient)"/>
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4FC3F7"/>
                <stop offset="100%" stopColor="#0288D1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive shipping solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-plane-line',
                title: 'Air Freight',
                description: 'Fast and reliable air shipping for urgent deliveries worldwide.'
              },
              {
                icon: 'ri-ship-line',
                title: 'Sea Freight',
                description: 'Cost-effective ocean shipping for large volumes and bulk orders.'
              },
              {
                icon: 'ri-government-line',
                title: 'Customs Clearance',
                description: 'Expert handling of customs procedures and documentation.'
              },
              {
                icon: 'ri-building-line',
                title: 'Warehousing',
                description: 'Secure storage and inventory management solutions.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 opacity-5">
          <img 
            src="https://readdy.ai/api/search-image?query=minimalist%20globe%20with%20subtle%20meridian%20lines%20and%20dotted%20shipping%20routes%20connecting%20continents%2C%20clean%20design%2C%20professional%20logistics%20symbol&width=80&height=80&seq=globe1&orientation=squarish" 
            alt="Globe decoration"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
        <div className="absolute bottom-32 left-10 w-16 h-16 opacity-5">
          <img 
            src="https://readdy.ai/api/search-image?query=simple%20shipping%20package%20box%20icon%2C%20minimal%20flat%20design%2C%20professional%20logistics%20symbol%2C%20clean%20lines&width=64&height=64&seq=package1&orientation=squarish" 
            alt="Package decoration"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 opacity-5">
          <img 
            src="https://readdy.ai/api/search-image?query=small%20airplane%20silhouette%20icon%2C%20minimal%20design%2C%20transportation%20symbol%2C%20clean%20and%20simple&width=48&height=48&seq=plane1&orientation=squarish" 
            alt="Plane decoration"
            className="w-full h-full object-contain animate-pulse"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ewawe?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of customers worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-time-line',
                title: 'Fast Delivery',
                description: 'Express shipping options to get your products delivered quickly.'
              },
              {
                icon: 'ri-price-tag-3-line',
                title: 'Transparent Pricing',
                description: 'No hidden fees. Clear, upfront pricing for all services.'
              },
              {
                icon: 'ri-global-line',
                title: 'Global Coverage',
                description: 'Shipping from and to major markets worldwide.'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Secure Payments',
                description: 'Safe and secure payment processing with full protection.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Wave Accent Background */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 1200 120" fill="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="url(#testimonial-wave)"/>
            <defs>
              <linearGradient id="testimonial-wave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4FC3F7"/>
                <stop offset="100%" stopColor="#0288D1"/>
              </linearGradient>
            </defs>
          </svg>
          {/* Branded Icons */}
          <img src="https://readdy.ai/api/search-image?query=small%20airplane%20icon%2C%20minimal%20flat%20design%2C%20transparent%20background&width=48&height=48&seq=plane1&orientation=squarish" alt="Plane" className="absolute top-10 left-10 w-10 h-10 opacity-10" />
          <img src="https://readdy.ai/api/search-image?query=package%20box%20icon%2C%20minimal%20flat%20design%2C%20transparent%20background&width=48&height=48&seq=package1&orientation=squarish" alt="Package" className="absolute bottom-10 right-16 w-10 h-10 opacity-10" />
          <img src="https://readdy.ai/api/search-image?query=ship%20icon%2C%20minimal%20flat%20design%2C%20transparent%20background&width=48&height=48&seq=ship1&orientation=squarish" alt="Ship" className="absolute top-1/2 left-1/2 w-12 h-12 opacity-10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from businesses and individuals who trust Ewawe for global shipping.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Testimonial Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 flex flex-col items-center text-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Smith" className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-100" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">John Smith</h3>
              <span className="text-sm text-blue-600 mb-2">USA</span>
              <p className="text-gray-600 mb-4">“Ewawe made international shipping effortless for my business. Fast, reliable, and affordable!”</p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
                ))}
              </div>
            </div>
            {/* Testimonial Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 flex flex-col items-center text-center">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Aisha Al-Farsi" className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-100" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">Aisha Al-Farsi</h3>
              <span className="text-sm text-blue-600 mb-2">UAE</span>
              <p className="text-gray-600 mb-4">“I trust Ewawe for all my shipments from Dubai. Their team is always helpful and my packages arrive on time.”</p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
                ))}
              </div>
            </div>
            {/* Testimonial Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 flex flex-col items-center text-center">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Chen Wei" className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-100" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">Chen Wei</h3>
              <span className="text-sm text-blue-600 mb-2">China</span>
              <p className="text-gray-600 mb-4">“Excellent service and communication. Ewawe helped me ship products to Europe with zero hassle.”</p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
                ))}
              </div>
            </div>
            {/* Testimonial Card 4 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 flex flex-col items-center text-center">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Maria Garcia" className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-100" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">Maria Garcia</h3>
              <span className="text-sm text-blue-600 mb-2">Spain</span>
              <p className="text-gray-600 mb-4">“Affordable rates and fast delivery. Ewawe is my go-to for shipping products from Asia.”</p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
                ))}
              </div>
            </div>
          </div>    
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-400 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Ship? Paste Your Link & Start Now!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Ewawe for their global shipping needs.
          </p>
          <Link href="/quote" className="bg-white text-blue-600 px-12 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 cursor-pointer whitespace-nowrap">
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative">
        {/* Ship Silhouette */}
        <div className="absolute top-8 right-8 w-12 h-8 opacity-20">
          <img 
            src="https://readdy.ai/api/search-image?query=tiny%20ship%20silhouette%20icon%2C%20minimal%20design%2C%20simple%20boat%20outline%2C%20maritime%20symbol&width=48&height=32&seq=ship1&orientation=landscape" 
            alt="Ship decoration"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo Section */}
            <div className="col-span-1">
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent font-pacifico">
                Ewawe
              </span>
              <p className="text-gray-400 mt-4">
                Your trusted partner in global shipping solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Blog</Link></li>
                <li><Link href="/tracking" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Track Package</Link></li>
                <li><Link href="/faqs" className="text-gray-400 hover:text-white transition-colors cursor-pointer">FAQs</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Air Freight</span></li>
                <li><span className="text-gray-400">Sea Freight</span></li>
                <li><span className="text-gray-400">Customs Clearance</span></li>
                <li><span className="text-gray-400">Warehousing</span></li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer" aria-label="WhatsApp">
                  <i className="ri-whatsapp-line text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer" aria-label="Instagram">
                  <i className="ri-instagram-line text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer" aria-label="X (Twitter)">
                  <i className="ri-twitter-x-line text-white"></i>
                </a>
              </div>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              2024 Ewawe Global Shipping. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
