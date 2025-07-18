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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1372345206327!2d-74.00597098459418!3d40.71277507932883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e5b73c7%3A0x4c8d7bace8c7c3da!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
              width="150%"
              height="150%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ewawe Office Location"
            ></iframe>
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
                  <p className="text-lg font-semibold text-gray-900">Ewawe Global Shipping</p>
                  <p className="text-gray-600">123 Logistics Avenue</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                  <p className="text-gray-600">United States</p>
                </div>
                <div className="pt-4 border-t border-sky-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Office Hours:</h4>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 6:00 PM</p>
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