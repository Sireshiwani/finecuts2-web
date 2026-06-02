import Link from "next/link";
import PageShell from "@/components/page-shell";
import Membership from "@/components/membership";
import { djangoUrl } from "@/lib/django-url";

export default function MembershipPage() {
  return (
    <PageShell
      title="Membership & Rewards"
      subtitle="Earn points every visit, unlock tiers, and enjoy exclusive perks."
    >
      <Membership />
      <div className="mx-auto max-w-3xl px-6 pb-8 text-center">
        <p className="text-zinc-400">
          Register or sign in on the rewards portal to track points and redeem benefits.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={djangoUrl("/account/register/")}
            className="rounded-full bg-gold px-8 py-3 font-bold text-black hover:bg-[#e6b422]"
          >
            Join Rewards
          </a>
          <Link
            href="/dashboard"
            className="rounded-full border border-zinc-600 px-8 py-3 hover:border-gold"
          >
            Staff links
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
