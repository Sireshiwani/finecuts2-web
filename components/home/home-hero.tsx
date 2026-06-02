export default function HomeHero() {
  return (
    <header id="top" className="relative flex h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute max-w-none min-h-full min-w-full w-auto opacity-40 grayscale"
      >
        <source
          src="https://videos.pexels.com/video-files/3998510/3998510-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 max-w-4xl px-4 text-center">
        <span className="mb-4 block text-xs uppercase tracking-[0.5em] text-yellow-500">
          Elevate Your Presence
        </span>
        <h1 className="mb-6 text-6xl font-bold leading-tight md:text-8xl">
          Sharp Cuts.
          <br />
          Built For Kings.
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg font-light text-gray-400 md:text-xl">
          The ultimate grooming experience for the modern gentleman in Nairobi.
        </p>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <a
            href="#booking"
            className="rounded-full bg-[#D4A017] px-10 py-4 text-center text-sm font-bold uppercase text-black"
          >
            Secure an Appointment
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/20 px-10 py-4 text-center text-sm font-bold uppercase transition hover:bg-white/10"
          >
            View Our Portfolio
          </a>
        </div>
      </div>
    </header>
  );
}
