'use client';

import React from 'react';
import { ShippingCalculator } from './ShippingCalculator';
import QuoteHero from './QuoteHero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function App() {
  return (
    <> 
  <Navbar />
  <QuoteHero />
  <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <ShippingCalculator />
    </div>
    <Footer />
  </>
  )
}