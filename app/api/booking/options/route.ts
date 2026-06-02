import { NextResponse } from "next/server";
import { getDjangoApiBase } from "@/lib/django-url";

export async function GET() {
  try {
    const res = await fetch(`${getDjangoApiBase()}/api/booking/options/`, {
      cache: "no-store",
    });
    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        { error: "Backend returned an error loading booking options." },
        { status: res.status }
      );
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      {
        error:
          "Cannot reach Django backend. Start it with `python manage.py runserver` and set DJANGO_API_URL in .env.local.",
      },
      { status: 502 }
    );
  }
}
