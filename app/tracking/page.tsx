'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TrackingHero from './TrackingHero';
import TrackingForm from './TrackingForm';
import TrackingFeatures from './TrackingFeatures';

export default function TrackingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <TrackingHero />
      <TrackingForm />
      <TrackingFeatures />
      <Footer />
    </div>
  );
}