
export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
          Get in Touch
        </p>

        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Contact
        </h2>

        <p className="mt-4 text-gray-600">
          Have a question or want to connect? Reach out below.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Email
            </h3>

            <p className="mt-1 text-gray-800">
              contact@johndoe-demo.com
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Phone
            </h3>

            <p className="mt-1 text-gray-800">
              +1 (555) 123-4567
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Office Address
            </h3>

            <p className="mt-1 text-gray-800">
              123 Demo Street, Sample City, Placeholder State
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Follow
            </h3>

            <div className="mt-2 flex gap-4">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Facebook
              </a>

              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message..."
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Send Message
          </button>

          <p className="text-xs text-gray-400">
            * Form is UI-only for now. Submission functionality will be added
            later.
          </p>
        </form>
      </div>
    </section>
  );
}