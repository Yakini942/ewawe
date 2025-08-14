'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#154D71] text-white py-16 relative">
      {/* Decorative Waves */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="col-span-1">
            <Link href="/" className="cursor-pointer">
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent font-pacifico">
                ESL
              </span>
            </Link>
            <p className="text-gray-400 mt-4">
              Your trusted partner in global shipping solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-[#E9E9E9] font-bold mb-4 ">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Blog</Link></li>
              <li><Link href="/tracking" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Track Package</Link></li>
              <li><Link href="/faqs" className="text-gray-400 hover:text-white transition-colors cursor-pointer">FAQs</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg text-[#E9E9E9] font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Air Freight</span></li>
              <li><span className="text-gray-400">Sea Freight</span></li>
              <li><span className="text-gray-400">Customs Clearance</span></li>
              <li><span className="text-gray-400">Warehousing</span></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg text-[#E9E9E9] font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://wa.me/+250787942486" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer" aria-label="WhatsApp">
                <i className="ri-whatsapp-line text-white"></i>
              </a>
              <a href="https://www.instagram.com/ewaweshippersltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer" aria-label="Instagram">
                <i className="ri-instagram-line text-white"></i>
              </a>
              <a href="https://x.com/ewawe_ltd?s=21" className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer" aria-label="X (Twitter)">
                <i className="ri-twitter-x-line text-white"></i>
              </a>
              <a href="www.linkedin.com/in/ewawe-shippers-ltd-esl-a50703238" className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer" aria-label="Linkedin (Linkedin)">
                <i className="ri-linkedin-box-line text-white"></i>
              </a>
               
              <a href="https://www.facebook.com/share/16gyShLx3N/?mibextid=wwXIfr" className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer" aria-label="Linkedin (Linkedin)">
                <i className="ri-facebook-box-line text-white"></i>
              </a>
              
            </div>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Ewawe Shippers Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}