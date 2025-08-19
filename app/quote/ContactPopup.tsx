'use client';

import { useState } from 'react';

export default function ContactPopup({ showEmailForm, closePopup, formData, results, formatCurrency }: any) {
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const data = new FormData();
      data.append('firstName', contactForm.firstName);
      data.append('lastName', contactForm.lastName);
      data.append('email', contactForm.email);

      // Include shipping/product details in the submission:
      data.append('productLink', formData.productLink);
      data.append('productPrice', formData.productPrice);
      data.append('productweight', formData.productweight);
      data.append('length', formData.length);
      data.append('width', formData.width);
      data.append('height', formData.height);
      data.append('totalCost', results.totalWithProductPrice);

      data.append('access_key', 'aa804cd0-df06-43d2-86f9-e53d705408f5'); // Replace with your real key

      const object = Object.fromEntries(data);
      const json = JSON.stringify(object);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: json
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setContactForm({ firstName: '', lastName: '', email: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showEmailForm) return null;

  return (
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-hidden">
  <div className="bg-white p-6 rounded-lg shadow-xl max-w-3xl w-full">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>

    <form onSubmit={handleEmailSubmit}>
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Contact Form Fields */}
        <div className="space-y-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={contactForm.firstName}
              onChange={handleContactFormChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={contactForm.lastName}
              onChange={handleContactFormChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactForm.email}
              onChange={handleContactFormChange}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Shipping Details */}
        <div className="bg-gray-50 p-4 rounded border border-gray-200 text-sm">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Shipping Details</h4>
          <p><span className="font-medium">Product Link:</span> {formData.productLink}</p>
          <p><span className="font-medium">Product Price:</span> {formatCurrency(parseFloat(formData.productPrice) || 0)}</p>
          <p><span className="font-medium">Length:</span> {formData.length}</p>
          <p><span className="font-medium">Width:</span> {formData.width}</p>
          <p><span className="font-medium">Height:</span> {formData.height}</p>
          <p><span className="font-medium">Total Cost:</span> {formatCurrency(results.totalWithProductPrice)}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex space-x-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
        <button
          type="button"
          onClick={closePopup}
          className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>

    {/* Success/Error messages */}
    {submitStatus === 'success' && (
      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
        submitted successfully!
      </div>
    )}
    {submitStatus === 'error' && (
      <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
        Failed to submit. Please try again.
      </div>
    )}
  </div>
</div>

  );
}
