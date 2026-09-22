const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const contactInfo = [
  { label: "Email", value: "contact@johndoe-demo.com" },
  { label: "Phone", value: "+92 300 1234567" },
];

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.49-1.46h1.6V4.36c-.28-.04-1.22-.11-2.32-.11-2.3 0-3.87 1.4-3.87 3.98V10.5H8v3h2.4V21h3.1Z" />
    </svg>
  );
}

function TwitterIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.9 3h2.9l-6.3 7.2L23 21h-5.8l-4.5-5.9L7.5 21H4.6l6.7-7.7L4 3h5.9l4.1 5.4L18.9 3Zm-1 16.2h1.6L7.2 4.7H5.5l12.4 14.5Z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialLinks = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#01411C]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-3">
          {/* Brand + Social */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2.5">
              <EmblemMark className="h-6 w-6 text-[#C89B3C]" />
              <p className="font-serif text-lg font-bold text-white">
                Muhammad Feroz Khan
              </p>
            </div>

            <p className="mt-2 max-w-xs text-sm text-white/60">
              Working together for a better tomorrow.
            </p>

            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-[#C89B3C] hover:text-[#C89B3C]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm font-semibold text-[#C89B3C]">
              Quick links
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm font-semibold text-[#C89B3C]">Contact</p>
            <ul className="mt-4 space-y-2.5">
              {contactInfo.map((item) => (
                <li key={item.label} className="text-sm text-white/80">
                  {item.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/50">
            &copy; {currentYear} M Feroz Khan. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-xs text-white/50">
            <EmblemMark className="h-3 w-3 text-[#C89B3C]" />
            قوم کی خدمت، ملک کی ترقی
          </p>
        </div>
      </div>
    </footer>
  );
}