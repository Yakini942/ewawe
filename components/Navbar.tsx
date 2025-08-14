'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#154D71] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Name */}
          <div className="flex items-center">
              <Link href='/' className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent font-pacifico">
                Ewawe
              </Link>
            </div>
          {/* Desktop Navigation */}
            <div className="hidden md:flex bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-2 rounded-full shadow-lg cursor-pointer whitespace-nowrap text-center">
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-white hover:underline">
              About
            </Link>
            <Link href="/tracking" className="text-white hover:underline">
              Tracking
            </Link>
            <Link href="/blog" className="text-white hover:underline">
              Blog
            </Link>
            <Link href="/faqs" className="text-white hover:underline">
              FAQs
            </Link>
            <Link href="/contact" className="text-white hover:underline">
              Contact
            </Link>
          </div>

          {/* Get Quote CTA */}
          <div className="px-3 py-2">
                  <Link href="/quote" className="block w-full bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap text-center">
                    Get Quote
                  </Link>
                </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
              aria-label="Toggle menu"
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-600/95 backdrop-blur-sm rounded-lg mt-2 px-4 py-4 space-y-3">
            <Link href="/" className="block text-white hover:underline">
              Home
            </Link>
            <Link href="/about" className="block text-white hover:underline">
              About
            </Link>
            <Link href="/tracking" className="block text-white hover:underline">
              Tracking
            </Link>
            <Link href="/blog" className="block text-white hover:underline">
              Blog
            </Link>
            <Link href="/faqs" className="block text-white hover:underline">
              FAQs
            </Link>
            <Link href="/contact" className="block text-white hover:underline">
              Contact
            </Link>
            <div className="px-3 py-2">
               <Link href="/quote" className="block w-full bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap text-center">
                Get Quote
                  </Link>
                </div>
          </div>
        )}
      </div>
    </nav>
  );
}
