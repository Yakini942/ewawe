import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import QuoteHero from './QuoteHero';
import QuoteCalculator from './QuoteCalculator';

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <Navbar />
      
      {/* Wave Background */}
      <div className="relative">
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" fill="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="url(#wave-gradient)"/>
            <path d="M0,80 C400,140 800,20 1200,80 L1200,120 L0,120 Z" fill="url(#wave-gradient-2)" opacity="0.5"/>
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4FC3F7"/>
                <stop offset="100%" stopColor="#0288D1"/>
              </linearGradient>
              <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0288D1"/>
                <stop offset="100%" stopColor="#4FC3F7"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <QuoteHero />
        <QuoteCalculator />
      </div>
      
      <Footer />
    </div>
  );
}