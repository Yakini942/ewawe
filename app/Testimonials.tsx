'use client';

type TestimonialsProps = {
  testimonials?: any;
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  // Normalize testimonials data
  const items = Array.isArray(testimonials?.data)
    ? testimonials.data.map((d: any) => ({ id: d.id, ...d.attributes }))
    : Array.isArray(testimonials)
    ? testimonials
    : [];

  // If empty, optionally render a placeholder
  if (!items.length) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-500">No testimonials available yet.</p>
        </div>
      </section>
    );
  }

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
                {photoUrl ? (
                  <img src={photoUrl} alt={t.name || 'Customer'} className="w-16 h-16 rounded-full mb-4" />
                ) : (
                  <div className="w-16 h-16 rounded-full mb-4 bg-gray-200 flex items-center justify-center text-gray-500">
                    ?
                  </div>
                )}
                <p className="text-gray-700 mb-2">"{t.quote || 'No quote provided.'}"</p>
                <p className="font-bold text-gray-900">
                  {t.name || 'Anonymous'}
                  {t.country ? `, ${t.country}` : ''}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
