'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  text: string;
};

const slides: Slide[] = [
  {
    image: '/hero/slide 1.jpg',
    title: '',
    subtitle: '',
    text: '',
  },
  {
    image: '/hero/slide 2.jpg',
    title: '',
    subtitle: '',
    text: '',
  },
  {
    image: '/hero/slide 3.jpg',
    title: 'Get your Order',
    subtitle: 'Or your Money Back',
    text: 'Shop confidently with ESL Money Back Guarantee',
  },
  {
    image: '/hero/slide 4.jpgcv',
    title: 'Ewawe Shippers Limited',
    subtitle: 'Global Shipping Made Easy',
    text: 'FAST, RELIABLE & AFFORDABLE',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const currentSlide = slides[current];
  const isFirstSlide = current === 0;
  const isLastSlide = current === slides.length - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
                src={slide.image}
                alt={`${slide.title} - ${slide.subtitle}`}
                className="w-full h-full object-contain sm:object-cover"
              />

            <div className="absolute inset-0 bg-gradient-to-br from-sky-900/40 to-blue-900/40 sm:from-sky-100/30 sm:to-blue-200/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 min-h-[70vh] flex items-center">
        <div className="max-w-3xl space-y-4 sm:space-y-8 text-left z-10">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {currentSlide.title}
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
            {currentSlide.subtitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white">
            {currentSlide.text}
          </p>

          {/* Show CTA only on first and last slides */}
          {(isFirstSlide || isLastSlide) && (
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 ${
                isLastSlide ? 'sm:justify-end' : ''
              }`}
            >
              <Link
                href="/quote"
                className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer font-medium text-center"
              >
                Get Quote
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-6 sm:px-8 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300 font-medium text-center"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === current
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
