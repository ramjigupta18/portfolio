import {
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative border-b border-white/5 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#b8ff00]">
              01 — About Me
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              Turning ideas
              <br />
              into <span className="text-[#b8ff00]">interfaces.</span>
            </h2>
          </div>

          <div>

            <p className="text-lg leading-9 text-white/60">
              I'm Ram Ji Gupta, a BCA student and aspiring Frontend
              Developer who enjoys creating clean, modern and
              responsive websites.
            </p>

            <p className="mt-6 text-lg leading-9 text-white/40">
              My main focus is React.js, JavaScript, HTML, CSS and
              Tailwind CSS. I learn by building practical projects
              and continuously improving my development skills.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <FaCode className="text-2xl text-[#b8ff00]" />

                <h3 className="mt-5 font-bold">
                  Clean Code
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  Structured and maintainable frontend code.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <FaLaptopCode className="text-2xl text-[#b8ff00]" />

                <h3 className="mt-5 font-bold">
                  Responsive UI
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  Interfaces that work across screen sizes.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <FaRocket className="text-2xl text-[#b8ff00]" />

                <h3 className="mt-5 font-bold">
                  Continuous Learning
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  Always learning new technologies and practices.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;