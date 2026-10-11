import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8ff00]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#b8ff00]">
          06 — Contact
        </p>

        <h2 className="mt-6 text-5xl font-black leading-tight sm:text-7xl">
          Let's build
          <br />
          <span className="text-[#b8ff00] text-glow">
            something great.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/40">
          I'm currently looking for frontend development
          opportunities, internships and projects where I can
          contribute and grow.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {/* CHANGE EMAIL HERE */}

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=karangupta63118@gmail.com"
            className="group flex items-center gap-3 rounded-full bg-[#b8ff00] px-7 py-4 font-bold text-black transition hover:scale-105"
          >
            <FaEnvelope />
            Email Me
            <FaArrowRight className="transition group-hover:translate-x-1" />
          </a>

          <a
            href="https://github.com/ramjigupta18"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold transition hover:border-[#b8ff00]/40 hover:text-[#b8ff00]"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold transition hover:border-[#b8ff00]/40 hover:text-[#b8ff00]"
          >
            <FaLinkedinIn />
            LinkedIn
          </a>

        </div>

        <div className="mt-16 border-t border-white/5 pt-8">

          <p className="text-sm text-white/30">
            BCA • Frontend Development • React.js
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/15">
            Shahjahanpur, Uttar Pradesh, India
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;