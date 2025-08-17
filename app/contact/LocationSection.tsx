'use client';

export default function LocationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
          <p className="text-lg text-gray-600">
            Visit our headquarters or connect with our regional warehouses worldwide
          </p>
        </div>

        {/* Row 1: Map + HQ */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Map */}
          <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2172.972260366668!2d30.0571038!3d-1.9455742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7b893f98e67%3A0x3919cfd812512842!2sEwawe%20Shippers%20Ltd!5e1!3m2!1sen!2srw!4v1755171758994!5m2!1sen!2srw"
              width="100%"
              height="100%"
              loading="lazy"
            />
          </div>

          {/* HQ */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-building-2-line text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Headquarters</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold text-gray-900">Ewawe Shippers Limited</p>
                <p className="text-gray-600">Eden Tower, 2nd Floor, near Makuza Peace Plaza</p>
                <p className="text-gray-600">KN 72 Street, Kigali</p>
                <p className="text-gray-600">Rwanda</p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Other Warehouses */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* China */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-600 rounded-full flex items-center justify-center">
                <i className="ri-map-pin-line text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">China Warehouses</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold text-gray-900">By Air</p>
                <p className="text-gray-600">First Floor, Building 2, Dezhong Science and Technology Park</p>
                <p className="text-gray-600">No. 45 Qilinling Road, Tangxia, Dongguan, Guangdong</p>
                <p className="text-gray-600">Contact: Miss Zou — 18124516942 (ID: 136954)</p>
              </div>
              <div className="pt-4 border-t border-sky-200">
                <p className="text-lg font-semibold text-gray-900">By Water</p>
                <p className="text-gray-600">Finished Products Warehouse A8</p>
                <p className="text-gray-600">Herusha Market, Lishui Town</p>
                <p className="text-gray-600">Nanhai District, Foshan City, Guangdong Province</p>
              </div>
            </div>
          </div>

          {/* US */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <i className="ri-flag-line text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">US Sales Tax-Free Address</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">4283 Express Lane</p>
              <p className="text-gray-600">Suite RW2056</p>
              <p className="text-gray-600">Sarasota, FL 34249</p>
              <p className="text-gray-600">Telephone: +1 (941) 538-6941</p>
            </div>
          </div>

          {/* UK */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-700 rounded-full flex items-center justify-center">
                <i className="ri-flag-2-line text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">UK Warehouse</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Suite RW2056</p>
              <p className="text-gray-600">Unit 9, Skyport Drive</p>
              <p className="text-gray-600">West Drayton, Middx UB7 0LB</p>
              <p className="text-gray-600">Telephone: +44 0175 321 0551</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
