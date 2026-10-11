import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

        <a href="#home" className="inline-flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b8ff00] text-xl font-black text-black transition-transform duration-300 group-hover:rotate-6">
            R
          </span>
          <span className="text-xl font-extrabold tracking-tight text-white">
            RAM<span className="text-[#b8ff00]">.DEV</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm text-white/70 hover:text-[#b8ff00] transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm text-white/70 hover:text-[#b8ff00] transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-white/70 hover:text-[#b8ff00] transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-white/70 hover:text-[#b8ff00] transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-sm text-white/70 hover:text-[#b8ff00] transition"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ramjigupta18"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-[#b8ff00]/50 hover:text-[#b8ff00] transition"
          >
            <FaGithub />
          </a>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#b8ff00] px-5 py-2.5 text-sm font-bold text-black transition hover:scale-105 sm:block"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
