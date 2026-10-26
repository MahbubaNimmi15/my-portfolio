
import { Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-20 px-5 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-gray-400 mb-10">
          Have a question or a project in mind?
          Feel free to get in touch.
        </p>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col items-center gap-6">

          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-3 hover:text-cyan-400 break-all"
          >
            <Mail size={23} />
           mahbubanimmi1529@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:+8801XXXXXXXXX"
            className="flex items-center gap-3 hover:text-cyan-400"
          >
            <Phone size={23} />
            +8801750184501
          </a>

          {/* Social Media */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a
              href="https://github.com/MahbubaNimmi15"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 px-5 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 px-5 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-950 transition"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
