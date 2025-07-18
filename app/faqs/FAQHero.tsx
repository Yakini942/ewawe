'use client';

export default function FAQHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600 overflow-hidden">
      {/* Background Wave Pattern */}
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 w-full h-32 text-white/10" viewBox="0 0 1440 320" fill="currentColor">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-20 w-16 h-16 opacity-20 animate-float">
        <img 
          src="https://readdy.ai/api/search-image?query=minimalist%20ship%20silhouette%20icon%2C%20clean%20white%20outline%2C%20maritime%20vessel%20symbol%2C%20simple%20boat%20design%20on%20transparent%20background&width=64&height=64&seq=faqship1&orientation=squarish" 
          alt="Ship icon"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-40 right-32 w-12 h-12 opacity-15 animate-float-delayed">
        <img 
          src="https://readdy.ai/api/search-image?query=simple%20cloud%20icon%20outline%2C%20minimal%20white%20cloud%20symbol%2C%20clean%20weather%20icon%20design%20on%20transparent%20background&width=48&height=48&seq=faqcloud1&orientation=squarish" 
          alt="Cloud icon"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Find quick answers to common questions about our services, shipping process, and payments.
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}