
function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-20 px-5 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="bg-slate-900 p-6 md:p-10 rounded-2xl border border-slate-800 shadow-lg">

          <h3 className="text-2xl font-semibold mb-5">
            Hello! I'm <span className="text-cyan-400">Nemme</span>
          </h3>

          <p className="text-gray-300 leading-8 mb-5">
            I am an aspiring Frontend Web Developer who
            enjoys designing modern, responsive and
            user-friendly websites. My interest in programming
            started when I became curious about how websites
            are built and how they work.
          </p>

          <p className="text-gray-300 leading-8 mb-5">
            I started my web development journey by learning
            HTML and CSS. I am now exploring JavaScript,
            React and Tailwind CSS to improve my skills
            and create interactive web applications.
          </p>

          <p className="text-gray-300 leading-8 mb-5">
            I enjoy working on creative frontend designs,
            solving coding problems, learning new technologies
            and turning ideas into functional websites.
          </p>

          <p className="text-gray-300 leading-8">
            Outside programming, I enjoy listening to music,
            playing sports and exploring new things.
            I believe consistency, creativity and continuous
            learning are important for becoming a better developer.
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;
