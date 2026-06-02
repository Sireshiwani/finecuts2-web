import Image from "next/image";
import Link from "next/link";

import { formatKsh, HomeService } from "@/lib/home-api";

const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80",
];

const FALLBACK: HomeService[] = [
  {
    id: 1,
    name: "Executive Haircut",
    category: "haircut",
    category_display: "Haircut",
    description: "A seamless premium grooming treatment with attention to detail and a refined finish.",
    price: "500",
    duration_minutes: 45,
    photo_url: "",
  },
  {
    id: 2,
    name: "Dreadlocks & Retwist",
    category: "other",
    category_display: "Other",
    description: "Expert loc maintenance and styling tailored to your signature look.",
    price: "1500",
    duration_minutes: 90,
    photo_url: "",
  },
  {
    id: 3,
    name: "Luxury Facial",
    category: "grooming",
    category_display: "Grooming",
    description: "Deep cleanse, exfoliation, and hydration for a refreshed, confident finish.",
    price: "2500",
    duration_minutes: 60,
    photo_url: "",
  },
];

export default function HomeServices({ services }: { services: HomeService[] }) {
  const cards = (services.length ? services : FALLBACK).slice(0, 3);

  return (
    <section id="services" className="mx-auto max-w-7xl px-8 py-24">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 className="mb-2 text-4xl font-bold md:text-5xl">The Service Menu</h2>
          <p className="text-gray-500">Precision grooming tailored to your signature look.</p>
        </div>
        <a
          href="#booking"
          className="border-b border-yellow-500 pb-1 text-sm uppercase tracking-widest text-yellow-500"
        >
          Full Menu
        </a>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((service, index) => (
          <div key={service.id} className="glass-card group p-8">
            <div className="mb-6 h-48 overflow-hidden rounded-xl">
              <Image
                src={CARD_IMAGES[index % CARD_IMAGES.length]}
                alt={service.name}
                width={400}
                height={300}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-2 text-2xl">{service.name}</h3>
            <p className="mb-6 text-sm font-light leading-relaxed text-gray-400">
              {service.description ||
                "A seamless premium grooming treatment with attention to detail and a refined finish."}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold tracking-tighter">Ksh {formatKsh(service.price)}</span>
              <a
                href="#booking"
                className="border-b border-transparent text-xs font-bold uppercase text-[#D4A017] transition hover:border-yellow-500"
              >
                Book Item
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-gray-500">
        <Link href="/services" className="text-yellow-500 hover:underline">
          View all services
        </Link>
        {" · "}
        <Link href="/booking" className="text-yellow-500 hover:underline">
          dedicated booking page
        </Link>
      </p>
    </section>
  );
}
