import {
  FaCode,
  FaMobileAlt,
  FaLightbulb,
  FaGraduationCap,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaCode />,
    title: "Strong Frontend Foundation",
    text: "Comfortable with HTML, CSS, JavaScript, React and modern UI development.",
  },

  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    text: "I focus on creating interfaces that work smoothly across desktop, tablet and mobile.",
  },

  {
    icon: <FaLightbulb />,
    title: "Problem Solving",
    text: "I enjoy breaking problems into smaller pieces and finding practical solutions.",
  },

  {
    icon: <FaGraduationCap />,
    title: "Fast Learner",
    text: "As a BCA student, I continuously learn new tools and improve through projects.",
  },
];

function WhyHireMe() {
  return (
    <section className="border-b border-white/5 py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#b8ff00]">
              05 — Why Me
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              Why hire
              <br />
              <span className="text-[#b8ff00]">
                me?
              </span>
            </h2>

            <p className="mt-7 max-w-md leading-8 text-white/40">
              I'm looking for an opportunity where I can contribute,
              learn from experienced developers and grow as a
              professional frontend developer.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#b8ff00]/30"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b8ff00]/10 text-xl text-[#b8ff00] transition group-hover:bg-[#b8ff00] group-hover:text-black">
                  {reason.icon}
                </div>

                <span className="mt-7 block text-xs font-bold text-white/20">
                  0{index + 1}
                </span>

                <h3 className="mt-2 text-xl font-bold">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  {reason.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyHireMe;