"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Best fade in Nairobi. The attention to detail and atmosphere make every visit feel premium.",
    name: "James K.",
    role: "Regular Client",
  },
  {
    quote:
      "My dreadlocks have never looked better. Professional team, clean shop, and on-time appointments.",
    name: "Brian M.",
    role: "Loyalty Member",
  },
  {
    quote:
      "From booking to checkout, everything is smooth. This is my go-to grooming spot every month.",
    name: "David O.",
    role: "Executive Client",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-4xl font-black sm:text-5xl">What Clients Say</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-[30px] p-8"
            >
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <p className="text-lg leading-relaxed text-zinc-300">&ldquo;{review.quote}&rdquo;</p>
              <footer className="mt-6">
                <p className="font-bold">{review.name}</p>
                <p className="text-sm text-zinc-500">{review.role}</p>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
