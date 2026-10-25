
const educationData = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Metropolitan University ",
    duration: "2023 - 2027",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science and Engineering. My academic interests include Programming, Data Structures, Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Compiler Construction, Software Engineering, Web Development, Computer Networks, and Problem Solving. I enjoy applying theoretical knowledge to practical projects and exploring modern technologies.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sylhet Cantonment Public School & College",
    duration: "2020 - 2022",
    description:
      "Completed Higher Secondary education in the Science group, studying Physics, Chemistry, Mathematics, and other core science subjects.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Al-Amin Jamea Islamia High School & College",
    duration: "2018 - 2020",
    description:
      "Completed Secondary School education in the Science group, developing a strong foundation in Mathematics, Science, and analytical problem-solving.",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-20 px-5 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Education</span>
        </h2>

        <div className="space-y-6">
          {educationData.map((item) => (
            <div
              key={item.degree}
              className="bg-slate-900 border-l-4 border-cyan-400 rounded-xl p-6 md:p-8 hover:bg-slate-800 transition duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {item.degree}
              </h3>

              <p className="text-cyan-400 font-semibold mb-2">
                {item.institution}
              </p>

              <p className="text-gray-400 text-sm mb-4">
                {item.duration}
              </p>

              <p className="text-gray-300 leading-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
