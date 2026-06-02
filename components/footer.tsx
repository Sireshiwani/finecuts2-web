import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
        <div>
          <p className="text-2xl font-bold tracking-widest gold-text">FINE CUTS</p>
          <p className="mt-4 text-zinc-400">
            Garden City Fine Cuts — luxury grooming for men who value presence.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm uppercase tracking-wider text-gold">Explore</p>
          <div className="flex flex-col gap-2 text-zinc-400">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/gallery" className="hover:text-white">
              Gallery
            </Link>
            <Link href="/membership" className="hover:text-white">
              Membership
            </Link>
            <Link href="/booking" className="hover:text-white">
              Book Now
            </Link>
            <Link href="/dashboard" className="hover:text-white">
              Staff / Dashboard
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm uppercase tracking-wider text-gold">Contact</p>
          <p className="text-zinc-400">Nairobi, Kenya</p>
          <p className="mt-2 text-zinc-400">+254 700 000 000</p>
          <p className="mt-2 text-zinc-400">hello@gardencityfinecuts.com</p>
          <div className="mt-6 flex gap-4 text-2xl text-gold">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok />
            </a>
            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <p className="mt-12 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} Garden City Fine Cuts. All rights reserved.
      </p>
    </footer>
  );
}
