import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PageShell({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <section className="hero-gradient pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gold">Garden City Fine Cuts</p>
          <h1 className="text-4xl font-black sm:text-6xl">{title}</h1>
          {subtitle ? <p className="mt-4 max-w-2xl text-lg text-zinc-400">{subtitle}</p> : null}
        </div>
      </section>
      <div className="pb-24">{children}</div>
      <Footer />
    </main>
  );
}
