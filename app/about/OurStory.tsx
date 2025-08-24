'use client';

export default function OurStory() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50 relative overflow-hidden">
      {/* Floating Package */}
      <div className="absolute top-20 right-32 w-12 h-12 opacity-20 animate-pulse">
        <img 
          src="https://readdy.ai/api/search-image?query=shipping%20package%20box%20with%20delivery%20tape%20and%20labels%2C%20modern%20flat%20design%20illustration%2C%20sky%20blue%20and%20white%20colors%2C%20clean%20geometric%20shape%20for%20logistics%20branding&width=48&height=48&seq=package1&orientation=squarish" 
          alt="Package decoration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a simple idea to a global shipping solution trusted by thousands
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-600 rounded-full"></div>

          <div className="space-y-16">
            {/* Timeline Item 1 */}
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-sky-600 mb-3">2020 - The Beginning</h3>
                  <p className="text-gray-600">
                    Founded with a vision to make international shipping accessible to everyone. 
                    Started with a small team and big dreams in a small office.
                  </p>
                </div>
              </div>
              <div className="relative z-10">
                <div className="w-6 h-6 bg-sky-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              <div className="w-1/2 pl-8"></div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="relative z-10">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              <div className="w-1/2 pl-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">2021 - Global Expansion</h3>
                  <p className="text-gray-600">
                    Expanded our network to include major shipping routes from USA, China, Dubai, 
                    and European markets. Served our first 500 customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-sky-600 mb-3">2022 - Technology Innovation</h3>
                  <p className="text-gray-600">
                    Launched our advanced web based system shipping cost calculator that 
                    helps customers to know their instant quotes.
                  </p>
                </div>
              </div>
              <div className="relative z-10">
                <div className="w-6 h-6 bg-sky-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              <div className="w-1/2 pl-8"></div>
            </div>

            {/* Timeline Item 4 */}
            <div className="flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="relative z-10">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              <div className="w-1/2 pl-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">2024 - Today & Beyond</h3>
                  <p className="text-gray-600">
                    Now serving 700+ customers across 35+ countries with 99% on-time delivery. 
                    Continuing to innovate and expand our global reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}