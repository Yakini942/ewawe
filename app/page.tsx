'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import HeroSection from './heroSection';
import Testimonials from './Testimonials';
import PartnerMarquee from './PartnerMarquee';
import HeroSectionMobile from './herosectionmobile';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Preloader from '@/components/Preloader';

export default function homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;
return (    

<>
<div className="min-h-screen bg-white">
<Navbar />
      {/* Hero Section */}
      <div className="hidden sm:block">
        <HeroSection />
      </div>
      <div className="block sm:hidden">
        <HeroSectionMobile />
      </div>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome to Ewawe Shippers Limited
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We are your trusted partner in global shopping and shipping, connecting you to the world's best products.
                With our extensive network spanning USA, China, Dubai, Turkey, India, Germany, and Japan,
                we make international shopping simple and affordable.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From small personal items to bulk orders, our team handles every shipment with care and precision,
                ensuring your products reach you safely and on time.
              </p>
              </motion.div>
            </div>

       <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
          >  
            <div className="relative justify-center items-center flex">
              <img
                src="/hero/man.png"
                alt="Cargo Airplane"
                className="w-40 h-40 border-b-4 border-blue-400 rounded-full p-4"/>
            </div>
            </motion.div> 
          </div>
        </div>
      </section>

      {/* Partner Marquee */}
      <PartnerMarquee />


      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-50 relative overflow-hidden">
        {/* Wave Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" fill="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="url(#wave-gradient)" />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4FC3F7" />
                <stop offset="100%" stopColor="#0288D1" />
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
            className="w-full h-full object-contain animate-pulse" />
        </div>
        <div className="absolute bottom-32 left-10 w-16 h-16 opacity-5">
          <img
            src="https://readdy.ai/api/search-image?query=simple%20shipping%20package%20box%20icon%2C%20minimal%20flat%20design%2C%20professional%20logistics%20symbol%2C%20clean%20lines&width=64&height=64&seq=package1&orientation=squarish"
            alt="Package decoration"
            className="w-full h-full object-contain animate-pulse" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 opacity-5">
          <img
            src="https://readdy.ai/api/search-image?query=small%20airplane%20silhouette%20icon%2C%20minimal%20design%2C%20transportation%20symbol%2C%20clean%20and%20simple&width=48&height=48&seq=plane1&orientation=squarish"
            alt="Plane decoration"
            className="w-full h-full object-contain animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ESL?
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

      <Testimonials />

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
      <Footer />
    </div>
    </>
  );
}
