'use client';

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-sky-100 to-blue-50 py-16 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Get In <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Have questions about shipping? Need a custom quote? Our friendly team is here to help you 
          with all your global shipping needs.
        </p>
      </div>
    </section>
  );
}