"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { siteImages } from "@/lib/site-images";

const services = [
  {
    title: "Executive Haircuts",
    image: siteImages.fade,
    price: "From Ksh 500",
    description:
      "Designed for clients who appreciate clean aesthetics, precision craftsmanship and premium self-care.",
  },
  {
    title: "Dreadlocks & Retwist",
    image: siteImages.dreadlocks,
    price: "From Ksh 1500",
    description:
      "Expert loc maintenance, retwists, and styling tailored to your hair journey and lifestyle.",
  },
  {
    title: "Luxury Facial",
    image: siteImages.facial,
    price: "From Ksh 2500",
    description:
      "Deep cleanse, exfoliation, and hydration for a refreshed, confident finish after every session.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-20 text-4xl font-black sm:text-5xl">
          Precision Grooming.
          <br />
          Elevated Experience.
        </h2>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              <div
                className={`relative h-[400px] w-full overflow-hidden rounded-[30px] sm:h-[500px] ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="mb-6 text-4xl font-bold">{service.title}</h3>
                <p className="mb-8 text-lg text-zinc-400">{service.description}</p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-2xl font-bold text-gold">{service.price}</p>
                  <Link
                    href="/booking"
                    className="rounded-full bg-gold px-6 py-3 font-bold text-black transition hover:bg-[#e6b422]"
                  >
                    Book Service
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
