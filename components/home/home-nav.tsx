import Image from "next/image";

export default function HomeNav() {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between bg-gradient-to-b from-black/80 to-transparent px-8 py-6">
      <a href="#top" className="flex shrink-0 items-center">
        <Image
          src="/images/logo.png"
          alt="Garden City Fine Cuts"
          width={56}
          height={56}
          priority
          className="h-11 w-11 rounded-full border border-[#D4A017]/40 object-cover sm:h-14 sm:w-14"
        />
      </a>
      <div className="hidden gap-8 text-sm font-light uppercase tracking-widest md:flex">
        <a href="#services" className="transition hover:text-yellow-500">
          Services
        </a>
        <a href="#team" className="transition hover:text-yellow-500">
          Master Barbers
        </a>
        <a href="#booking" className="transition hover:text-yellow-500">
          The Club
        </a>
      </div>
      <div className="flex shrink-0 items-center gap-3 sm:gap-4">
        <a
          href="/login/"
          className="rounded-full border border-white/25 px-4 py-2 text-xs font-bold uppercase tracking-tighter text-white transition hover:border-[#D4A017] hover:text-yellow-500"
        >
          Login
        </a>
        <a
          href="#booking"
          className="rounded-full bg-[#D4A017] px-6 py-2 text-xs font-bold uppercase tracking-tighter text-black transition hover:scale-105"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
