
import HomeContent from './HomeContent';
import { fetchStrapi } from '@/lib/strapi';

export const revalidate = 60;

export default async function Home() {
  const [hero,  testimonials] = await Promise.all([
    fetchStrapi('hero'),
    fetchStrapi('testimonials')
  ]);

  return <HomeContent hero={hero} testimonials={testimonials} />;
}

