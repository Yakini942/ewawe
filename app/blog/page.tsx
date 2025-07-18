import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BlogHero from './BlogHero';
import FeaturedArticle from './FeaturedArticle';
import BlogGrid from './BlogGrid';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Wave Background */}
      <div className="relative">
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" fill="none">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="url(#wave-gradient)"/>
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4FC3F7"/>
                <stop offset="100%" stopColor="#0288D1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <BlogHero />
        <FeaturedArticle />
        <BlogGrid />
      </div>
      
      <Footer />
    </div>
  );
}