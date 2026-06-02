import { formatKsh, HomeTeamMember } from "@/lib/home-api";

const FALLBACK_TEAM: HomeTeamMember[] = [
  { id: 1, name: "Dennis Mwana", role: "Staff", photo_url: "", commission_rate: "40" },
  { id: 2, name: "Nicole Wanjiru", role: "Staff", photo_url: "", commission_rate: "45" },
  { id: 3, name: "Caleb Misiko", role: "Staff", photo_url: "", commission_rate: "40" },
];

function commissionPercent(rate?: string): string {
  if (!rate) return "—";
  const n = parseFloat(rate);
  if (Number.isNaN(n)) return rate;
  return formatKsh(String(n));
}

export default function HomeTeam({ team }: { team: HomeTeamMember[] }) {
  const members = (team.length ? team : FALLBACK_TEAM).slice(0, 3);

  return (
    <section id="team" className="mx-auto max-w-7xl px-8 pb-24">
      <div className="glass-card p-10">
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">Master Barbers</h2>
        <p className="mb-8 text-gray-400">Meet the professionals shaping signature styles daily.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {members.map((member) => (
            <div key={member.id} className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-2xl">{member.name}</h3>
              <p className="mt-2 text-xs uppercase tracking-widest text-yellow-500">{member.role}</p>
              {member.commission_rate ? (
                <p className="mt-3 text-sm text-gray-400">
                  Commission {commissionPercent(member.commission_rate)}%
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
