"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Community Health Initiative",
    category: "Healthcare",
    description:
      "A demo project focused on improving access to healthcare facilities in underserved areas.",
    image: "/images/1.jpg",
    videoUrl: "https://www.facebook.com/reel/1784847719182864", // 👈 Paste Facebook video/post public link here
  },
  {
    id: 2,
    title: "Youth Education Program",
    category: "Education",
    description:
      "A placeholder initiative aimed at providing scholarships and learning resources for students.",
    image: "/images/1.jpg",
    videoUrl: "https://www.facebook.com/reel/3597151810441606/?s=single_unit", // 👈 Paste Facebook video/post public link here
  },
  {
    id: 3,
    title: "Clean Water Access",
    category: "Infrastructure",
    description:
      "Sample project highlighting efforts to provide clean drinking water to rural communities.",
    image: "/images/1.jpg",
    videoUrl: "https://www.facebook.com/reel/1140521958442448", // 👈 Paste Facebook video/post public link here
  },
  {
    id: 4,
    title: "Local Business Support",
    category: "Economy",
    description:
      "Demo program designed to support small businesses through grants and mentorship.",
    image: "/images/1.jpg",
    videoUrl: "https://www.facebook.com/reel/1105274415583574", // 👈 Paste Facebook video/post public link here
  },
  {
    id: 5,
    title: "Road Development Project",
    category: "Infrastructure",
    description:
      "Placeholder project showcasing improvements to local road and transport infrastructure.",
    image: "/images/1.jpg",
    videoUrl: "https://www.facebook.com/reel/2258298488345991", // 👈 Paste Facebook video/post public link here
  },
  {
    id: 6,
    title: "Digital Literacy Drive",
    category: "Education",
    description:
      "Sample initiative to teach digital skills to citizens for better job opportunities.",
    image: "/images/1.jpg",
    videoUrl: "https://www.facebook.com/reel/1497175405787059", // 👈 Paste Facebook video/post public link here
  },
];

const AUTO_ADVANCE_MS = 4000;
const TRANSITION_MS = 700;

/** How many cards are visible at once, based on viewport width. */
function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(3);
      else if (window.innerWidth >= 640) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

/** Builds the Facebook Video Plugin embed URL from a public FB video/post link. */
function getFacebookEmbedSrc(videoUrl: string) {
  const encoded = encodeURIComponent(videoUrl);
  return `https://www.facebook.com/plugins/video.php?height=314&href=${encoded}&show_text=false&width=560&t=0`;
}

export default function Projects() {
  const visibleCount = useVisibleCount();
  const [index, setIndex] = useState(0);
  const [snapWithoutTransition, setSnapWithoutTransition] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const wrapTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Respect the user's motion preference.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAutoPlayEnabled(!query.matches);
    const handleChange = () => setAutoPlayEnabled(!query.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  // Extra clones at the end make the loop back to the start feel seamless.
  const extended = useMemo(
    () => [...projects, ...projects.slice(0, visibleCount)],
    [visibleCount],
  );

  // Reset to a clean position whenever the responsive card count changes.
  useEffect(() => {
    setIndex(0);
  }, [visibleCount]);

  // Auto-advance one card at a time.
  useEffect(() => {
    if (!autoPlayEnabled || isPaused) return;
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [autoPlayEnabled, isPaused]);

  // Once we've slid onto the cloned cards, jump back to the real start
  // instantly (no transition) so the loop looks continuous.
  useEffect(() => {
    if (index !== projects.length) return;
    wrapTimeout.current = setTimeout(() => {
      setSnapWithoutTransition(true);
      setIndex(0);
    }, TRANSITION_MS);
    return () => {
      if (wrapTimeout.current) clearTimeout(wrapTimeout.current);
    };
  }, [index]);

  useEffect(() => {
    if (!snapWithoutTransition) return;
    const raf = requestAnimationFrame(() => setSnapWithoutTransition(false));
    return () => cancelAnimationFrame(raf);
  }, [snapWithoutTransition]);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-14 text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-sm border border-[#01411C]/25 bg-[#01411C]/5 px-3 py-1.5 text-sm font-semibold text-[#01411C]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C89B3C]" />
          Projects
        </p>
        <h2 className="font-serif text-3xl font-bold text-[#14201A] sm:text-4xl">
          Initiatives on the ground
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[#4B5D53]">
          A few of the programs and projects delivered for local communities.
        </p>
      </div>

      <div
        className="overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Projects"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div
          className="flex"
          style={{
            width: `${(extended.length / visibleCount) * 100}%`,
            transform: `translateX(-${index * (100 / extended.length)}%)`,
            transition: snapWithoutTransition
              ? "none"
              : `transform ${TRANSITION_MS}ms ease-in-out`,
          }}
        >
          {extended.map((project, i) => {
            const hasVideo = project.videoUrl.trim().length > 0;

            return (
              <div
                key={`${project.id}-${i}`}
                style={{ width: `${100 / extended.length}%` }}
                className="shrink-0 px-3"
                aria-hidden={i >= projects.length}
              >
                <div className="flex h-full flex-col overflow-hidden rounded-sm border border-[#01411C]/10 bg-white transition-colors hover:border-[#C89B3C]/60">
                  <div className="relative h-44 bg-[#01411C]/6">
                    {hasVideo ? (
                      <iframe
                        src={getFacebookEmbedSrc(project.videoUrl)}
                        className="absolute inset-0 h-full w-full"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        title={project.title}
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-2 inline-block w-fit rounded-sm border border-[#01411C]/20 bg-[#01411C]/5 px-3 py-1 text-xs font-semibold text-[#01411C]">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#14201A]">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#4B5D53]">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots — jump straight to any project */}
      <div className="mt-8 flex justify-center gap-2">
        {projects.map((project, i) => (
          <button
            key={project.id}
            type="button"
            aria-label={`Show ${project.title}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index % projects.length
                ? "w-6 bg-[#C89B3C]"
                : "w-1.5 bg-[#01411C]/20 hover:bg-[#01411C]/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}