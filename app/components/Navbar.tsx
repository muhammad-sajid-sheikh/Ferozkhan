
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import JoinUsDialog from "@/app/components/JoinUsDialog";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.5c0-.87.24-1.46 1.49-1.46h1.6V4.36c-.28-.04-1.22-.11-2.32-.11-2.3 0-3.87 1.4-3.87 3.98v2.27H8v3h2.4V21h3.1Z" />
    </svg>
  );
}

function TwitterIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 3h2.9l-6.3 7.2L23 21h-5.8l-4.5-5.9L7.5 21H4.6l6.7-7.7L4 3h5.9l4.1 5.4L18.9 3Zm-1 16.2h1.6L7.2 4.7H5.5l12.4 14.5Z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="17.2"
        cy="6.8"
        r="0.9"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

const socialLinks = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];

function EmblemMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22 6a14 14 0 1 0 0 28 11 11 0 1 1 0-28Z"
        fill="currentColor"
      />
      <path
        d="M31 13.5 32.3 17l3.7.3-2.9 2.4.9 3.6-3-2-3 2 .9-3.6-2.9-2.4 3.7-.3 1.3-3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="w-full bg-[#012A12] text-[#F2EFE6]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <EmblemMark className="h-3.5 w-3.5 text-[#C89B3C]" />

            <span className="font-medium tracking-wide">
              قوم کی خدمت، ملک کی ترقی
            </span>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden items-center gap-3 sm:flex">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="text-[#F2EFE6]/70 transition-colors hover:text-[#C89B3C]"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full border-b border-[#C89B3C]/30 bg-[#01411C]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <EmblemMark className="h-7 w-7 text-[#C89B3C]" />

            <span className="font-serif text-xl font-bold tracking-tight text-white">
              M Feroz Khan
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative pb-1 text-sm font-medium text-white/85 transition-colors hover:text-white"
                >
                  {link.label}

                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C89B3C] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Join Us - Desktop */}
         <div className="hidden md:block">
  
    <button
      type="button"
      className="rounded-sm bg-[#C89B3C] px-5 py-2 text-sm font-semibold text-[#012A12] transition-colors hover:bg-[#dbb257]"
    >
      Join Us
    </button>
 
</div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              {/* <SheetTrigger >
                <button
                  type="button"
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </SheetTrigger> */}

              <SheetTrigger
  render={
    <button
      type="button"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
    />
  }
>
  {isOpen ? (
    <X className="h-6 w-6" />
  ) : (
    <Menu className="h-6 w-6" />
  )}
</SheetTrigger>

              {/* Mobile Sheet */}
              <SheetContent side="right" className="flex flex-col bg-white">
                
                {/* Mobile Logo */}
                <div className="mt-10 flex items-center gap-2 px-4">
                  <EmblemMark className="h-6 w-6 text-[#01411C]" />

                  <span className="font-serif text-lg font-bold text-[#01411C]">
                    M Feroz Khan
                  </span>
                </div>

                {/* Mobile Navigation */}
                <ul className="mt-8 flex flex-col gap-6 px-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <SheetClose >
                        <a
                          href={link.href}
                          className="block font-serif text-lg font-medium text-[#14201A] transition-colors hover:text-[#01411C]"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <JoinUsDialog>
  <button
    type="button"
    className="block w-full rounded-sm bg-[#C89B3C] px-5 py-2.5 text-center text-sm font-semibold text-[#012A12] transition-colors hover:bg-[#dbb257]"
  >
    Join Us
  </button>
</JoinUsDialog>

                {/* Mobile Join + Social */}
                <div className="mt-auto px-4 pb-6">
                 

                  <div className="mt-4 flex items-center justify-center gap-4">
                    {socialLinks.map((item) => {
                      const Icon = item.icon;

                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          aria-label={item.label}
                          className="text-[#01411C]/70 transition-colors hover:text-[#01411C]"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
