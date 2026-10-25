
import { Link, useParams } from "react-router-dom";
import { projects } from "../components/Projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold">
          Project Not Found
        </h1>

        <Link to="/" className="text-cyan-400">
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 text-white py-16 px-5">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/#projects"
          className="inline-block text-cyan-400 mb-8"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          {project.name}
        </h1>

        <div className="bg-slate-800 rounded-xl overflow-hidden mb-10">
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="w-full max-h-[450px] object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="space-y-9">
          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Technology Stack
            </h2>

            {project.stack.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-800 px-4 py-2 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">
                Technology information will be added.
              </p>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Project Description
            </h2>
            <p className="text-gray-300 leading-8">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.liveLink ? (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 text-slate-950 px-5 py-3 rounded-lg font-semibold"
              >
                Live Project
              </a>
            ) : (
              <span className="text-gray-400">
                Live Project Coming Soon
              </span>
            )}

            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400 px-5 py-3 rounded-lg"
              >
                Client GitHub
              </a>
            ) : (
              <span className="text-gray-400">
                GitHub Link Not Added
              </span>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Challenges Faced
            </h2>
            <p className="text-gray-300 leading-8">
              {project.challenges}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Future Improvements
            </h2>
            <p className="text-gray-300 leading-8">
              {project.futurePlans}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
