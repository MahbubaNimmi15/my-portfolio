
const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      "C",
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "npm",
      "Chrome DevTools",
      "Vercel",
      "Postman",
      "Figma",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-20 px-5 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-800 border border-slate-700 p-7 rounded-2xl hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-slate-900 border border-slate-700 rounded-xl p-4 text-center text-sm font-medium hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
                  >
                    {skill}
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;
