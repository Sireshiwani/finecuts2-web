"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { HomeTeamMember } from "@/lib/home-api";
import { fetchPublicHome } from "@/lib/public-home";
import { siteImages } from "@/lib/site-images";

function memberPhoto(url: string, index: number): string {
  if (url?.trim()) return url.trim();
  return index % 2 === 0 ? siteImages.barber1 : siteImages.barber2;
}

type Props = {
  team: HomeTeamMember[];
};

export default function HomeTeam({ team: initialTeam }: Props) {
  const [members, setMembers] = useState<HomeTeamMember[]>(initialTeam);

  useEffect(() => {
    fetchPublicHome()
      .then((data) => {
        if (data.team.length) setMembers(data.team);
      })
      .catch(() => {});
  }, []);

  return (
    <section id="team" className="mx-auto max-w-7xl px-8 pb-24">
      <div className="glass-card p-6 md:p-8">
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">Master Barbers</h2>
        <p className="mb-8 text-gray-400">Meet the professionals shaping signature styles daily.</p>
        {members.length === 0 ? (
          <p className="text-gray-500">Our team profiles will appear here soon.</p>
        ) : (
          <div className="grid grid-flow-row grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {members.map((member, index) => {
              const photo = memberPhoto(member.photo_url, index);
              const useUnoptimized = !photo.includes("images.unsplash.com");

              return (
                <div
                  key={member.id}
                  className="overflow-hidden rounded-xl border border-white/10 bg-black/20"
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1280px) 20vw, 160px"
                      unoptimized={useUnoptimized}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-base font-semibold leading-snug sm:text-lg">{member.name}</h3>
                    {member.specialty ? (
                      <p className="mt-1 text-xs leading-relaxed text-gray-400 sm:text-sm">
                        {member.specialty}
                      </p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
