"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Booking() {
  return (
    <section id="booking" className="py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl px-6"
      >
        <div className="hero-gradient glass rounded-[40px] p-10 text-center md:p-16">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">Book Your Chair</p>
          <h2 className="text-4xl font-black sm:text-5xl">Ready For Your Next Transformation?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            Reserve your slot online in under a minute. Choose your service, barber, and preferred time.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-gold px-10 py-4 font-bold text-black transition hover:bg-[#e6b422]"
            >
              Book Appointment
            </Link>
            <Link
              href="/dashboard"
              className="rounded-full border border-zinc-600 px-10 py-4 transition hover:border-gold"
            >
              Staff Login
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
