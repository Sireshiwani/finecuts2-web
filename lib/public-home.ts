import type { HomeData } from "@/lib/home-api";
import { getDjangoApiBase } from "@/lib/django-url";

/** Browser: same-origin nginx → Django. Server: loopback or DJANGO_API_URL. */
export async function fetchPublicHome(): Promise<HomeData> {
  const url =
    typeof window !== "undefined"
      ? "/api/public/home/"
      : `${getDjangoApiBase()}/api/public/home/`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    return { services: [], team: [] };
  }
  return res.json();
}
