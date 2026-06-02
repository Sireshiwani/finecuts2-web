import HomeBookingWizard from "@/components/home/home-booking-wizard";
import HomeHero from "@/components/home/home-hero";
import HomeNav from "@/components/home/home-nav";
import HomeServices from "@/components/home/home-services";
import HomeTeam from "@/components/home/home-team";
import HomeWhatsappFab from "@/components/home/home-whatsapp-fab";
import { getDjangoApiBase } from "@/lib/django-url";
import type { HomeData } from "@/lib/home-api";

async function loadHomeData(): Promise<HomeData> {
  try {
    const res = await fetch(`${getDjangoApiBase()}/api/public/home/`, { cache: "no-store" });
    if (!res.ok) return { services: [], team: [] };
    return res.json();
  } catch {
    return { services: [], team: [] };
  }
}

export default async function Home() {
  const { services, team } = await loadHomeData();

  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <HomeNav />
      <HomeHero />
      <HomeServices services={services} />
      <HomeTeam team={team} />
      <HomeBookingWizard services={services} team={team} />
      <HomeWhatsappFab />
    </main>
  );
}
