'use client';

import { Link } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-100 relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-lg text-gray-600">
            Multiple ways to reach us for your convenience
          </p>
        </div>

        <div className="space-y-8">
          {/* Email */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-mail-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
                <Link href="mailto:info@ewaweshippersltd.com" className="text-gray-600">info@ewaweshippersltd.com</Link>
                <p className="text-sm text-gray-500">We respond within 2-4 hours</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-phone-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Call Us</h3>
                <p className="text-gray-600">(+250) 787 942 486</p>
                <p className="text-sm text-gray-500">Mon-Sat: 8 AM - 8 PM EST</p>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="ri-whatsapp-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600">(+250) 787 942 486</p>
                  <p className="text-sm text-gray-500">24/7 Instant Support</p>
                </div>
              </div>
              <button>
              <a href="https://wa.me/+250787942486" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap"
                  >Chat Now
                  </a>
              </button>
            </div>
          </div>

          {/* Support Hours */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-time-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Office Hours</h3>
            </div>
            <div className="space-y-2 ml-16">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday:</span>
                <span className="font-semibold text-gray-900">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday:</span>
                <span className="font-semibold text-gray-900">9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday:</span>
                <span className="font-semibold text-gray-900">Closed</span>
              </div>
              <div className="text-sm text-sky-600 mt-3">
              <span className="text-red mt-3">*</span> WhatsApp support available 24/7
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <i className="ri-alarm-warning-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-800">Emergency Support</h3>
                <p className="text-red-700">For urgent shipping issues: (+250) 787 942 486</p>
                <p className="text-sm text-red-600">Available 24/7 for critical shipments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}