import React, { useState, useEffect } from 'react';

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  text: string;
};

const slides: Slide[] = [
  {
    image: '/hero/Slide 1.jpg',
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
    image: '/hero/slide 4.jpg',
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
    <section className="relative w-full h-screen min-h-[500px] max-h-[900px] sm:min-h-[100px] md:min-h-[70px] lg:min-h-[800px] xl:min-h-screen pt-16 overflow-hidden">
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
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 to-blue-900/50 sm:from-sky-900/40 sm:to-blue-900/40 md:from-sky-100/30 md:to-blue-200/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 text-left z-10">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight tracking-tight">
              {currentSlide.title}
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white leading-relaxed">
              {currentSlide.subtitle}
            </h2>
            
            {/* Text */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed max-w-2xl">
              {currentSlide.text}
            </p>

            {/* Show CTA only on first and last slides */}
            {(isFirstSlide || isLastSlide) && (
              <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-4 sm:mt-6 md:mt-8">
                <button className="w-full xs:w-auto sm:w-auto bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer font-medium text-center text-sm sm:text-base md:text-lg">
                  Get Quote
                </button>
                <button className="w-full xs:w-auto sm:w-auto border-2 border-white text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300 font-medium text-center text-sm sm:text-base md:text-lg">
                  Contact Us
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 md:gap-4 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 rounded-full transition-all duration-300 ${
              index === current
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/80 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
