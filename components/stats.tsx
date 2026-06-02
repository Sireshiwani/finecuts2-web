"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "4.9", label: "Average Rating" },
  { value: "8", label: "Master Barbers" },
  { value: "3", label: "Nairobi Locations" },
];

export default function Stats() {
  return (
    <section className="border-y border-white/5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-6 text-center"
          >
            <p className="text-4xl font-black text-gold">{stat.value}</p>
            <p className="mt-2 text-sm uppercase tracking-wider text-zinc-400">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
