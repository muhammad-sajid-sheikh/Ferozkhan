import { Mail, Phone, MapPin } from "lucide-react";

const contactDetails = [
  { label: "Email", value: "mferozkhan.com", icon: Mail },
  { label: "Phone", value: "+92 300 1234567", icon: Phone },
  {
    label: "Office address",
    value: "karachi",
    icon: MapPin,
  },
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

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-14 text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-sm border border-[#01411C]/25 bg-[#01411C]/5 px-3 py-1.5 text-sm font-semibold text-[#01411C]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C89B3C]" />
          Get in touch
        </p>

        <h2 className="font-serif text-3xl font-bold text-[#14201A] sm:text-4xl">
          Contact
        </h2>

        <p className="mx-auto mt-4 max-w-md text-[#4B5D53]">
          Have a question or want to connect? Reach out below.
        </p>
      </div>

      <div className="grid gap-14 md:grid-cols-2">
        {/* Left: Contact Info */}
        <div>
          <div className="space-y-6">
            {contactDetails.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[#01411C]/6">
                  <Icon className="h-5 w-5 text-[#01411C]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#4B5D53]">
                    {label}
                  </p>
                  <p className="mt-0.5 text-[#14201A]">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-[#01411C]/10 pt-6">
            <p className="text-sm font-medium text-[#4B5D53]">Follow</p>
            <div className="mt-3 flex gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#01411C]/6 text-[#01411C] transition-colors hover:bg-[#01411C] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-[#14201A]"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-sm border border-[#01411C]/20 px-4 py-2 text-sm text-[#14201A] focus:border-[#01411C] focus:outline-none focus:ring-1 focus:ring-[#01411C]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-[#14201A]"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-sm border border-[#01411C]/20 px-4 py-2 text-sm text-[#14201A] focus:border-[#01411C] focus:outline-none focus:ring-1 focus:ring-[#01411C]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-[#14201A]"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message..."
              required
              className="w-full rounded-sm border border-[#01411C]/20 px-4 py-2 text-sm text-[#14201A] focus:border-[#01411C] focus:outline-none focus:ring-1 focus:ring-[#01411C]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-sm bg-[#C89B3C] px-6 py-3 text-sm font-semibold text-[#012A12] transition-colors hover:bg-[#dbb257]"
          >
            Send Message
          </button>

          
        </form>
      </div>
    </section>
  );
}