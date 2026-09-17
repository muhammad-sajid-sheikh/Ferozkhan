export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[90vh] flex-col-reverse items-center justify-center gap-10 px-4 py-16 sm:px-6 md:flex-row md:justify-between lg:px-8"
    >
      {/* Hero Content */}
      <div className="max-w-xl text-center md:text-left">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
          Demo / Placeholder Profile
        </p>

        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          John Doe
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Dedicated public servant committed to community development,
          transparency, and progress. Working together to build a better
          future for everyone.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Profile Photo Placeholder */}
      <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gray-200 text-gray-400 sm:h-64 sm:w-64">
        <span className="text-sm">Photo Placeholder</span>
      </div>
    </section>
  );
}