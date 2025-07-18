'use client';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in international logistics and e-commerce.',
      image: 'professional businesswoman CEO with confident smile wearing navy blazer, modern office background, corporate leadership photography style, clean and professional lighting'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      description: 'Operations expert ensuring smooth delivery processes across all shipping routes.',
      image: 'professional Asian businessman in logistics operations center, wearing crisp white shirt, confident expression, modern warehouse background with shipping containers'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success Manager',
      description: 'Dedicated to providing exceptional customer service and support experiences.',
      image: 'friendly professional woman customer service manager with warm smile, wearing light blue business attire, modern customer service center background'
    },
    {
      name: 'David Thompson',
      role: 'Technology Director',
      description: 'Leading our tech innovations in tracking systems and logistics automation.',
      image: 'professional technology director in modern tech office, wearing casual business attire, computer screens and shipping technology in background, innovation focused'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Floating Cloud */}
      <div className="absolute bottom-20 right-20 w-16 h-10 opacity-20 animate-pulse">
        <img 
          src="https://readdy.ai/api/search-image?query=fluffy%20white%20cloud%20with%20soft%20rounded%20edges%20and%20gentle%20curves%2C%20subtle%20cool%20blue%20shading%2C%20minimalist%20design%20perfect%20for%20website%20decoration%2C%20transparent%20background&width=64&height=40&seq=cloud3&orientation=landscape" 
          alt="Cloud decoration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate professionals behind Ewawe's success, dedicated to making your shipping experience seamless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6 relative">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-sky-200 to-blue-200 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=$%7Bmember.image%7D&width=96&height=96&seq=team${index + 1}&orientation=squarish`}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-sky-600 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
            <p className="text-lg mb-6 opacity-90">
              We're always looking for talented individuals to help us expand our global reach
            </p>
            <button className="bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}