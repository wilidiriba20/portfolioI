import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "MiniDARMAS System",
    image: "assets/minidarms.png",
    year: "2024",
    description:
      "A secure role-based desktop system using a 3-tier architecture with ADO.NET and SQL Server.",
    tags: ["C#", ".NET", "SQL Server", "ADO.NET"],
    githubUrl: "https://github.com/wilidiriba20/MiniDARMAS",
  },
  {
    title: "UniMart E-Commerce",
    image: "assets/unimart.png",
    year: "2024",
    description:
      "A full-stack e-commerce platform with authentication, PostgreSQL, and responsive UI.",
    tags: ["Django", "JavaScript", "PostgreSQL"],
    githubUrl: "https://github.com/wilidiriba20/unimart",
  },
  {
    title: "Food Recipes System",
    image: "assets/food.png",
    year: "2023",
    description:
      "Recipe discovery platform with APIs, authentication, and favorites management.",
    tags: ["Flask", "Python", "SQLite"],
    githubUrl: "https://github.com/wilidiriba20/Final-project",
  },
  {
    title: "TimeLock Extension",
    image: "assets/timelock.png",
    year: "2023",
    description:
      "Chrome extension for blocking distracting websites and managing focus sessions.",
    tags: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/wilidiriba20/timelocker_chrome_extention",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeader title="Projects" subtitle="Some of my recent work" />

        {/* Responsive Grid Layout */}
        <div className="mt-12 grid grid-cols-1 min-[550px]:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group
                flex
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-slate-200/80
                bg-white
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:shadow-xl
              "
            >
              {/* Project Image - Reduced from h-48 to h-40 for a better aspect ratio */}
              <div className="h-40 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col p-4">
                {/* Year */}
                <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">
                  {project.year}
                </p>

                {/* Title */}
                <h3 className="mt-1 text-base font-bold text-slate-900 tracking-tight">
                  {project.title}
                </h3>

                {/* Description - Removed flex-1 spacer so height remains compact */}
                <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-3">
                  {project.description}
                </p>

                {/* Spacer pushes tech stack and buttons to bottom evenly across cards */}
                <div className="mt-4 flex-1" />

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-lg
                        bg-indigo-50/70
                        px-2.5
                        py-1
                        text-[11px]
                        font-medium
                        text-indigo-700
                        transition
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-4 h-px bg-slate-100" />

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex flex-1 items-center justify-center gap-1.5
                      rounded-xl
                      border border-slate-200
                      py-2.5
                      text-xs
                      font-medium
                      text-slate-600
                      transition
                      hover:bg-slate-50
                      hover:text-slate-900
                    "
                  >
                    <FaGithub className="text-sm" />
                    Code
                  </a>

                
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
