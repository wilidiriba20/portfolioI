import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiCplusplus,
  SiMongodb,
  SiFlask,
  SiTailwindcss,
  SiDotnet,
} from "react-icons/si";
import { FaCss3, FaWindows } from "react-icons/fa";
import { TbApi, TbBrandCSharp } from "react-icons/tb";

// ==========================================
// ICON CONFIGURATION & MAP
// ==========================================
const ICON_MAP = {
  python: SiPython,
  javascript: SiJavascript,
  csharp: TbBrandCSharp,
  cplusplus: SiCplusplus,
  c: SiCplusplus,
  react: SiReact,
  tailwind: SiTailwindcss,
  django: SiDjango,
  flask: SiFlask,
  dotnet: SiDotnet,
  winforms: FaWindows,
  postgresql: SiPostgresql,
  mysql: SiPostgresql,
  sqlserver: TbApi,
  sqlite: SiPostgresql,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
  api: TbApi,
  html: SiHtml5,
  css: FaCss3,
};

// ==========================================
// DATA DATA MODEL
// ==========================================
const SKILLS_LIST = [
  { name: "Python", icon: "python" },
  { name: "JavaScript", icon: "javascript" },
  { name: "C#", icon: "csharp" },
  { name: "C++", icon: "cplusplus" },
  { name: "React.js", icon: "react" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Django", icon: "django" },
  { name: "Flask", icon: "flask" },
  { name: ".NET", icon: "dotnet" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MySQL", icon: "mysql" },
  { name: "SQL Server", icon: "sqlserver" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "REST APIs", icon: "api" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
];

// ==========================================
// SUB-COMPONENT: COMPACT SKILL CARD
// ==========================================
function SkillCard({ skill }) {
  const Icon = ICON_MAP[skill.icon] || SiJavascript;

  return (
    <div
      className="
        group flex items-center gap-2.5 shrink-0
        px-4 py-2 rounded-xl
        border border-white/5 bg-white/[0.02] backdrop-blur-sm
        transition-all duration-300 ease-out
        hover:border-indigo-500/30 hover:bg-white/[0.04]
        hover:-translate-y-0.5 hover:scale-[1.01]
      "
    >
      <div
        className="
          flex items-center justify-center w-8 h-8 rounded-lg
          border border-indigo-500/10 bg-indigo-500/5
          transition-all duration-300 ease-out
          group-hover:border-indigo-500/20 group-hover:bg-indigo-500/10
        "
      >
        <Icon className="text-sm text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300" />
      </div>

      <span className="text-slate-300 text-sm font-medium whitespace-nowrap tracking-wide transition-colors duration-300 group-hover:text-white">
        {skill.name}
      </span>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT (SMALL & COMPACT SECTION)
// ==========================================
export default function SkillsSlider() {
  return (
    <section
      id="skills"
      className="relative py-10 overflow-hidden bg-[#030712]"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Compact Header Section */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-1">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-xs md:text-sm">
            The tools and frameworks I use to build production-grade software.
          </p>
        </div>

        {/* Small Marquee Container with Mask Fades */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Edge Linear Fades */}
          <div className="absolute left-0 top-0 bottom-0 z-20 w-16 md:w-32 bg-gradient-to-r from-[#030712] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 z-20 w-16 md:w-32 bg-gradient-to-l from-[#030712] to-transparent pointer-events-none" />

          {/* Scrolling Element */}
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 65, // Increased duration for an elegant slow-motion crawl
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...SKILLS_LIST, ...SKILLS_LIST].map((skill, index) => (
              <SkillCard key={`${skill.name}-${index}`} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
