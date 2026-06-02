import Link from "next/link";
import PageShell from "@/components/page-shell";
import { djangoUrl } from "@/lib/django-url";

export default function DashboardPage() {
  const links = [
    { label: "Staff login", href: djangoUrl("/login/"), external: true },
    { label: "Staff dashboard", href: djangoUrl("/dashboard/"), external: true },
    { label: "Book appointment (this site)", href: "/booking", external: false },
    { label: "Join rewards", href: djangoUrl("/account/register/"), external: true },
    { label: "Admin panel", href: djangoUrl("/admin/"), external: true },
  ];

  return (
    <PageShell
      title="Dashboard"
      subtitle="Operations run on Django — sales, staff, loyalty, payouts, and salary advances."
    >
      <div className="mx-auto max-w-2xl px-6">
        <div className="glass space-y-4 rounded-[30px] p-8">
          <p className="text-zinc-400">
            This Next.js site is the public marketing front. Staff use the Django app for day-to-day
            management. Set <code className="text-gold">NEXT_PUBLIC_DJANGO_API_URL</code> in production
            to your deployed backend.
          </p>
          <ul className="space-y-3">
            {links.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-white/10 px-4 py-3 transition hover:border-gold hover:text-gold"
                  >
                    {item.label} →
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-xl border border-white/10 px-4 py-3 transition hover:border-gold hover:text-gold"
                  >
                    {item.label} →
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
