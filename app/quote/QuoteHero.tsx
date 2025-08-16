'use client';

export default function QuoteHero() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Calculate Your Shipping Cost Instantly
        </h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Get transparent pricing for your international shipments. No hidden fees, no surprises - just honest, upfront costs.
        </p>
      </div>
    </section>
  );
}