
import { useState } from "react";

function Hero() {
  const [photoError, setPhotoError] = useState(false);
  const [resumeMessage, setResumeMessage] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/MahbubaNimmi15",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mahbuba-ferdous-nemme-1b7985335/",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/18NzpMSHqk/",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-[85vh] bg-slate-900 text-white flex items-center px-5 py-16 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="text-center md:text-left">
          <p className="text-cyan-400 text-xl mb-3">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Mahbuba Ferdous Nemme
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6">
            Frontend Web Developer
          </h2>

          <p className="text-gray-300 leading-8 mb-8">
            I am Nemme, an aspiring Frontend Web Developer.
            I enjoy creating modern, responsive and
            user-friendly websites. I am learning HTML,
            CSS, JavaScript, React and Tailwind CSS to
            improve my web development skills.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
            <button
              type="button"
              onClick={() => setResumeMessage(true)}
              className="bg-cyan-500 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition cursor-pointer"
            >
              View / Download Resume
            </button>

            <a
              href="/#contact"
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              Contact Me
            </a>
          </div>

          {resumeMessage && (
            <p role="status" className="text-yellow-300 text-sm mb-5">
              My resume is being prepared. It will be
              available for download soon.
            </p>
          )}

          <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 overflow-hidden bg-slate-800 flex items-center justify-center shadow-2xl">
            {photoError ? (
              <div className="text-center">
                <span className="text-5xl">👩‍💻</span>
                <p className="text-gray-400 mt-3">
                  Profile Photo
                </p>
              </div>
            ) : (
              <img
                src="/profile.jpg"
                alt="Mahbuba Ferdous Nemme"
                className="w-full h-full object-cover"
                onError={() => setPhotoError(true)}
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
