export type HomeService = {
  id: number;
  name: string;
  category: string;
  category_display: string;
  description: string;
  price: string;
  duration_minutes: number;
  photo_url: string;
};

export type HomeTeamMember = {
  id: number;
  name: string;
  photo_url: string;
  specialty?: string;
  /** @deprecated API no longer sends role; kept for older payloads */
  role?: string;
  commission_rate?: string;
};

export function formatKsh(price: string): string {
  const n = parseFloat(price);
  if (Number.isNaN(n)) return price;
  return Number.isInteger(n) ? String(Math.round(n)) : n.toFixed(2);
}

export type HomeData = {
  services: HomeService[];
  team: HomeTeamMember[];
};

import { siteImages } from "@/lib/site-images";

export function serviceImage(url: string) {
  return url?.trim() || siteImages.fade;
}

export function teamImage(url: string) {
  return url?.trim() || siteImages.barber1;
}

export async function fetchHomeData(): Promise<HomeData> {
  const res = await fetch("/api/public/home", { cache: "no-store" });
  if (!res.ok) {
    return { services: [], team: [] };
  }
  return res.json();
}
