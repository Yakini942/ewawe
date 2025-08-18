import React, { useState, useEffect } from "react";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  text: string;
};

const slides: Slide[] = [
  { image: "/hero/Slide 1.jpg", title: "", subtitle: "", text: "" },
  { image: "/hero/slide 2.jpg", title: "", subtitle: "", text: "" },
  {
    image: "/hero/slide 3.jpg",
    title: "Get your Order",
    subtitle: "Or your Money Back",
    text: "Shop confidently with ESL Money Back Guarantee",
  },
  {
    image: "/hero/slide 4.jpg",
    title: "Ewawe Shippers Limited",
    subtitle: "Global Shipping Made Easy",
    text: "FAST, RELIABLE & AFFORDABLE",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const currentSlide = slides[current];
  const isFirstSlide = current === 2;
  const isLastSlide = current === slides.length - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-screen pt-16 overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`${slide.title} - ${slide.subtitle}`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 30 " />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl space-y-4 md:space-y-6 lg:space-y-8 text-left z-10">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {currentSlide.title}
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-relaxed">
              {currentSlide.subtitle}
            </h2>

            {/* Text */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed max-w-xl">
              {currentSlide.text}
            </p>

            {/* Show CTA only on first and last slides */}
            {(isFirstSlide || isLastSlide) && (
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="w-full sm:w-auto bg-gradient-to-r from-sky-400 to-blue-600 text-white px-8 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-medium text-base">
                  Get Quote
                </button>
                <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300 font-medium text-base">
                  Contact Us
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/80 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
