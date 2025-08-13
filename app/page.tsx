import HomeContent from './HomeContent';
import { fetchStrapi } from '@/lib/strapi';

export const revalidate = 60;

export default async function Home() {
  const [heroData, testimonialsData] = await Promise.all([
    fetchStrapi('hero'),
    fetchStrapi('testimonials')
  ]);

  // Provide defaults in case data is missing
  const hero = heroData || {};
  const testimonials = testimonialsData || [];

  return <HomeContent hero={hero} testimonials={testimonials} />;
}
