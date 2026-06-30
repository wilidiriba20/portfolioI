import { useState, useRef, useEffect, useCallback } from "react";
import {
  profile,
  skills,
  projects,
  certifications,
  terminalCommands,
} from "../data/portfolio";

/* ---------------- SAFE FALLBACKS ---------------- */
const safeSkills = Array.isArray(skills) ? skills : [];
const safeProjects = Array.isArray(projects) ? projects : [];
const safeCertifications = Array.isArray(certifications) ? certifications : [];
const safeCommands = Array.isArray(terminalCommands) ? terminalCommands : [];

/* ---------------- BOOT SEQUENCE ---------------- */
const BOOT_LINES = [
  { cls: "text-zinc-500", t: "Wili Diriba Dev Shell [Version 1.0.4]" },
  { cls: "text-zinc-500", t: "Copyright (C) All rights reserved." },
  { cls: "", t: "" },
  {
    cls: "text-zinc-500",
    t: "[SYS] Initializing core developer environment...",
  },
  {
    cls: "text-zinc-400",
    t: "[OK] Loaded portfolio schema variables into session memory.",
  },
  { cls: "", t: "" },
  {
    cls: "text-zinc-100 font-medium",
    t: "Welcome to Wili Diriba's Interactive Terminal Node.",
  },
  {
    cls: "text-zinc-400",
    t: "Type a command, use Tab auto-completion, or click a shortcut badge below.",
  },
  { cls: "", t: "" },
];

/* ---------------- TERMINAL DATA ---------------- */
const TERM_DATA = {
  about: [
    {
      cls: "text-[#5143ee] font-semibold",
      t: "┌── PROFILE ──────────────────────────┐",
    },
    { cls: "text-zinc-200", t: ` │ Name     : ${profile?.name || "N/A"}` },
    { cls: "text-zinc-200", t: ` │ Role     : ${profile?.role || "N/A"}` },
    { cls: "text-zinc-400", t: ` │ Focus    : ${profile?.tagline || "N/A"}` },
    {
      cls: "text-[#5143ee] font-semibold",
      t: "└─────────────────────────────────────┘",
    },
  ],

  skills: [
    {
      cls: "text-[#5143ee] font-semibold",
      t: "┌── TECH STACK ───────────────────────┐",
    },
    ...safeSkills.map((s) => ({
      cls: "text-zinc-200",
      t: ` │ · ${s?.name || "Unknown"}`,
    })),
    {
      cls: "text-[#5143ee] font-semibold",
      t: "└─────────────────────────────────────┘",
    },
  ],

  projects: [
    {
      cls: "text-[#5143ee] font-semibold",
      t: "┌── FEATURED ENGINES ─────────────────┐",
    },
    ...safeProjects.flatMap((p, i) => [
      {
        cls: "text-zinc-100 font-medium",
        t: `  [${i + 1}] ${p?.title || "Untitled"}`,
      },
      {
        cls: "text-zinc-400",
        t: `      ${p?.description || "No description"}`,
      },
      { cls: "", t: "" },
    ]),
    {
      cls: "text-zinc-500",
      t: ` [OK] ${safeProjects.length} modular configurations extracted.`,
    },
  ],

  contact: [
    {
      cls: "text-[#5143ee] font-semibold",
      t: "┌── ROUTING CHANNELS ─────────────────┐",
    },
    { cls: "text-zinc-200", t: ` │ Email    : ${profile?.email || "N/A"}` },
    { cls: "text-zinc-200", t: ` │ GitHub   : ${profile?.github || "N/A"}` },
    { cls: "text-zinc-200", t: ` │ LinkedIn : ${profile?.linkedin || "N/A"}` },
    {
      cls: "text-[#5143ee] font-semibold",
      t: "└─────────────────────────────────────┘",
    },
  ],

  help: [
    {
      cls: "text-[#5143ee] font-semibold",
      t: "┌── OPERATIONAL DICTIONARY ───────────┐",
    },
    { cls: "text-zinc-300", t: "  about      →  Displays designer background" },
    { cls: "text-zinc-300", t: "  skills     →  Prints structural stack" },
    { cls: "text-zinc-300", t: "  projects   →  Iterates functional products" },
    { cls: "text-zinc-300", t: "  contact    →  Exposes directory records" },
    { cls: "text-zinc-300", t: "  clear      →  Flushes current visual logs" },
    { cls: "text-zinc-300", t: "  exit       →  Exit terminal mode" },
  ],

  certifications: [
    {
      cls: "text-[#5143ee] font-semibold",
      t: "┌── CERTIFICATIONS ───────────────────┐",
    },

    ...safeCertifications.flatMap((cert, i) => [
      {
        cls: "text-zinc-100 font-medium",
        t: `  [${i + 1}] ${cert?.title || "Untitled"}`,
      },
      { cls: "text-zinc-400", t: `      ${cert?.institution || "Unknown"}` },
      { cls: "text-zinc-500", t: `      Year: ${cert?.year || "N/A"}` },
      ...(cert?.url
        ? [{ cls: "text-blue-400", t: `      Certificate: ${cert.url}` }]
        : []),
      { cls: "", t: "" },
    ]),

    {
      cls: "text-zinc-500",
      t: ` [OK] ${safeCertifications.length} certifications loaded successfully.`,
    },
    {
      cls: "text-[#5143ee] font-semibold",
      t: "└─────────────────────────────────────┘",
    },
  ],
};

