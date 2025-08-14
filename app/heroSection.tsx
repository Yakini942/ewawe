'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const heroImages = [
'/hero/ship.jpg',
'/hero/plane.jpg',
'/hero/ship.jpg'
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Hero slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/30 to-blue-200/30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Ship Your Favorite Products Worldwide
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-medium">
              Fast, Affordable, Secure
            </p>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-lg">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="url"
                  placeholder="Paste your product link here..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <Link
                  href="/quote"
                  className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap font-medium text-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Optional Right Image */}
          <div className="relative z-10" />
        </div>
      </div>
    </section>
  );
}
