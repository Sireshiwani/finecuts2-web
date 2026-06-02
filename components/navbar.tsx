"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/membership", label: "Membership" },
  { href: "/#barbers", label: "Barbers" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="glass fixed left-0 top-0 z-50 w-full">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"
      >
        <Link href="/" className="text-2xl font-bold tracking-widest gold-text">
          FINE CUTS
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden gap-8 text-sm uppercase tracking-wider md:flex"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-zinc-300 transition hover:text-gold">
              {link.label}
            </Link>
          ))}
        </motion.div>

        <Link href="/booking">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-gold px-6 py-3 font-semibold text-black"
          >
            Book Now
          </motion.button>
        </Link>
      </motion.div>
    </nav>
  );
}
