import Image from "next/image";
import Link from "next/link";

import { siteImages } from "@/lib/site-images";

const team = [
  { name: "Dennis Mwana", role: "Precision Fade Specialist", image: siteImages.barber1 },
  { name: "Nicole Wanjiru", role: "Dreadlocks Artist", image: siteImages.barber2 },
  { name: "Caleb Misiko", role: "Executive Grooming", image: siteImages.barber1 },
  { name: "Simon Wanjiru", role: "Beard & Line-up Expert", image: siteImages.barber2 },
];

export default function Barbers() {
  return (
    <section id="barbers" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-4xl font-black sm:text-5xl">Meet The Artists</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="glass overflow-hidden rounded-[30px]">
              <div className="relative h-[350px] w-full">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold">{member.name}</h3>
                <p className="mb-6 text-zinc-400">{member.role}</p>
                <Link
                  href="/booking"
                  className="block w-full rounded-full bg-gold py-3 text-center font-bold text-black transition hover:bg-[#e6b422]"
                >
                  Book Barber
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
