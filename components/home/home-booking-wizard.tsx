"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

import { BookingPayload, fetchBookingOptions, submitBooking } from "@/lib/booking-api";
import { formatKsh, HomeService, HomeTeamMember } from "@/lib/home-api";

function formatFieldErrors(errors: Record<string, string[]>): string {
  return Object.entries(errors)
    .flatMap(([field, msgs]) => msgs.map((m) => (field === "__all__" ? m : `${field}: ${m}`)))
    .join(" ");
}

type Props = {
  services: HomeService[];
  team: HomeTeamMember[];
};

export default function HomeBookingWizard({ services, team }: Props) {
  const [step, setStep] = useState(1);
  const [feedback, setFeedback] = useState<{ message: string; isError: boolean } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredBarber, setPreferredBarber] = useState("");
  const [notes, setNotes] = useState("");

  const [loadedServices, setLoadedServices] = useState<HomeService[]>(services);

  useEffect(() => {
    if (services.length) {
      setLoadedServices(services);
      return;
    }
    fetchBookingOptions()
      .then((opts) =>
        setLoadedServices(
          opts.services.map((s) => ({
            id: s.id,
            name: s.name,
            category: s.category,
            category_display: s.category,
            description: "",
            price: s.price,
            duration_minutes: s.duration_minutes,
            photo_url: "",
          }))
        )
      )
      .catch(() => {});
  }, [services]);

  const serviceOptions = useMemo(() => loadedServices, [loadedServices]);

  const selectedService = serviceOptions.find((s) => String(s.id) === serviceId);

  const showFeedback = (message: string, isError = false) => {
    setFeedback({ message, isError });
  };

  const goNext = (from: number) => {
    if (from === 1) {
      if (!customerName.trim() || !customerEmail.trim() || !customerPhone.trim()) {
        showFeedback("Please complete all required personal details.", true);
        return;
      }
    }
    if (from === 2) {
      if (!serviceId || !appointmentTime) {
        showFeedback("Choose a service and appointment time before review.", true);
        return;
      }
    }
    setFeedback(null);
    setStep(from + 1);
  };

  const goBack = (from: number) => {
    setFeedback(null);
    setStep(from - 1);
  };

  const resolveStaffId = (): number | null => {
    const trimmed = preferredBarber.trim();
    if (!trimmed) return null;
    const byId = team.find((m) => String(m.id) === trimmed);
    if (byId) return byId.id;
    const byName = team.find((m) => m.name.toLowerCase() === trimmed.toLowerCase());
    return byName?.id ?? null;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    const staffId = resolveStaffId();
    const extraNotes = [
      notes.trim(),
      preferredBarber.trim() && !staffId ? `Preferred barber: ${preferredBarber.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const payload: BookingPayload = {
      customer_name: customerName.trim(),
      customer_email: customerEmail.trim(),
      customer_phone: customerPhone.trim(),
      service: Number(serviceId),
      staff: staffId,
      appointment_at: appointmentTime,
      notes: extraNotes || undefined,
      referral_code: referralCode.trim() || undefined,
    };

    const result = await submitBooking(payload);
    setSubmitting(false);

    if (result.ok) {
      const priceLabel = selectedService ? formatKsh(selectedService.price) : "";
      showFeedback(
        `${result.message}${priceLabel ? ` Estimated price: Ksh ${priceLabel}.` : ""}`,
        false
      );
      setCustomerName("");
      setCustomerEmail("");
      setCustomerPhone("");
      setReferralCode("");
      setServiceId("");
      setAppointmentTime("");
      setPreferredBarber("");
      setNotes("");
      setStep(1);
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    showFeedback(formatFieldErrors(result.errors), true);
  };

  return (
    <section id="booking" className="mx-auto max-w-5xl px-8 pb-24">
      <div className="glass-card p-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">Secure Your Appointment</h2>
            <p className="text-gray-400">Complete this 3-step booking and get instant confirmation.</p>
          </div>
          <div className="flex items-center gap-2 text-sm" id="progress-indicator">
            {[1, 2, 3].map((n) => (
              <span
                key={n}
                className={`step-dot inline-flex h-8 w-8 items-center justify-center rounded-full ${step >= n ? "active" : ""}`}
                data-step={n}
              >
                {n}
              </span>
            ))}
          </div>
        </div>

        {feedback ? (
          <div
            className={`mb-6 rounded-xl border border-white/10 px-4 py-3 text-sm ${
              feedback.isError ? "bg-red-500/15 text-red-200" : "bg-emerald-500/15 text-emerald-200"
            }`}
          >
            {feedback.message}
          </div>
        ) : null}

        <form id="booking-wizard" className="space-y-6" onSubmit={handleSubmit}>
          {step === 1 ? (
            <div id="step-1" className="grid gap-4 md:grid-cols-2">
              <input
                id="customer_name"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-yellow-500"
                placeholder="Full Name"
              />
              <input
                id="customer_email"
                type="email"
                required
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-yellow-500"
                placeholder="Email Address"
              />
              <input
                id="customer_phone"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-yellow-500"
                placeholder="Phone Number"
              />
              <input
                id="referral_code"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-yellow-500"
                placeholder="Referral / Membership Code (Optional)"
              />
              <div className="flex justify-end md:col-span-2">
                <button
                  type="button"
                  onClick={() => goNext(1)}
                  className="rounded-full bg-[#D4A017] px-8 py-3 text-sm font-bold uppercase text-black"
                >
                  Continue
                </button>
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div id="step-2" className="grid gap-4 md:grid-cols-2">
              <select
                id="service_id"
                required
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-yellow-500 md:col-span-2"
              >
                <option value="">Select a Service</option>
                {serviceOptions.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} — Ksh {formatKsh(s.price)}
                  </option>
                ))}
              </select>
              <input
                id="appointment_time"
                type="datetime-local"
                required
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-yellow-500"
              />
              {team.length > 0 ? (
                <select
                  id="preferred_barber"
                  value={preferredBarber}
                  onChange={(e) => setPreferredBarber(e.target.value)}
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-yellow-500"
                >
                  <option value="">Preferred Barber (Optional)</option>
                  {team.map((m) => (
                    <option key={m.id} value={String(m.id)}>
                      {m.name}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id="preferred_barber"
                  value={preferredBarber}
                  onChange={(e) => setPreferredBarber(e.target.value)}
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-yellow-500"
                  placeholder="Preferred Barber (Optional)"
                />
              )}
              <textarea
                id="booking_notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-yellow-500 md:col-span-2"
                placeholder="Extra notes"
              />
              <div className="flex justify-between md:col-span-2">
                <button
                  type="button"
                  onClick={() => goBack(2)}
                  className="rounded-full border border-white/20 px-8 py-3 text-sm font-bold uppercase"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => goNext(2)}
                  className="rounded-full bg-[#D4A017] px-8 py-3 text-sm font-bold uppercase text-black"
                >
                  Review
                </button>
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div id="step-3" className="space-y-4">
              <div
                className="rounded-2xl border border-white/10 bg-black/20 p-6 text-sm leading-relaxed"
                id="booking-summary"
              >
                <p>
                  <strong>Name:</strong> {customerName}
                </p>
                <p>
                  <strong>Email:</strong> {customerEmail}
                </p>
                <p>
                  <strong>Phone:</strong> {customerPhone}
                </p>
                <p>
                  <strong>Service:</strong>{" "}
                  {selectedService
                    ? `${selectedService.name} — Ksh ${formatKsh(selectedService.price)}`
                    : "—"}
                </p>
                <p>
                  <strong>Time:</strong> {appointmentTime.replace("T", " ")}
                </p>
                <p>
                  <strong>Referral/Membership:</strong> {referralCode || "None"}
                </p>
                <p>
                  <strong>Preferred Barber:</strong>{" "}
                  {preferredBarber
                    ? team.find((m) => String(m.id) === preferredBarber)?.name || preferredBarber
                    : "Any available barber"}
                </p>
                {notes ? (
                  <p>
                    <strong>Notes:</strong> {notes}
                  </p>
                ) : null}
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => goBack(3)}
                  className="rounded-full border border-white/20 px-8 py-3 text-sm font-bold uppercase"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-[#D4A017] px-8 py-3 text-sm font-bold uppercase text-black disabled:opacity-60"
                >
                  {submitting ? "Submitting…" : "Confirm Booking"}
                </button>
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
