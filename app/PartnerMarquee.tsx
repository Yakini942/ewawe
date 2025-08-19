'use client';

type Partner = { name: string; href: string; src: string; alt?: string };

const DEFAULT_PARTNERS: Partner[] = [
  { name: 'DHL',    href: 'https://www.dhl.com',    src: '/partners/dhl.svg' },
  { name: 'FedEx',  href: 'https://www.fedex.com',  src: '/partners/fedex.svg' },
  { name: 'UPS',    href: 'https://www.ups.com',    src: '/partners/ups.svg' },
  { name: 'Amazon', href: 'https://www.amazon.com', src: '/partners/amazon.svg' },
  { name: 'AliExpress', href: 'https://www.aliexpress.com', src: '/partners/aliexpress.svg' },
  { name: 'Ebay', href: 'https://www.ebay.com', src: '/partners/ebay.svg' },
  { name: 'Alibaba', href: 'https://www.alibaba.com', src: '/partners/alibaba.svg' },
  { name: 'Nike', href: 'https://www.nike.com', src: '/partners/nike.svg' },
  { name: 'Samsung', href: 'https://www.samsung.com', src: '/partners/samsung.svg' },
  
 
];

export default function PartnerMarquee({ partners = DEFAULT_PARTNERS }: { partners?: Partner[] }) {
  // duplicate for seamless scroll
  const row = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners ];

  return (
    <section className="bg-offwhite relative">
      <h2 className="sr-only">Our Partners</h2>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

      <div className="overflow-hidden">
        <ul className="marquee flex gap-10 items-center will-change-transform hover:[animation-play-state:paused]">
          {row.map((p, i) => (
            <li key={`${p.name}-${i}`} className="shrink-0">
              <a href={p.href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3">
                <img
                  src={p.src}
                  alt={p.alt ?? `${p.name} logo`}
                  className="h-[70px] w-auto opacity-80 group-hover:opacity-100 transition"
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* second track, delayed, for continuous flow */}
             </div>

      <style jsx>{`
        /* base speed: tweak 22s for faster/slower */
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-15%); }
        }
        .marquee {
          animation: marquee 10s linear infinite;
          display: flex;
          width: max-content;
        }
        .marquee:hover, 
        .marquee--2:hover {
          animation-play-state: paused;
        }
        .marquee--2 {
          animation-delay: 11s; /* half the duration for perfect staggering */
          margin-top: -3.5rem;  /* overlap the second row on top of the first (same track) */
        }
        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee, .marquee--2 { animation: none; }
        }
      `}</style>
    </section>
  );
}
