export type BookingService = {
  id: number;
  name: string;
  price: string;
  duration_minutes: number;
  category: string;
};

export type BookingStaff = {
  id: number;
  name: string;
};

export type BookingOptions = {
  services: BookingService[];
  staff: BookingStaff[];
};

export type BookingPayload = {
  customer_name: string;
  customer_email?: string;
  customer_phone: string;
  service: number;
  staff?: number | null;
  appointment_at: string;
  notes?: string;
  referral_code?: string;
};

export type BookingResult =
  | { ok: true; message: string }
  | { ok: false; errors: Record<string, string[]> };

export async function fetchBookingOptions(): Promise<BookingOptions> {
  const res = await fetch("/api/booking/options", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Could not load services. Is the Django backend running?");
  }
  return res.json();
}

export async function submitBooking(payload: BookingPayload): Promise<BookingResult> {
  const res = await fetch("/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (data?.ok === true) {
    return data as { ok: true; message: string };
  }
  if (data?.ok === false && data.errors) {
    return data as { ok: false; errors: Record<string, string[]> };
  }
  return { ok: false, errors: { __all__: ["Booking failed. Please try again."] } };
}
