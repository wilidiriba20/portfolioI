import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ onDevMode }) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-4 shrink-0">
          <div className="w-11 h-11 rounded-2xl bg-white text-gray-900 flex items-center justify-center font-bold text-sm shadow-lg">
            WD
          </div>
          <div className="hidden sm:block">
            <h2 className="text-xl font-bold text-white">
              Wili <span className="text-gray-400">Diriba</span>
            </h2>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center ml-auto gap-12">
          <nav>
            <ul className="flex items-center gap-10">
              {NAV_LINKS.map((link) => {
                const current = active === link.href.substring(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`text-sm font-medium transition-all duration-300 ${
                        current
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            onClick={onDevMode}
            className="rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl"
          >
            Developer Mode
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="ml-auto lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <nav className="px-8 py-6">
            <ul className="space-y-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block text-lg font-medium text-gray-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                closeMenu();
                onDevMode();
              }}
              className="mt-8 w-full rounded-full bg-white py-3 text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100"
            >
              Developer Mode
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
