import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import StyleStore from "./img/StyleStore.jpeg";
import Employe from "./img/Employe.jpeg";
import Food from "./img/Food.jpeg";
import Cineverse from "./img/Cineverse.jpeg";
const projects = [
  {
    number: "01",
    title: "StyleStore-Shop",
    description:
      "Modern e-commerce interface with product browsing, product details, cart functionality and responsive UI.",
    image: StyleStore,
    live: "https://style-store-shop.vercel.app",
    github: "https://github.com/ramjigupta18/StyleStore-Shop",
    tags: ["React", "Tailwind CSS", "API", "Context API"],
    type: "ECOMMERCE",
  },

  {
    number: "02",
    title: "Employee Management System",
    description:
      "Frontend application for managing employee information with a clean dashboard-style interface.",
      image: Employe,
    live: "https://employe-management-lake.vercel.app",
    github: "https://github.com/ramjigupta18/employe-management",
    tags: ["React", "Tailwind CSS", "LocalStorage"],
    type: "MANAGEMENT",
  },

  {
    number: "03",
    title: "Grocify Store",
    description:
      "Responsive food ordering style website with reusable components and interactive cart functionality.",
      image: Food,
    live: "https://grocify-store-one.vercel.app",
    github: "https://github.com/ramjigupta18/Grocify-Store",
    tags: ["React", "Tailwind CSS", "Props", "State"],
    type: "FOOD",
  },

  {
    number: "04",
    title: "Cineverse",
    description:
      "Movie search application focused on API integration, search functionality and responsive movie cards.",
      image: Cineverse,
    live: "https://cineverse-six-gamma.vercel.app",
    github: "https://github.com/ramjigupta18/cineverse",
    tags: ["React", "JavaScript", "REST API"],
    type: "MOVIES",
  },
];

function Projects() {
  return (
    <section id="projects" className="border-b border-white/5 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#b8ff00]">
              03 — Selected Work
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-6xl">
              Things I've
              <br />
              <span className="text-white/30">built.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/40">
            A selection of projects where I applied React, JavaScript, Tailwind
            CSS, APIs and responsive design.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.number}
              className="project-card overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]"
            >
              {/* Project Image */}

              <div className="relative h-64 overflow-hidden border-b border-white/10 bg-[#0a0a0a]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-white/30">
                    No Image Available
                  </div>
                )}

                <div className="absolute left-6 top-6 rounded-full border border-[#b8ff00]/30 bg-black/70 px-4 py-2 text-xs font-bold tracking-[0.2em] text-[#b8ff00] backdrop-blur-md">
                  PROJECT {project.number}
                </div>
              </div>

              {/* Content */}

              <div className="p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-black">{project.title}</h3>

                    <p className="mt-4 text-sm leading-7 text-white/40">
                      {project.description}
                    </p>
                  </div>

                  <span className="text-sm font-bold text-[#b8ff00]">
                    {project.number}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold transition hover:border-[#b8ff00]/40 hover:text-[#b8ff00]"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-2 rounded-full bg-[#b8ff00] px-5 py-3 text-sm font-bold text-black transition hover:scale-105"
                  >
                    Live Demo
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
