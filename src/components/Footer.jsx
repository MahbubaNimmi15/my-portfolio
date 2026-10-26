
function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 px-5 text-center">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Nemme.
        All Rights Reserved.
      </p>
      <p className="text-cyan-400 text-sm mt-2">
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
}

export default Footer;
