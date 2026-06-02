export default function HomeNav() {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between bg-gradient-to-b from-black/80 to-transparent px-8 py-6">
      <a href="#top" className="text-gold-gradient text-2xl font-bold uppercase tracking-tighter">
        Fine Cuts
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
      <a
        href="#booking"
        className="rounded-full bg-[#D4A017] px-6 py-2 text-xs font-bold uppercase tracking-tighter text-black transition hover:scale-105"
      >
        Book Now
      </a>
    </nav>
  );
}
