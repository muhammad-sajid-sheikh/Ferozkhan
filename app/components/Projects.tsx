const projects = [
  {
    id: 1,
    title: "Community Health Initiative",
    category: "Healthcare",
    description:
      "A demo project focused on improving access to healthcare facilities in underserved areas.",
  },
  {
    id: 2,
    title: "Youth Education Program",
    category: "Education",
    description:
      "A placeholder initiative aimed at providing scholarships and learning resources for students.",
  },
  {
    id: 3,
    title: "Clean Water Access",
    category: "Infrastructure",
    description:
      "Sample project highlighting efforts to provide clean drinking water to rural communities.",
  },
  {
    id: 4,
    title: "Local Business Support",
    category: "Economy",
    description:
      "Demo program designed to support small businesses through grants and mentorship.",
  },
  {
    id: 5,
    title: "Road Development Project",
    category: "Infrastructure",
    description:
      "Placeholder project showcasing improvements to local road and transport infrastructure.",
  },
  {
    id: 6,
    title: "Digital Literacy Drive",
    category: "Education",
    description:
      "Sample initiative to teach digital skills to citizens for better job opportunities.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
          Demo / Placeholder Data
        </p>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          My Projects
        </h2>
        <p className="mt-4 text-gray-600">
          A few initiatives and programs (sample content for demonstration).
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Image Placeholder */}
            <div className="flex h-40 items-center justify-center bg-gray-200 text-sm text-gray-400">
              Image Placeholder
            </div>

            <div className="flex flex-1 flex-col p-6">
              <span className="mb-2 inline-block w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                {project.category}
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-gray-600">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}