'use client';

import { useState } from 'react';

export default function QuoteCalculator() {
  const [formData, setFormData] = useState({
    productLink: '',
    productPrice: '',
    weight: '',
    destination: ''
  });
  
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Australia', 
    'Japan', 'South Korea', 'Singapore', 'Hong Kong', 'India', 'Brazil', 
    'Mexico', 'Italy', 'Spain', 'Netherlands', 'Sweden', 'Norway'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateShipping = async () => {
    if (!formData.productPrice || !formData.weight || !formData.destination) {
      alert('Please fill in all required fields');
      return;
    }

    setIsCalculating(true);
    
    // Simulate API call
    setTimeout(() => {
      const baseRate = parseFloat(formData.weight) * 12; // $12 per kg base rate
      const insuranceRate = parseFloat(formData.productPrice) * 0.02; // 2% insurance
      const serviceFee = 25; // Fixed service fee
      
      const shippingCost = baseRate + insuranceRate;
      const total = shippingCost + serviceFee;
      
      // Delivery time based on destination
      const deliveryDays = formData.destination.includes('United States') ? '3-5' : 
                          formData.destination.includes('Canada') ? '4-6' : 
                          formData.destination.includes('Europe') ? '5-8' : '7-12';

      setResults({
        shippingCost: shippingCost.toFixed(2),
        serviceFee: serviceFee.toFixed(2),
        total: total.toFixed(2),
        deliveryTime: `${deliveryDays} business days`
      });
      
      setIsCalculating(false);
    }, 2000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-8 lg:p-12">
            {/* Form */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Link
                  </label>
                  <input
                    type="url"
                    name="productLink"
                    value={formData.productLink}
                    onChange={handleInputChange}
                    placeholder="https://example.com/product"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1">Paste the URL of the product you want to ship</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Price (USD) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      name="productPrice"
                      value={formData.productPrice}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Weight (KG) *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      placeholder="0.0"
                      min="0.1"
                      step="0.1"
                      className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      required
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">kg</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Approximate weight of your item</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination Country *
                  </label>
                  <div className="relative">
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select destination</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <div className="text-center mb-8">
              <button
                onClick={calculateShipping}
                disabled={isCalculating}
                className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-12 py-4 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCalculating ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                    Calculating...
                  </div>
                ) : (
                  'Calculate Shipping Cost'
                )}
              </button>
            </div>

            {/* Results */}
            {results && (
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Your Shipping Quote
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Shipping Cost</span>
                      <span className="font-semibold text-gray-900">${results.shippingCost}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Service Fee</span>
                      <span className="font-semibold text-gray-900">${results.serviceFee}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-t-2 border-blue-200">
                      <span className="text-lg font-bold text-gray-900">Total Cost</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                        ${results.total}
                      </span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="ri-time-line text-2xl text-white"></i>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Estimated Delivery</h4>
                      <p className="text-blue-600 font-semibold text-lg">{results.deliveryTime}</p>
                      <p className="text-sm text-gray-500 mt-2">To {formData.destination}</p>
                    </div>
                  </div>
                </div>

                {/* Proceed Button */}
                <div className="text-center">
                  <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-10 py-4 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap font-medium text-lg">
                    Proceed to Ship
                    <i className="ri-arrow-right-line ml-2"></i>
                  </button>
                  <p className="text-sm text-gray-500 mt-3">
                    Ready to ship? We'll guide you through the next steps.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}