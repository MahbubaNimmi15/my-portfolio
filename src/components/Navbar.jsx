
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">

        <a href="#home" className="text-2xl font-bold text-cyan-400">
          MyPortfolio.
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-gray-300 hover:text-cyan-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-900 px-5 pb-5 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
