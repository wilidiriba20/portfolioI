import { useState, useRef, useEffect, useCallback } from "react";
import {
  profile,
  skills,
  projects,
  certifications,
  terminalCommands,
} from "../data/portfolio";
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

const TERM_DATA = {
  about: [
    {
      cls: "text-[#5143ee] font-semibold",
      t: "┌── PROFILE ──────────────────────────┐",
    },
    { cls: "text-zinc-200", t: ` │ Name     : ${profile.name}` },
    { cls: "text-zinc-200", t: ` │ Role     : ${profile.role}` },
    { cls: "text-zinc-400", t: ` │ Focus    : ${profile.tagline}` },
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
    ...skills.map((s) => ({ cls: "text-zinc-200", t: ` │ · ${s.name}` })),
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
    ...projects.flatMap((p, i) => [
      { cls: "text-zinc-100 font-medium", t: `  [${i + 1}] ${p.title}` },
      { cls: "text-zinc-400", t: `      ${p.description}` },
      { cls: "", t: "" },
    ]),
    {
      cls: "text-zinc-500",
      t: ` [OK] ${projects.length} modular configurations extracted.`,
    },
  ],
  contact: [
    {
      cls: "text-[#5143ee] font-semibold",
      t: "┌── ROUTING CHANNELS ─────────────────┐",
    },
    { cls: "text-zinc-200", t: ` │ Email    : ${profile.email}` },
    { cls: "text-zinc-200", t: ` │ GitHub   : ${profile.github}` },
    { cls: "text-zinc-200", t: ` │ LinkedIn : ${profile.linkedin}` },
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
    {
      cls: "text-zinc-300",
      t: "  exit       →  Terminals output back to window",
    },
  ],
  certifications: [
    {
      cls: "text-[#5143ee] font-semibold",
      t: "┌── CERTIFICATIONS ───────────────────┐",
    },

    ...certifications.flatMap((cert, i) => [
      {
        cls: "text-zinc-100 font-medium",
        t: `  [${i + 1}] ${cert.title}`,
      },
      {
        cls: "text-zinc-400",
        t: `      ${cert.institution}`,
      },
      {
        cls: "text-zinc-500",
        t: `      Year: ${cert.year}`,
      },
      ...(cert.url
        ? [
            {
              cls: "text-blue-400",
              t: `      Certificate: ${cert.url}`,
            },
          ]
        : []),
      { cls: "", t: "" },
    ]),

    {
      cls: "text-zinc-500",
      t: ` [OK] ${certifications.length} certifications loaded successfully.`,
    },

    {
      cls: "text-[#5143ee] font-semibold",
      t: "└─────────────────────────────────────┘",
    },
  ],
};

export default function DeveloperMode({ onExit }) {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const booted = useRef(false);

  const scrollBottom = useCallback(() => {
    if (bodyRef.current)
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, []);

  useEffect(() => {
    if (booted.current) return;
    booted.current = true;
    let i = 0;
    const timer = setInterval(() => {
      if (i >= BOOT_LINES.length) {
        clearInterval(timer);
        return;
      }
      setLines((prev) => [...prev, BOOT_LINES[i]]);
      i++;
      scrollBottom();
    }, 40);
    return () => clearInterval(timer);
  }, [scrollBottom]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(scrollBottom, [lines, scrollBottom]);

  const runCommand = (cmd) => {
    const key = cmd.trim().toLowerCase();
    if (!key) return;

    setLines((prev) => [
      ...prev,
      { cls: "text-zinc-500", t: `guest@wili-portfolio:~$ ${key}` },
    ]);

    if (key === "clear") {
      setLines([]);
      return;
    }
    if (key === "exit") {
      onExit();
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
        t: `❌ Command '${key}' unknown. Click one of the guide pills below for prompt assistance.`,
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
      const match = terminalCommands.find((c) =>
        c.startsWith(input.toLowerCase()),
      );
      if (match) setInput(match);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#101727] text-zinc-300 select-none">
      {/* WINDOW BAR */}
      <div className="flex items-center gap-3 border-b border-zinc-800/80 bg-[#0b101c] px-5 py-3.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-zinc-800" />
          <span className="h-3 w-3 rounded-full bg-zinc-800" />
          <span className="h-3 w-3 rounded-full bg-zinc-800" />
        </div>
        <span className="ml-2 flex-1 text-center font-mono text-xs tracking-wider text-zinc-500">
          session://guest@wili-portfolio:bash
        </span>
        <button
          type="button"
          onClick={onExit}
          className="rounded-xl border border-zinc-800 bg-[#101727] px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:border-zinc-700 transition"
        >
          Exit Shell
        </button>
      </div>

      {/* RENDERED COMMAND FEED */}
      <div
        ref={bodyRef}
        className="flex-1 overflow-y-auto p-6 font-mono text-sm leading-relaxed"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, i) => (
          <div key={i} className={line.cls}>
            {line.t || "\u00A0"}
          </div>
        ))}

        {/* ACTIVE LINE */}
        <div className="flex items-center mt-2">
          <span className="text-[#5143ee] font-semibold">
            guest@wili-portfolio:~$&nbsp;
          </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-zinc-100 outline-none caret-[#5143ee]"
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal input prompt"
          />
        </div>
      </div>

      {/* QUICK ACTIONS ON-SCREEN TOOLBAR */}
      <div className="border-t border-zinc-800/80 bg-[#0b101c] p-4 flex flex-col sm:flex-row items-center gap-3 justify-between">
        <div className="text-xs text-zinc-500 font-mono tracking-wide">
          💡 Quick actions menu: Click a parameter to test right away
        </div>
        <div className="flex flex-wrap gap-2">
          {["help", "about", "skills", "projects","certifications","contact", "clear"].map(
            (cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => {
                  runCommand(cmd);
                  inputRef.current?.focus();
                }}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-zinc-800 bg-[#101727] text-zinc-400 hover:text-white hover:border-[#5143ee]/50 transition duration-150 active:scale-95"
              >
                {cmd}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
