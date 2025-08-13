'use client';

type TestimonialsProps = {
  testimonials?: any;
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const items = Array.isArray(testimonials?.data)
    ? testimonials.data.map((d: any) => ({ id: d.id, ...d.attributes }))
    : Array.isArray(testimonials)
    ? testimonials
    : [];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t: any) => {
            const photoUrl = t?.photo?.data?.attributes?.url
              ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${t.photo.data.attributes.url}`
              : '';
            return (
              <div key={t.id} className="bg-white p-6 rounded-xl shadow-md">
                {photoUrl && <img src={photoUrl} alt={t.name} className="w-16 h-16 rounded-full mb-4" />}
                <p className="text-gray-700 mb-2">"{t.quote}"</p>
                <p className="font-bold text-gray-900">{t.name}, {t.country}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


