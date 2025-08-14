'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
      <nav className="sticky top-0 z-50 bg-[#154D71] backdrop-blur-sm">
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
              <Link href="/" className="text-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                About
              </Link>
              <Link href="/tracking" className="text-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Tracking
              </Link>
              <Link href="/blog" className="text-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Blog
              </Link>
              <Link href="/faqs" className="text-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                FAQs
              </Link>
              <Link href="/contact" className="text-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
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
    
  );
}
