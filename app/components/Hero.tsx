import Image from "next/image";
import JoinUsDialog from "./JoinUsDialog";
import Link from "next/link";

/** Simple crescent & star mark — reuse the same one from Navbar.tsx if you'd
 *  rather keep a single shared component at e.g. components/EmblemMark.tsx */
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

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F7F5F0] px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background watermark — a single deliberate decorative moment
      <EmblemMark className="pointer-events-none absolute -right-24 -top-24 h-105 w-105 text-[#01411C]/4 sm:-right-16 sm:-top-16" /> */}
 <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/pic7.jpeg"
          alt=""
          fill
          className="object-cover opacity-18"
          priority
        />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-14 md:flex-row md:justify-between">
        {/* Content */}
        <div className="max-w-xl text-center md:text-left">
          <p className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-[#01411C] md:justify-start">
            <span className="h-px w-8 bg-[#C89B3C]" />
            Public servant and community leader
            <span className="h-px w-8 bg-[#C89B3C]" />
          </p>

          <h1 className="font-serif text-5xl font-bold leading-tight text-[#14201A] sm:text-6xl">
            Muhammad Feroz Khan
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-[#4B5D53]">
            Dedicated to community development, transparency, and progress
            working alongside citizens to build a stronger, more accountable
            future for every constituency.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
           
            {/* Buttons */}
  <JoinUsDialog>
    <button
      type="button"
      className="rounded-sm bg-[#C89B3C] px-7 py-3 text-center text-sm font-semibold text-[#012A12] transition-colors hover:bg-[#dbb257]"
    >
      Join Us
    </button>
  
</JoinUsDialog>
  <a
    href="#contact"
    className="rounded-sm bg-[#C89B3C] px-7 py-3 text-center text-sm font-semibold text-[#012A12] transition-colors hover:bg-[#dbb257]"
  >
    Contact Me
  </a>
</div>
        </div>

        {/* Portrait frame */}
        <div className="relative shrink-0">
          <div className="h-84 w-84 rounded-full border border-[#C89B3C]/60 p-2 sm:h-95 sm:w-95">
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[#01411C]/15 bg-white">
              <Image
                src="/images/pic1.jpg"
                alt="Portrait of Feroz Khan"
                fill
                sizes="(min-width: 640px) 288px, 224px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Crest badge */}
<div className="absolute -bottom-1 -right-1 flex h-20 w-20 items-center justify-center rounded-full bg-[#01411C] shadow-sm sm:h-24 sm:w-24">
  <Image
    src="/images/pic6.png"
    alt="pic"
    className="object-cover"
    fill
  />
</div>
        </div>
      </div>
    </section>
  );
}