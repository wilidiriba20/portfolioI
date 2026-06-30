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
  return (
    <div style={{ color: "white", background: "black", height: "100vh" }}>
      Developer Mode Working
      <button onClick={onExit}>Exit</button>
    </div>
  );
}

