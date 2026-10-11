import {
  FaGithub,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/5">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row lg:px-10">

        <div>

          <p className="font-black">
            RAM<span className="text-[#b8ff00]">.</span>DEV
          </p>

          <p className="mt-1 text-xs text-white/30">
            © 2026 Ram Ji Gupta. All rights reserved.
          </p>

        </div>

        <div className="flex items-center gap-3">

          <a
            href="https://github.com/ramjigupta18"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-[#b8ff00]/40 hover:text-[#b8ff00]"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-[#b8ff00]/40 hover:text-[#b8ff00]"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="#home"
            className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#b8ff00] text-black transition hover:scale-110"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;