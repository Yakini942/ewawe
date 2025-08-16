'user client';
import ContactPopup from './ContactPopup';

import React, { useState, Component } from 'react'
type FormData = {
  productLink: string
  productPrice: string
  weight: string
  length: string
  width: string
  height: string
  destination: string
  origin: string
}
type CalculationResults = {
  volumeWeight: number
  chargeableWeight: number
  shippingCost: number
  totalCost: number
  totalWithProductPrice: number
}
export function ShippingCalculator() {
  const [formData, setFormData] = useState<FormData>({
    productLink: '',
    productPrice: '',
    weight: '',
    length: '',
    width: '',
    height: '',
    destination: 'RW',
    origin: 'US', // USA as default
  })
  const [results, setResults] = useState<CalculationResults>({
    volumeWeight: 0,
    chargeableWeight: 0,
    shippingCost: 0,
    totalCost: 0,
    totalWithProductPrice: 0,
  })
  const [showResults, setShowResults] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  // Origin countries with special rates
  const originCountries = [
    {
      code: 'US',
      name: 'United States',
      rate: 25,
    },
    {
      code: 'CN',
      name: 'China',
      rate: 19,
    },
    {
      code: 'AE',
      name: 'Dubai (UAE)',
      rate: 17,
    },
    {
      code: 'GB',
      name: 'United Kingdom',
      rate: 30,
    },
    {
      code: 'IN',
      name: 'India',
      rate: 27,
    },
    {
      code: 'OTHER',
      name: 'Other Countries',
      rate: 20,
    },
  ]
  // List of countries with ISO codes
  const countries = [
    {
      code: 'RW',
      name: 'Rwanda',
    },
    ,
     ]
  // Handle form changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    // For product price, only allow numbers and decimal points
    if (name === 'productPrice') {
      const sanitizedValue = value.replace(/[^0-9.]/g, '')
      setFormData({
        ...formData,
        [name]: sanitizedValue,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }
  // Handle contact form changes
    
  // Get shipping rate based on origin country
  const getShippingRate = (originCode: string): number => {
    const originCountry = originCountries.find(
      (country) => country.code === originCode,
    )
    return originCountry ? originCountry.rate : 20 // Default rate if not found
  }
  const calculateShippingCosts = () => {
    // Parse input values to numbers
    const productPrice = parseFloat(formData.productPrice) || 0
    const weight = parseFloat(formData.weight) || 0
    const length = parseFloat(formData.length) || 0
    const width = parseFloat(formData.width) || 0
    const height = parseFloat(formData.height) || 0
    // Calculate volume weight
    const volumeWeight = (length * width * height) / 5000
    // Calculate chargeable weight (max of actual weight and volume weight)
    const chargeableWeight = Math.max(weight, volumeWeight)
    // Get shipping rate based on origin
    const ratePerKg = getShippingRate(formData.origin)
    // Calculate shipping cost
    const shippingCost = chargeableWeight * ratePerKg  // Converting USD to RWF (approximate)
    // Calculate total cost (without product price)
    const totalCost = shippingCost
    // Calculate total with product price
    const totalWithProductPrice = totalCost + productPrice
    // Update results
    setResults({
      volumeWeight,
      chargeableWeight,
      shippingCost,
      totalCost,
      totalWithProductPrice,
    })
    // Show results
    setShowResults(true)
  }
  // Format currency
  const formatCurrency = (amount: number): string => {
    return `RWF ${amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  }
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    calculateShippingCosts()
  }
  // Handle proceed with shipping
  const handleProceedShipping = () => {
    setShowPopup(true)
  }
  // Handle WhatsApp option
  const handleWhatsApp = () => {
    // Format message with product details and shipping costs
    const message = `Hello, I'd like to ship a product:
Product Link: ${formData.productLink}
Product Price: ${formatCurrency(parseFloat(formData.productPrice) || 0)}
Shipping Cost: ${formatCurrency(results.shippingCost)}
Total Cost: ${formatCurrency(results.totalWithProductPrice)}`
    // Create WhatsApp link with pre-filled message
    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/250787942486?text=${encodedMessage}`
    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank')
    setShowPopup(false)
  }
  // Handle Email option
  const handleEmailOption = () => {
    setShowEmailForm(true)
    setShowPopup(false)
  }
  // Handle email form submission
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    alert('Thank you! We will contact you shortly about your shipping.')
    setShowEmailForm(false)
    setContactForm({
      firstName: '',
      lastName: '',
      email: '',
    })
  }
  // Close popup
  const closePopup = () => {
    setShowPopup(false)
    setShowEmailForm(false)
  }
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Shipping Cost Calculator
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="lg:flex lg:space-x-6">
          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 lg:mb-0 lg:w-1/2">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Package Details
            </h2>
            <div className="mb-4">
              <label
                htmlFor="productLink"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Product Link
              </label>
              <input
                type="url"
                id="productLink"
                name="productLink"
                value={formData.productLink}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://example.com/product"
                aria-label="Product link URL"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="productPrice"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Product Price
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">RWF</span>
                </div>
                <input
                  type="text"
                  id="productPrice"
                  name="productPrice"
                  value={formData.productPrice}
                  onChange={handleInputChange}
                  className="block w-full pl-14 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                  aria-label="Product price in RWF"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="weight"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Weight (kg)
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="0.00"
                min="0"
                step="0.01"
                aria-label="Weight in kilograms"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dimensions (cm)
              </label>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <input
                    type="number"
                    id="length"
                    name="length"
                    value={formData.length}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Length"
                    min="0"
                    step="0.1"
                    aria-label="Length in centimeters"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    id="width"
                    name="width"
                    value={formData.width}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Width"
                    min="0"
                    step="0.1"
                    aria-label="Width in centimeters"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Height"
                    min="0"
                    step="0.1"
                    aria-label="Height in centimeters"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="origin"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Origin Country
              </label>
              <select
                id="origin"
                name="origin"
                value={formData.origin}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                aria-label="Shipping origin country"
              >
                {originCountries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} (${country.rate}/kg)
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="destination"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Destination Country
              </label>
              <select
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                aria-label="Shipping destination country"
                disabled
              >
                <option value="RW">Rwanda</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Currently only shipping to Rwanda
              </p>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Calculate Shipping Cost
              </button>
            </div>
          </div>
          {/* Results Section */}
          {showResults && (
            <div className="bg-white p-6 rounded-lg shadow-md lg:w-1/2">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Shipping Cost Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Volume Weight:</span>
                  <span className="font-medium">
                    {results.volumeWeight.toFixed(2)} kg
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Chargeable Weight:</span>
                  <span className="font-medium">
                    {results.chargeableWeight.toFixed(2)} kg
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Shipping Cost:</span>
                  <span className="font-medium">
                    {formatCurrency(results.shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Product Price:</span>
                  <span className="font-medium">
                    {formatCurrency(parseFloat(formData.productPrice) || 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 mt-2 bg-blue-50 rounded-md px-3">
                  <span className="text-gray-800 font-semibold">
                    Total Cost (with product):
                  </span>
                  <span className="text-blue-600 font-bold text-xl">
                    {formatCurrency(results.totalWithProductPrice)}
                  </span>
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                <p>
                  * Shipping rate from{' '}
                  {
                    originCountries.find((c) => c.code === formData.origin)
                      ?.name
                  }
                  : $
                  {
                    originCountries.find((c) => c.code === formData.origin)
                      ?.rate
                  }
                  /kg
                </p>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleProceedShipping}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                >
                  Proceed with Shipping
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
      {/* Contact Method Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              How would you like to proceed?
            </h3>
            <p className="text-gray-600 mb-6">
              Choose your preferred contact method to continue with shipping.
            </p>
            <div className="space-y-3">
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors"
              >
                <span>Continue with WhatsApp</span>
              </button>
              <button
                onClick={handleEmailOption}
                className="w-full flex items-center justify-center bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                <span>Continue with Email</span>
              </button>
              <button
                onClick={closePopup}
                className="w-full text-gray-500 py-2 hover:text-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Email Contact Form */}
      
        <ContactPopup
          showEmailForm={showEmailForm}
          closePopup={closePopup}
          formData={formData}
          results={results}
          formatCurrency={formatCurrency} />
    
    </div>
  )
}
