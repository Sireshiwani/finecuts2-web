import { NextResponse } from "next/server";
import { getDjangoApiBase } from "@/lib/django-url";

export async function GET() {
  try {
    const res = await fetch(`${getDjangoApiBase()}/api/public/home/`, { cache: "no-store" });
    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to load home data." }, { status: res.status });
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Cannot reach Django backend.", services: [], team: [] },
      { status: 502 }
    );
  }
}
