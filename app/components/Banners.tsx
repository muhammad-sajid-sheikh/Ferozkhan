"use client";

import { useState } from "react";

const banners = [
  {
    id: 1,
    title: "Community Outreach Program",
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "Youth Empowerment Campaign",
    color: "bg-green-600",
  },
  {
    id: 3,
    title: "Infrastructure Development Drive",
    color: "bg-purple-600",
  },
];

export default function Banners() {
  const [activeIndex, setActiveIndex] = useState(0);

  const mainBanner = banners[activeIndex];
  const smallBanners = banners.filter((_, index) => index !== activeIndex);

  const handleSmallBannerClick = (id: number) => {
    const newIndex = banners.findIndex((b) => b.id === id);
    setActiveIndex(newIndex);
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
          Demo / Placeholder Banners
        </p>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Featured Highlights
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Main Banner */}
        <div
          className={`flex h-64 items-center justify-center rounded-xl md:col-span-2 md:h-96 ${mainBanner.color} p-6 text-center text-xl font-bold text-white shadow-md`}
        >
          {mainBanner.title}
        </div>

        {/* Small Banners */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          {smallBanners.map((banner) => (
            <button
              key={banner.id}
              onClick={() => handleSmallBannerClick(banner.id)}
              className={`flex h-28 items-center justify-center rounded-xl md:h-[186px] ${banner.color} p-4 text-center text-sm font-semibold text-white opacity-80 shadow-md transition-opacity hover:opacity-100`}
            >
              {banner.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}