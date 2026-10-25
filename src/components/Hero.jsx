
import { useState } from "react";

function Hero() {
  const [photoError, setPhotoError] = useState(false);

  const name = "Mahbuba Ferdous Nemme";
  const designation = "Frontend Web Developer";

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/MahbubaNimmi15" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mahbuba-ferdous-nemme-1b7985335/" },
    { name: "Facebook", url: "https://www.facebook.com/share/18NzpMSHqk/" },
  ];

  return (
    <section
      id="home"
      className="min-h-[85vh] bg-slate-900 text-white flex items-center px-5 py-16 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Introduction */}
        <div className="text-center md:text-left">
          <p className="text-cyan-400 text-xl mb-3">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {name}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6">
            {designation}
          </h2>

          <p className="text-gray-300 leading-8 mb-8">
            I am Nemme, an aspiring Frontend Web Developer.
            I enjoy creating modern, responsive and
            user-friendly websites. I am learning HTML,
            CSS, JavaScript, React and Tailwind CSS to
            improve my web development skills.
          </p>

          {/* Resume and Contact Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <button
              type="button"
              disabled
              className="bg-slate-600 text-gray-200 px-6 py-3 rounded-lg cursor-not-allowed"
            >
              Resume Coming Soon
            </button>

            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            {socialLinks.map((social) =>
              social.url ? (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  {social.name}
                </a>
              ) : (
                <span
                  key={social.name}
                  className="text-gray-500"
                  title="Profile link coming soon"
                >
                  {social.name}
                </span>
              )
            )}
          </div>
        </div>

        {/* Profile Photo */}
        <div className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 overflow-hidden bg-slate-800 flex items-center justify-center shadow-2xl">
            {photoError ? (
              <div className="text-center px-4">
                <div className="text-6xl mb-3">👨‍💻</div>
                <p className="text-gray-400 text-sm">
                  Naim's Profile Photo
                </p>
              </div>
            ) : (
              <img
                src="/profile.jpg"
                alt="Naim's professional profile"
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
