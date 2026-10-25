
const projects = [
  {
    id: 1,
    name: "FitLog",
    description:
      "My fitness tracking project. A web application focused on helping users organize and monitor fitness activities.",
    technology: "Technology details coming soon",
    image: "/projects/fitlog.jpg",
  },
  {
    id: 2,
    name: "Bazar-Dor",
    description:
      "My market price information project, designed to help users explore product prices in an organized interface.",
    technology: "Technology details coming soon",
    image: "/projects/bazar-dor.jpg",
  },
  {
    id: 3,
    name: "Task Manager",
    description:
      "A React task management application to add, complete, and delete daily tasks, with browser storage support.",
    technology: "React, JavaScript, Tailwind CSS",
    image: "/projects/task-manager.jpg",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-20 px-5 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400 transition"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover bg-slate-700"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm leading-7 mb-4">
                  {project.description}
                </p>

                <p className="text-cyan-400 text-sm mb-5">
                  {project.technology}
                </p>

                <button
                  type="button"
                  disabled
                  className="bg-slate-600 px-5 py-3 rounded-lg cursor-not-allowed"
                >
                  Details Coming Soon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
