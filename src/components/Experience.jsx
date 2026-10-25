
const experiences = [
  {
    title: "Frontend Development Practice",
    company: "Personal Learning & Projects",
    duration: "Ongoing",
    description:
      "Developing responsive and user-friendly web interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "Programming & Problem Solving",
    company: "Academic & Personal Practice",
    duration: "Ongoing",
    description:
      "Practicing programming concepts, data structures, algorithms, object-oriented programming, and logical problem solving using C, C++, and Java.",
    skills: [
      "C",
      "C++",
      "Java",
      "OOP",
      "Problem Solving",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-20 px-5 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
          My <span className="text-cyan-400">Experience</span>
        </h2>

        <p className="text-gray-400 text-center mb-12">
          My learning journey and hands-on development practice
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-7 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-3">
                {experience.title}
              </h3>

              <p className="text-cyan-400 font-medium mb-2">
                {experience.company}
              </p>

              <p className="text-gray-400 text-sm mb-5">
                {experience.duration}
              </p>

              <p className="text-gray-300 leading-8 mb-6">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-900 text-cyan-400 border border-slate-700 px-3 py-2 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;
