const highlights = [
  { label: "Years of Service", value: "10+" },
  { label: "Projects Completed", value: "25+" },
  { label: "Communities Served", value: "50+" },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Left: Text */}
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            About Me
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Committed to Public Service
          </h2>
          <p className="mt-4 text-gray-600">
            {/* Demo/Placeholder bio content */}
            John Doe has spent over a decade working closely with local
            communities to drive positive change. With a strong focus on
            transparency, education, and infrastructure, John believes in
            leadership that listens first and acts with integrity.
          </p>
          <p className="mt-4 text-gray-600">
            This is placeholder content for demonstration purposes only and
            does not represent any real individual or political affiliation.
          </p>
        </div>

        {/* Right: Highlights */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:text-left"
            >
              <p className="text-3xl font-bold text-blue-600">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}