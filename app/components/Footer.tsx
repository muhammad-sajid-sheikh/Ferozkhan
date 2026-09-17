
const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          {/* Left: Name + Tagline */}
          <div>
            <p className="text-lg font-bold text-gray-900">John Doe</p>

            <p className="mt-1 text-sm text-gray-500">
              Working together for a better tomorrow.
            </p>
          </div>

          {/* Center: Quick Links */}
          <ul className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>

          <p className="mt-1 text-xs text-gray-400">
            This is a demo website with placeholder content, built for
            demonstration purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
