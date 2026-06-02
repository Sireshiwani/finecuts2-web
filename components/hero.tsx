"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { siteImages } from "@/lib/site-images";

export default function Hero() {
  return (
    <section className="hero-gradient flex min-h-screen items-center pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-sm uppercase tracking-[0.4em] text-gold"
          >
            Premium Grooming Experience
          </motion.p>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-5xl font-black leading-none sm:text-6xl lg:text-8xl"
          >
            Built For Men Who Value Presence.
          </motion.h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-zinc-400">
            Luxury cuts, dreadlocks, facials, massage and elite grooming crafted for modern
            professionals.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/booking"
              className="rounded-full bg-gold px-8 py-4 font-bold text-black transition hover:bg-[#e6b422]"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-zinc-700 px-8 py-4 transition hover:border-gold hover:text-gold"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative h-[500px] w-full overflow-hidden rounded-[40px] sm:h-[650px] lg:h-[750px]">
            <Image
              src={siteImages.hero}
              alt="Barbershop hero"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="glass absolute -bottom-6 -left-4 rounded-3xl p-6 sm:-bottom-10 sm:-left-10">
            <p className="text-4xl font-black">1200+</p>
            <p className="text-zinc-400">Appointments Completed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
