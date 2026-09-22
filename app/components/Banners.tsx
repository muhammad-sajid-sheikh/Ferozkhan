"use client";

import { useState } from "react";
import Image from "next/image";

type Conference = {
  id: number;
  title: string;
  date: string;
  location: string;
  excerpt: string;
  image: string;
};

const conferences: Conference[] = [
  {
    id: 1,
    title: "Press Conference on Flood Relief Efforts",
    date: "Sept 12, 2026",
    location: "Press Club, Islamabad",
    excerpt:
      "Outlined the relief and rehabilitation plan for flood-affected families, including emergency housing and healthcare support.",
    image: "/images/pic2.jpg",
  },
  {
    id: 2,
    title: "Address to Local Government Leaders",
    date: "Aug 28, 2026",
    location: "District Council Hall",
    excerpt:
      "Discussed decentralising development funds and strengthening accountability at the union council level.",
    image: "/images/pic4.jpg",
  },
  {
    id: 3,
    title: "Briefing on Education Reform Bill",
    date: "Aug 6, 2026",
    location: "National Assembly, Islamabad",
    excerpt:
      "Presented proposed reforms to expand access to public schooling in underserved districts.",
    image: "/images/pic5.jpg",
  },
];

export default function Banners() {
  const [activeIndex, setActiveIndex] = useState(0);

  const featured = conferences[activeIndex];
  const others = conferences.filter((_, index) => index !== activeIndex);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-10 flex items-center gap-2">
        <span className="h-px w-8 bg-[#C89B3C]" />
        <p className="text-sm font-semibold text-[#01411C]">
          Press &amp; conferences
        </p>
        <span className="h-px w-8 bg-[#C89B3C]" />
      </div>

      <h2 className="mb-10 font-serif text-3xl font-bold text-[#14201A] sm:text-4xl">
        Latest from the campaign trail
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Featured conference */}
        <div className="overflow-hidden rounded-sm border border-[#01411C]/10 md:col-span-2">
          <div className="relative h-56 overflow-hidden bg-[#01411C]/6 sm:h-72">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="border-t border-[#01411C]/10 bg-white p-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-[#4B5D53]">
              <span>{featured.date}</span>
              <span className="h-1 w-1 rounded-full bg-[#C89B3C]" />
              <span>{featured.location}</span>
            </div>

            <h3 className="mt-2 font-serif text-xl font-bold text-[#14201A] sm:text-2xl">
              {featured.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#4B5D53] sm:text-base">
              {featured.excerpt}
            </p>

            <a
              href="#"
              className="mt-4 inline-block text-sm font-semibold text-[#01411C] underline decoration-[#C89B3C] decoration-2 underline-offset-4 transition-colors hover:text-[#012A12]"
            >
              Read full coverage
            </a>
          </div>
        </div>

        {/* Other conferences */}
        <div className="flex flex-col gap-4">
          {others.map((conference) => {
            const originalIndex = conferences.findIndex(
              (c) => c.id === conference.id,
            );
            return (
              <button
                key={conference.id}
                onClick={() => setActiveIndex(originalIndex)}
                className="flex gap-4 rounded-sm border border-[#01411C]/10 bg-white p-3 text-left transition-colors hover:border-[#C89B3C]/60"
              >
                <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-sm bg-[#01411C]/6">
                  <Image
                    src={conference.image}
                    alt={conference.title}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#4B5D53]">
                    {conference.date}
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm font-semibold text-[#14201A]">
                    {conference.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}