import { NextRequest, NextResponse } from "next/server";
import { getDjangoApiBase } from "@/lib/django-url";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const res = await fetch(`${getDjangoApiBase()}/api/booking/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        errors: {
          __all__: [
            "Cannot reach Django backend. Start it with `python manage.py runserver` and set DJANGO_API_URL in .env.local.",
          ],
        },
      },
      { status: 502 }
    );
  }
}
