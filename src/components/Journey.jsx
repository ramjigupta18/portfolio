const journey = [
  {
    year: "2024",
    title: "Started BCA",
    description:
      "Started Bachelor of Computer Applications and developed an interest in software development.",
  },

  {
    year: "2025",
    title: "Frontend Development",
    description:
      "Started learning HTML, CSS and JavaScript and began building practical web projects.",
  },

  {
    year: "2026",
    title: "React & Tailwind",
    description:
      "Focused on React.js, Tailwind CSS, APIs, reusable components and modern frontend development.",
  },

  {
    year: "2026",
    title: "Job Preparation",
    description:
      "Building stronger projects, improving problem-solving skills and preparing for frontend developer opportunities.",
  },
];

function Journey() {
  return (
    <section className="border-b border-white/5 py-28">

      <div className="mx-auto max-w-5xl px-6 lg:px-10">

        <div className="mb-16 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#b8ff00]">
            04 — My Journey
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-6xl">
            Learning.
            <br />
            <span className="text-white/30">
              Building.
            </span>
          </h2>

        </div>

        <div className="relative">

          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">

            {journey.map((item, index) => (
              <div
                key={`${item.year}-${index}`}
                className="relative grid md:grid-cols-2"
              >

                <div
                  className={`pl-12 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >

                  <span className="text-sm font-bold text-[#b8ff00]">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/40">
                    {item.description}
                  </p>

                </div>

                <div className="absolute left-[9px] top-1 h-3 w-3 rounded-full border-2 border-[#b8ff00] bg-[#050505] md:left-1/2 md:-translate-x-1/2" />

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Journey;