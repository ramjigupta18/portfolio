import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiRedux,
  SiReactrouter,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "React.js",
    icon: <FaReact />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux />,
  },
  {
    name: "React Router",
    icon: <SiReactrouter />,
  },
  {
    name: "VS Code",
    icon: <FaCode />,
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#b8ff00] uppercase tracking-[4px] text-sm font-semibold mb-3">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technologies I <span className="text-[#b8ff00]">Work With</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, responsive and
            user-friendly web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white/[0.04] border border-white/10 rounded-2xl p-6
              flex flex-col items-center justify-center gap-4
              hover:border-[#b8ff00]/50
              hover:bg-[#b8ff00]/5
              hover:-translate-y-2
              transition-all duration-300"
            >
              <div
                className="text-4xl text-gray-300
                group-hover:text-[#b8ff00]
                transition-colors duration-300"
              >
                {skill.icon}
              </div>

              <h3 className="text-white font-medium text-sm">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="grid md:grid-cols-4 gap-5 mt-8">

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#b8ff00]/40 transition">
            <h3 className="text-white font-semibold mb-2">
              Responsive Design
            </h3>
            <p className="text-gray-400 text-sm">
              Mobile-first and responsive layouts for different screen sizes.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#b8ff00]/40 transition">
            <h3 className="text-white font-semibold mb-2">
              REST APIs
            </h3>
            <p className="text-gray-400 text-sm">
              Working with APIs to fetch and display dynamic data.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#b8ff00]/40 transition">
            <h3 className="text-white font-semibold mb-2">
              LocalStorage
            </h3>
            <p className="text-gray-400 text-sm">
              Storing and managing client-side application data.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-[#b8ff00]/40 transition">
            <h3 className="text-white font-semibold mb-2">
              Developer Tools
            </h3>
            <p className="text-gray-400 text-sm">
              VS Code, Git, GitHub and browser developer tools.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;