"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Bronze",
    price: "Ksh 2,500 / mo",
    perks: ["10% off cuts", "Priority booking", "Birthday reward"],
  },
  {
    name: "Gold",
    price: "Ksh 5,000 / mo",
    featured: true,
    perks: ["20% off all services", "Free beard trim monthly", "VIP lounge access", "Referral bonuses"],
  },
  {
    name: "Platinum",
    price: "Ksh 9,500 / mo",
    perks: ["Unlimited line-ups", "Home visit option", "Personal barber slot", "Exclusive events"],
  },
];

export default function Membership() {
  return (
    <section id="membership" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">Membership</p>
          <h2 className="text-4xl font-black sm:text-5xl">Elevate Your Grooming Routine</h2>
          <p className="mt-4 text-lg text-zinc-400">
            Join rewards, earn points on every visit, and unlock tier benefits built for loyal clients.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[30px] p-8 ${
                tier.featured
                  ? "border border-gold bg-gradient-to-b from-gold/20 to-transparent"
                  : "glass"
              }`}
            >
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <p className="mt-2 text-3xl font-black text-gold">{tier.price}</p>
              <ul className="mt-8 space-y-3">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-zinc-300">
                    <Check className="h-5 w-5 shrink-0 text-gold" />
                    {perk}
                  </li>
                ))}
              </ul>
              <Link
                href="/membership"
                className={`mt-8 block rounded-full py-3 text-center font-bold ${
                  tier.featured ? "bg-gold text-black" : "border border-zinc-600 hover:border-gold"
                }`}
              >
                Join {tier.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
