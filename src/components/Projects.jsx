
import { useState } from "react";
import { Link } from "react-router-dom";

export const projects = [
  {
    id: "fitlog",
    name: "FitLog",
    image: "/projects/fitlog.png",

    description:
      "FitLog is a fitness web application where users can explore workouts, organize workout plans, and manage their fitness activities through a responsive interface.",

    stack: ["React", "JavaScript", "Tailwind CSS"],

    liveLink: "https://fitlog-ten-ruddy.vercel.app/",
    githubLink: "https://github.com/MahbubaNimmi15/fitlog",

    challenges:
      "One of the main development challenges was organizing workout information into a clear and user-friendly interface. Building responsive layouts for different screen sizes and managing interactive workout features also required careful planning and testing.",

    futurePlans:
      "In the future, I plan to introduce personalized fitness goals, workout history, visual progress charts, and advanced fitness tracking features to improve the overall user experience.",
  },

  {
    id: "bazar-dor",
    name: "Bazar-Dor",
    image: "/projects/bazar-dor.png",

    description:
      "Bazar-Dor is a web application that helps users explore everyday product prices and browse market information through an organized, user-friendly interface.",

    stack: ["React", "JavaScript", "Tailwind CSS"],

    liveLink: "https://bazar-dor-navy.vercel.app/",
    githubLink: "https://github.com/MahbubaNimmi15/bazar-dor",

    challenges:
      "A key development challenge was organizing product and market price information in a way that users could easily understand. Designing responsive product layouts and maintaining a clear interface across different devices were also important considerations.",

    futurePlans:
      "I plan to improve product search, add more product categories, introduce price comparisons between markets, and include historical price trends to make the application more useful.",
  },

  {
    id: "dev-stack",
    name: "Dev Stack",
    image: "/projects/dev-stack.png",

    description:
      "Dev Stack is an interactive developer technology explorer. Users can browse technologies, explore their details, and create a personalized technology stack by selecting preferred tools.",

    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Toastify",
      "Vite",
    ],

    liveLink: "https://dev-stack-rho.vercel.app/",
    githubLink: "https://github.com/MahbubaNimmi15/dev-stack",

    challenges:
      "Managing selected technologies using React state was an important implementation challenge. The application also required handling duplicate selections, displaying technology information from JSON data, and maintaining a responsive and interactive interface.",

    futurePlans:
      "Future improvements include technology comparisons, advanced search and filtering, the ability to save personalized technology stacks, and recommendations based on user preferences.",
  },
];

function ProjectImage({ project }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="h-52 bg-slate-700 overflow-hidden flex items-center justify-center">
      {!imageFailed ? (
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="w-full h-full object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <p className="text-slate-300 text-sm text-center px-4">
          Screenshot not found
        </p>
      )}
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
              className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <ProjectImage project={project} />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm leading-7 mb-5">
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

                <div className="flex flex-wrap gap-3 mt-auto">
                  <Link
                    to={`/projects/${project.id}`}
                    className="bg-cyan-500 text-slate-950 px-5 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
                  >
                    View Details
                  </Link>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-cyan-400 text-cyan-400 px-5 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition"
                  >
                    Live Demo
                  </a>
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
