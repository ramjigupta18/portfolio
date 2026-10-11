import { FaArrowDown, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

function Hero() {
  return (
    <section
      id="home"
      className="grid-bg relative min-h-screen overflow-hidden pt-28"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#b8ff00]/5 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-10">
        {/* LEFT */}

        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#b8ff00]/20 bg-[#b8ff00]/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#b8ff00]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8ff00]">
              Available for opportunities
            </span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Ram Ji
            <br />
            <span className="text-[#b8ff00] text-glow">Gupta.</span>
          </h1>

          <h2 className="mt-8 text-2xl font-bold text-white/90 sm:text-3xl">
            Frontend Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/50 sm:text-lg">
            BCA student and aspiring Frontend Developer focused on building
            modern, responsive and user-friendly web experiences using React and
            Tailwind CSS.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-[#b8ff00] px-7 py-4 font-bold text-black transition hover:scale-105"
            >
              View My Projects
              <FaArrowDown className="rotate-[-90deg] transition group-hover:translate-x-1" />
            </a>
            <a  href="/Ram ji gupta Resume.pdf" download
              className="rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-[#b8ff00]/40 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://github.com/ramjigupta18"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#b8ff00]/40 hover:text-[#b8ff00]"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ram-ji-gupta-aa95b2353/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#b8ff00]/40 hover:text-[#b8ff00]"
            >
              <FaLinkedinIn />
            </a>

            <span className="ml-2 h-px w-16 bg-white/10" />

            <span className="text-xs uppercase tracking-widest text-white/30">
              Shahjahanpur, India
            </span>
          </div>
        </div>

        {/* RIGHT 3D */}

        <div className="relative flex min-h-[450px] items-center justify-center">
          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />

          <div className="cube-container flex items-center justify-center">
            <div className="cube">
              <div className="cube-face front">
                <FaReact className="text-6xl text-[#61dafb]" />
              </div>

              <div className="cube-face back">
                <SiTailwindcss className="text-6xl text-cyan-400" />
              </div>

              <div className="cube-face right">
                <SiJavascript className="text-6xl text-yellow-300" />
              </div>

              <div className="cube-face left">
                <FaGithub className="text-6xl text-white" />
              </div>

              <div className="cube-face top">
                <span className="text-4xl font-black text-[#b8ff00]">
                  &lt;/&gt;
                </span>
              </div>

              <div className="cube-face bottom">
                <span className="text-xl font-black tracking-widest">CODE</span>
              </div>
            </div>
          </div>

          {/* Floating Labels */}

          <div className="float absolute left-2 top-10 rounded-2xl border border-white/10 bg-black/70 px-5 py-4 backdrop-blur-xl">
            <p className="text-xs text-white/40">Stack</p>

            <p className="mt-1 font-bold text-[#b8ff00]">React.js</p>
          </div>

          <div
            className="float absolute bottom-10 right-0 rounded-2xl border border-white/10 bg-black/70 px-5 py-4 backdrop-blur-xl"
            style={{ animationDelay: "1.5s" }}
          >
            <p className="text-xs text-white/40">Styling</p>

            <p className="mt-1 font-bold text-cyan-300">Tailwind CSS</p>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}

      {/* <div className="overflow-hidden border-y border-white/5 py-5">
        <div className="marquee flex w-max items-center gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/20">
                React
              </span>

              <span className="text-[#b8ff00]">✦</span>

              <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/20">
                Tailwind CSS
              </span>

              <span className="text-[#b8ff00]">✦</span>

              <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/20">
                JavaScript
              </span>

              <span className="text-[#b8ff00]">✦</span>

              <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/20">
                Responsive Design
              </span>

              <span className="text-[#b8ff00]">✦</span>
            </div>
          ))}
        </div>
      </div> */}

      
<div className="overflow-hidden border-y border-white/5 py-5">
  <div className="ticker-track flex w-max">
    {Array.from({ length: 6 }).map((_, index) => (
      <div
        key={index}
        className="flex shrink-0 items-center gap-12 pr-12"
      >
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/20">
          React
        </span>
        <span className="text-[#b8ff00]">✦</span>

        <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/20">
          Tailwind CSS
        </span>
        <span className="text-[#b8ff00]">✦</span>

        <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/20">
          JavaScript
        </span>
        <span className="text-[#b8ff00]">✦</span>

        <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/20">
          Responsive Design
        </span>
        <span className="text-[#b8ff00]">✦</span>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}

export default Hero;
