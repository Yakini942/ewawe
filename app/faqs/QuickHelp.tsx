'use client';

import Link from 'next/link';

export default function QuickHelp() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-sky-50 to-blue-50 overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute top-10 left-20 w-16 h-16 opacity-10 animate-float">
        <img 
          src="https://readdy.ai/api/search-image?query=minimal%20globe%20icon%20outline%2C%20simple%20world%20map%20symbol%2C%20clean%20earth%20icon%20design%20with%20transparent%20background&width=64&height=64&seq=faqglobe1&orientation=squarish" 
          alt="Globe icon"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-16 right-24 w-14 h-14 opacity-10 animate-float-delayed">
        <img 
          src="https://readdy.ai/api/search-image?query=simple%20package%20box%20icon%20outline%2C%20minimal%20shipping%20box%20symbol%2C%20clean%20delivery%20package%20design%20on%20transparent%20background&width=56&height=56&seq=faqpackage1&orientation=squarish" 
          alt="Package icon"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-32 right-40 w-12 h-12 opacity-8 animate-pulse">
        <img 
          src="https://readdy.ai/api/search-image?query=tiny%20help%20question%20mark%20icon%2C%20minimal%20support%20symbol%2C%20clean%20assistance%20icon%20design%20on%20transparent%20background&width=48&height=48&seq=faqhelp1&orientation=squarish" 
          alt="Help icon"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-question-line text-2xl text-white"></i>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Didn't find your answer?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions about shipping, tracking, or our services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-mail-line mr-2"></i>
              Contact Support
            </Link>
            
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              WhatsApp Chat
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-time-line text-blue-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Available anytime</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-chat-smile-line text-green-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
                <p className="text-gray-600 text-sm">Instant responses</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-phone-line text-purple-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
                <p className="text-gray-600 text-sm">Call us directly</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-3deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}