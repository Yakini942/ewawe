import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FAQHero from './FAQHero';
import FAQAccordion from './FAQAccordion';
import QuickHelp from './QuickHelp';


export default function FAQsPage() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <FAQHero />
        <FAQAccordion />
        <QuickHelp />
      </main>
      <Footer />
    </>
  );
}