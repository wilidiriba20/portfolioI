import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { profile } from "../data/portfolio";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <footer className="relative z-10 border-t border-zinc-800/60 bg-[#101727]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-400 md:flex-row md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#5143ee]"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#5143ee]"
          >
            LinkedIn
          </a>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#5143ee]"
          >
            Email
          </a>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#5143ee] text-white shadow-lg shadow-[#5143ee]/20 transition-all duration-200 hover:bg-[#5143ee]/90 active:scale-95"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={14} />
        </button>
      )}
    </footer>
  );
}
