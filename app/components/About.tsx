import Image from "next/image";
import { Eye, BookOpen, Building2 } from "lucide-react";

const highlights = [
  { label: "Years of service", value: "10+" },
  { label: "Projects completed", value: "25+" },
  { label: "Communities served", value: "50+" },
];

const focusAreas = [
  { label: "Transparency", icon: Eye },
  { label: "Education", icon: BookOpen },
  { label: "Infrastructure", icon: Building2 },
];

/** Simple crescent & star mark — keep this shared with Navbar/Hero if you
 *  move it into its own component file. */
function EmblemMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M22 6a14 14 0 1 0 0 28 11 11 0 1 1 0-28Z" fill="currentColor" />
      <path
        d="M31 13.5 32.3 17l3.7.3-2.9 2.4.9 3.6-3-2-3 2 .9-3.6-2.9-2.4 3.7-.3 1.3-3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F5F0] px-4 py-20 sm:px-6 lg:px-8"
    >
      <EmblemMark className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 text-[#01411C]/4 sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          {/* Left: Text */}
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-sm border border-[#01411C]/25 bg-white px-3 py-1.5 text-sm font-semibold tracking-wide text-[#01411C]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C89B3C]" />
              About
            </p>

            <h2 className="font-serif text-3xl font-bold text-[#14201A] sm:text-4xl">
              Committed to public service
            </h2>

            <p className="mt-5 leading-relaxed text-[#4B5D53]">
              M feroz khan has spent over a decade working closely with local
              communities to drive positive change. With a strong focus on
              transparency, education, and infrastructure, John believes in
              leadership that listens first and acts with integrity.
            </p>

            <p className="mt-4 leading-relaxed text-[#4B5D53]">
              That work continues today — pressing for accountable local
              government, expanding access to schools and clinics, and
              standing with citizens on the issues that shape their daily
              lives.
            </p>

            {/* Focus areas */}
            <div className="mt-8 flex flex-wrap gap-6">
              {focusAreas.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C89B3C]/50 bg-white">
                    <Icon className="h-4 w-4 text-[#01411C]" />
                  </span>
                  <span className="text-sm font-medium text-[#14201A]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-4/5 overflow-hidden rounded-sm border border-[#01411C]/10 bg-white">
              <Image
                src="/images/pic3.jpg"
                alt="John Doe meeting with community members"
                fill
                sizes="(min-width: 768px) 384px, 90vw"
                className="object-cover"
              />
            </div>

            {/* Offset gold frame accent */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-sm border-2 border-[#C89B3C]/50" />

            {/* Crest badge */}
            <div className="absolute -bottom-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#01411C] shadow-sm">
              <EmblemMark className="h-8 w-8 text-[#C89B3C]" />
            </div>
          </div>
        </div>

        {/* Highlights strip */}
        <div className="mt-16 grid grid-cols-1 divide-y divide-[#01411C]/10 border-t border-[#01411C]/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {highlights.map((item) => (
            <div key={item.label} className="flex items-center gap-4 py-6 sm:justify-center">
              <span className="h-10 w-1 shrink-0 bg-[#C89B3C]" />
              <div>
                <p className="font-serif text-3xl font-bold text-[#01411C]">
                  {item.value}
                </p>
                <p className="mt-1 text-sm font-medium text-[#4B5D53]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}