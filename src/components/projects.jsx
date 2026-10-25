
import { Link } from "react-router-dom";

export const projects = [
  {
    id: "fitlog",
    name: "FitLog",
    image: "/projects/fitlog.png",
    description:
      "A fitness tracking application for organizing and monitoring fitness activities.",
    stack: ["Add actual technologies used"],
    liveLink: "https://fitlog-ten-ruddy.vercel.app/",
    githubLink: "",
    challenges:
      "Add the actual challenges faced while building FitLog.",
    futurePlans:
      "Add your planned improvements for FitLog.",
  },
  {
    id: "bazar-dor",
    name: "Bazar-Dor",
    image: "/projects/bazar-dor.png",
    description:
      "A market price information application for exploring product prices.",
    stack: ["Add actual technologies used"],
    liveLink: "https://bazar-dor-navy.vercel.app/",
    githubLink: "",
    challenges:
      "Add the actual challenges faced while building Bazar-Dor.",
    futurePlans:
      "Add your planned improvements for Bazar-Dor.",
  },
  {
    id: "task-manager",
    name: "Task Manager",
    image: "/projects/task-manager.png",
    description:
      "A task management application for adding, completing, and deleting tasks.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    liveLink: "",
    githubLink: "",
    challenges:
      "Managing task state and saving tasks in localStorage.",
    futurePlans:
      "Add task editing, priorities, and deadlines.",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-20 px-5 text-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition"
            >
              <div className="h-48 bg-slate-700">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm leading-7 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-900 text-cyan-400 text-xs px-3 py-2 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/projects/${project.id}`}
                    className="bg-cyan-500 text-slate-950 px-5 py-3 rounded-lg font-semibold hover:bg-cyan-400"
                  >
                    View Details
                  </Link>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-cyan-400 text-cyan-400 px-5 py-3 rounded-lg"
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
