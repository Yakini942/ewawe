'use client';

type TestimonialsProps = {
  testimonials?: any;
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const items = Array.isArray(testimonials?.data)
    ? testimonials.data.map((d: any) => ({ id: d.id, ...d.attributes }))
    : [
        {
          id: 1,
          name: 'Jane Doe',
          country: 'USA',
          quote: 'Ewawe made international shipping so easy!',
          photo: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=64&q=80',
        },
        {
          id: 2,
          name: 'Ali Khan',
          country: 'UAE',
          quote: 'Fast delivery and excellent service!',
          photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80',
        },
        {
          id: 3,
          name: 'Sakura Tanaka',
          country: 'Japan',
          quote: 'Highly recommend Ewawe for global orders.',
          photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=64&q=80',
        },
      ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
        {items.map((t: { id: number; name: string; country: string; quote: string; photo: string }) => (
  <div key={t.id} className="bg-white p-6 rounded-xl shadow-md opacity-0 animate-fadeIn"
       style={{ animationDelay: `${items.indexOf(t) * 200}ms`, animationFillMode: 'forwards' }}>
    
    <img 
    src={t.photo} 
    alt={t.name} 
    className="w-16 h-16 rounded-full mb-4 object-cover mx-auto" />
    <p className="text-gray-700 mb-2 text-center">"{t.quote}"</p>
    <p className="font-bold text-gray-900 text-center">{t.name}, {t.country}</p>
  </div>
      ))}
        </div>
      </div>
    </section>
  );
}
