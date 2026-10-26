
import { Link } from "react-router-dom";

export const projects = [
  {
    id: "fitlog",
    name: "FitLog",
    image: "/projects/fitlog.png",
    description:
      "A fitness tracking web application designed to help users organize fitness activities and track their progress.",
    stack: [],
    liveLink: "https://fitlog-ten-ruddy.vercel.app/",
    githubLink: "",
    challenges:
      "Details about the challenges faced during development will be added.",
    futurePlans:
      "Potential improvements include enhanced progress tracking and additional fitness features.",
  },

  {
    id: "bazar-dor",
    name: "Bazar-Dor",
    image: "/projects/bazar-dor.png",
    description:
      "A web application for exploring product prices and accessing market information in an organized interface.",
    stack: [],
    liveLink: "https://bazar-dor-navy.vercel.app/",
    githubLink: "",
    challenges:
      "Details about the challenges faced during development will be added.",
    futurePlans:
      "Potential improvements include better search, more categories and price comparisons.",
  },

  {
    id: "dev-stack",
    name: "Dev Stack",
    image: "/projects/dev-stack.png",
    description:
      "A web application project. Its specific features and purpose will be added after reviewing the source code.",
    stack: [],
    liveLink: "https://dev-stack-rho.vercel.app/",
    githubLink: "",
    challenges:
      "Details about the challenges faced during development will be added.",
    futurePlans:
      "Future improvements will be added based on the application's features.",
  },
];

function ProjectImage({ project }) {
  return (
    <div className="h-52 bg-slate-700 overflow-hidden relative">
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextElementSibling.style.display =
            "flex";
        }}
      />

      <div
        style={{ display: "none" }}
        className="absolute inset-0 items-center justify-center text-slate-300 text-center p-4"
      >
        Screenshot not found
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-20 px-5 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Explore some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
            >
              <ProjectImage project={project} />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm leading-7 mb-5 min-h-28">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.length > 0 ? (
                    project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-900 text-cyan-400 text-xs px-3 py-2 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-gray-400">
                      Technology details coming soon
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/projects/${project.id}`}
                    className="bg-cyan-500 text-slate-950 px-5 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
                  >
                    View Details
                  </Link>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-cyan-400 text-cyan-400 px-5 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
