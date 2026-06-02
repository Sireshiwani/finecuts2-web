"use client";

import { FormEvent, useEffect, useState } from "react";
import PageShell from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import {
  BookingOptions,
  BookingPayload,
  fetchBookingOptions,
  submitBooking,
} from "@/lib/booking-api";

function formatFieldErrors(errors: Record<string, string[]>): string {
  return Object.entries(errors)
    .flatMap(([field, msgs]) => msgs.map((m) => (field === "__all__" ? m : `${field}: ${m}`)))
    .join(" ");
}

export default function BookingPage() {
  const [options, setOptions] = useState<BookingOptions | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchBookingOptions()
      .then(setOptions)
      .catch((err: Error) => setLoadError(err.message));
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const staffRaw = String(data.get("staff") || "");
    const staffId = staffRaw ? Number(staffRaw) : null;

    const payload: BookingPayload = {
      customer_name: String(data.get("customer_name") || "").trim(),
      customer_phone: String(data.get("customer_phone") || "").trim(),
      customer_email: String(data.get("customer_email") || "").trim() || undefined,
      service: Number(data.get("service")),
      staff: staffId && !Number.isNaN(staffId) ? staffId : null,
      appointment_at: String(data.get("appointment_at") || ""),
      notes: String(data.get("notes") || "").trim() || undefined,
      referral_code: String(data.get("referral_code") || "").trim() || undefined,
    };

    const result = await submitBooking(payload);
    setSubmitting(false);

    if (result.ok) {
      setSuccessMessage(result.message);
      setSubmitted(true);
      form.reset();
      return;
    }

    setSubmitError(formatFieldErrors(result.errors));
  }

  return (
    <PageShell
      title="Book Appointment"
      subtitle="Choose your service, preferred barber, and time. We'll confirm your slot shortly."
    >
      <div className="mx-auto max-w-2xl px-6">
        {submitted ? (
          <div className="glass rounded-[30px] p-10 text-center">
            <h2 className="text-3xl font-bold text-gold">Request Received</h2>
            <p className="mt-4 text-zinc-400">{successMessage}</p>
          </div>
        ) : loadError ? (
          <div className="glass rounded-[30px] border border-red-500/30 p-8 text-center">
            <p className="text-red-300">{loadError}</p>
            <p className="mt-3 text-sm text-zinc-500">
              Run Django at <code className="text-gold">http://127.0.0.1:8000</code> and set{" "}
              <code className="text-gold">DJANGO_API_URL</code> in <code>.env.local</code>.
            </p>
          </div>
        ) : !options ? (
          <p className="text-center text-zinc-400">Loading services…</p>
        ) : (
          <form onSubmit={handleSubmit} className="glass space-y-6 rounded-[30px] p-8">
            {submitError ? (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {submitError}
              </div>
            ) : null}

            <div>
              <label className="mb-2 block text-sm uppercase tracking-wider text-zinc-400">
                Full name
              </label>
              <input
                required
                name="customer_name"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-gold"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm uppercase tracking-wider text-zinc-400">
                  Phone
                </label>
                <input
                  required
                  name="customer_phone"
                  type="tel"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm uppercase tracking-wider text-zinc-400">
                  Email (optional)
                </label>
                <input
                  name="customer_email"
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-gold"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm uppercase tracking-wider text-zinc-400">
                Service
              </label>
              <select
                required
                name="service"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-gold"
              >
                {options.services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} — Ksh {s.price}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm uppercase tracking-wider text-zinc-400">
                Barber (optional)
              </label>
              <select
                name="staff"
                defaultValue=""
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-gold"
              >
                <option value="">Any available</option>
                {options.staff.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm uppercase tracking-wider text-zinc-400">
                Preferred date & time
              </label>
              <input
                required
                name="appointment_at"
                type="datetime-local"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm uppercase tracking-wider text-zinc-400">
                Referral code (optional)
              </label>
              <input
                name="referral_code"
                maxLength={32}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-gold"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm uppercase tracking-wider text-zinc-400">Notes</label>
              <textarea
                name="notes"
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-gold"
                placeholder="Any style preferences or special requests..."
              />
            </div>

            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? "Submitting…" : "Submit Booking Request"}
            </Button>
          </form>
        )}
      </div>
    </PageShell>
  );
}
