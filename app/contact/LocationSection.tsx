'use client';

export default function LocationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Location</h2>
          <p className="text-lg text-gray-600">
            Visit our headquarters or find us on the map
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">    
         <iframe 
         src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2172.972260366668!2d30.0571038!3d-1.9455742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7b893f98e67%3A0x3919cfd812512842!2sEwawe%20Shippers%20Ltd!5e1!3m2!1sen!2srw!4v1755171758994!5m2!1sen!2srw" 
         width="150%" 
         height="150%" 
         loading="lazy" 
        >
         </iframe>
            
          </div>

          {/* Address Information & Regional Offices Horizontal Layout */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8 mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-map-pin-line text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Headquarters</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-semibold text-gray-900">Ewawe Shippers Limited</p>
                  <p className="text-gray-600">Eden tower 2nd floor, near Makuza peace plaza</p>
                  <p className="text-gray-600">KN 72 street kigali Rwanda</p>
                  <p className="text-gray-600">Kigali, Rwanda</p>
                </div>
                <div className="pt-4 border-t border-sky-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Office Hours:</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div>     
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}