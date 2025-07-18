'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import CompanyOverview from './CompanyOverview';
import OurStory from './OurStory';
import OurValues from './OurValues';
import GlobalReach from './GlobalReach';
import TeamSection from './TeamSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutHero />
      <CompanyOverview />
      <OurStory />
      <OurValues />
      <GlobalReach />
      <TeamSection />
      <Footer />
    </div>
  );
}