/* ---------------- COMPONENT ---------------- */
export default function DeveloperMode({ onExit }) {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");

  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const booted = useRef(false);

  const scrollBottom = useCallback(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, []);

  /* BOOT SEQUENCE FIXED */
  useEffect(() => {
    if (booted.current) return;
    booted.current = true;

    let i = 0;
    const timer = setInterval(() => {
      if (i >= BOOT_LINES.length) {
        clearInterval(timer);
        return;
      }

      // Safeguard against pushing undefined values into state
      if (BOOT_LINES[i]) {
        setLines((prev) => [...prev, BOOT_LINES[i]]);
      }
      i++;
      scrollBottom();
    }, 40);

    return () => clearInterval(timer);
  }, [scrollBottom]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(scrollBottom, [lines, scrollBottom]);

  /* COMMAND RUNNER */
  const runCommand = (cmd) => {
    const key = (cmd || "").trim().toLowerCase();
    if (!key) return;

    setLines((prev) => [
      ...prev,
      { cls: "text-zinc-500", t: `guest@wili-portfolio:~$ ${cmd.trim()}` },
    ]);

    if (key === "clear") {
      setLines([]);
      return;
    }

    if (key === "exit") {
      onExit?.();
      return;
    }

    if (TERM_DATA[key]) {
      setLines((prev) => [...prev, ...TERM_DATA[key], { cls: "", t: "" }]);
      return;
    }

    setLines((prev) => [
      ...prev,
      {
        cls: "text-rose-400 text-xs my-1",
        t: `❌ Command '${key}' unknown.`,
      },
      { cls: "", t: "" },
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const match = safeCommands.find((c) =>
        c.toLowerCase().startsWith(input.toLowerCase()),
      );
      if (match) setInput(match);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#101727] text-zinc-300 select-none">
      {/* HEADER */}
      <div className="flex items-center gap-3 border-b border-zinc-800/80 bg-[#0b101c] px-5 py-3.5">
        <span className="flex-1 text-center font-mono text-xs text-zinc-500">
          session://guest@wili-portfolio:bash
        </span>

        <button
          onClick={onExit}
          className="px-4 py-1.5 text-xs border border-zinc-800 rounded-xl text-zinc-400 hover:text-white transition-colors"
        >
          Exit Shell
        </button>
      </div>

      {/* BODY */}
      <div
        ref={bodyRef}
        className="flex-1 overflow-y-auto p-6 font-mono text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, i) => (
          <div key={i} className={line.cls}>
            {line.t || "\u00A0"}
          </div>
        ))}

        <div className="flex mt-2">
          <span className="text-[#5143ee] font-semibold">
            guest@wili-portfolio:~$
          </span>

          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-white ml-2"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>

      {/* QUICK BUTTONS */}
      <div className="border-t border-zinc-800 bg-[#0b101c] p-3 flex gap-2 flex-wrap">
        {[
          "help",
          "about",
          "skills",
          "projects",
          "certifications",
          "contact",
          "clear",
        ].map((cmd) => (
          <button
            key={cmd}
            onClick={() => runCommand(cmd)}
            className="px-3 py-1 text-xs border border-zinc-800 rounded-lg text-zinc-400 hover:bg-zinc-800/30 transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
