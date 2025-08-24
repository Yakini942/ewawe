import React, { useState, useEffect } from "react";
import Link from "next/link";

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  text: string;
};

const slides: Slide[] = [
  { image: "/hero/mslide 1.jpg", title: "", subtitle: "", text: "" },
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

export default function Mobile() {
  const [current, setCurrent] = useState(0);
  const currentSlide = slides[current];
  const isSecondSlide = current === 2;
  const isLastSlide = current === slides.length - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[40vh] overflow-hidden pt-14">
      {/* Background */}
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
              className="
                w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center pt-10">
        <h1 className="text-2xl font-bold text-white leading-snug mb-2">
          {currentSlide.title}
        </h1>
        <h2 className="text-lg font-semibold text-white mb-2">
          {currentSlide.subtitle}
        </h2>
        <p className="text-sm text-white max-w-xs mb-4">{currentSlide.text}</p>

        {/* CTA Buttons */}
        {(isSecondSlide || isLastSlide) && (
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <Link
              href="/quote"
              className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-3 rounded-xl text-center font-medium"
            >
              Get Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-xl text-center font-medium"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
