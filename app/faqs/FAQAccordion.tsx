'use client';

import { useState } from 'react';

interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQ[] = [
  // Shipping & Delivery
  {
    id: 'shipping-1',
    category: 'Shipping & Delivery',
    question: 'How long does international shipping take?',
    answer: 'Delivery times vary by destination and service type. Express shipping typically takes 3-5 business days, while standard shipping takes 7-14 business days. We provide real-time tracking so you can monitor your shipment progress.'
  },
  {
    id: 'shipping-2',
    category: 'Shipping & Delivery',
    question: 'What items cannot be shipped internationally?',
    answer: 'Prohibited items include hazardous materials, weapons, perishable goods, and items restricted by destination country laws. We provide a complete list of restricted items during the booking process.'
  },
  {
    id: 'shipping-3',
    category: 'Shipping & Delivery',
    question: 'Do you provide door-to-door delivery?',
    answer: 'Yes, we offer door-to-door delivery service to most destinations worldwide. Our team handles pickup from your location and delivers directly to the recipient address, including customs clearance.'
  },

  // Customs & Duties
  {
    id: 'customs-1',
    category: 'Customs & Duties',
    question: 'Who pays for customs duties and taxes?',
    answer: 'Customs duties and taxes are typically paid by the recipient unless otherwise arranged. We can provide duty and tax estimates before shipping and offer prepaid duty services for select destinations.'
  },
  {
    id: 'customs-2',
    category: 'Customs & Duties',
    question: 'What documents are required for customs clearance?',
    answer: 'Required documents include commercial invoice, packing list, and declaration forms. Additional documents may be needed depending on the item type and destination country requirements.'
  },

  // Pricing & Payments
  {
    id: 'pricing-1',
    category: 'Pricing & Payments',
    question: 'How is shipping cost calculated?',
    answer: 'Shipping costs are calculated based on package weight, dimensions, destination, and service type. We use volumetric weight calculation to ensure fair pricing. Get an instant quote using our shipping calculator.'
  },
  {
    id: 'pricing-2',
    category: 'Pricing & Payments',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and digital wallets. Payment is processed securely through encrypted channels.'
  },
  {
    id: 'pricing-3',
    category: 'Pricing & Payments',
    question: 'Do you offer shipping insurance?',
    answer: 'Yes, we provide comprehensive shipping insurance to protect your valuable items. Insurance coverage is available up to $10,000 per shipment with competitive rates based on declared value.'
  },

  // Tracking & Support
  {
    id: 'tracking-1',
    category: 'Tracking & Support',
    question: 'How can I track my shipment?',
    answer: 'Track your shipment using our online tracking system with your tracking number. You will receive real-time updates via email and SMS notifications at key delivery milestones.'
  },
  {
    id: 'tracking-2',
    category: 'Tracking & Support',
    question: 'What if my package is lost or damaged?',
    answer: 'In the rare event of loss or damage, contact our support team immediately. We will investigate and provide compensation based on declared value and insurance coverage. Our claims process is fast and transparent.'
  }
];

const categories = [...new Set(faqData.map(faq => faq.category))];

const categoryIcons: { [key: string]: string } = {
  'Shipping & Delivery': 'ri-truck-line',
  'Customs & Duties': 'ri-government-line',
  'Pricing & Payments': 'ri-money-dollar-circle-line',
  'Tracking & Support': 'ri-customer-service-line'
};

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((category) => (
          <div key={category} className="mb-12">
            {/* Category Header */}
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className={`${categoryIcons[category]} text-2xl text-blue-600`}></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqData
                .filter(faq => faq.category === category)
                .map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i 
                          className={`ri-${openItems.includes(faq.id) ? 'subtract' : 'add'}-line text-blue-600 text-xl transition-transform duration-200`}
                        ></i>
                      </div>
                    </button>
                    
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openItems.includes(faq.id) 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-5 pt-0">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}