import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import SectionHeader from "./SectionHeader";
import { profile } from "../data/portfolio";

const CONTACT_LINKS = [
  {
    href: profile.github,
    label: "GitHub Profile",
    Icon: FaGithub,
  },
  {
    href: profile.linkedin,
    label: "LinkedIn Profile",
    Icon: FaLinkedinIn,
  },
  {
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
    label: profile.email,
    Icon: HiOutlineMail,
  },
  {
    href: profile.instagram,
    label: "Instagram",
    Icon: FaInstagram,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        "service_38d83db",
        "template_x7zt1mv",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "kiAABr9LTxfH00nlz",
      );

      setStatus("ok");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      // Clear the "Success" state after 5 seconds so they can message again
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
  console.log("Status:", error.status);
  console.log("Text:", error.text);
  console.log(error);

  setStatus("err");

    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-white px-6 py-5 transition-colors duration-300"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label="Get In Touch"
          title="Let's build something meaningful"
          description="Share your project details or opportunity. I typically respond within 24–48 hours."
        />

        <div className="mt-16 grid gap-12 md:grid-cols-12 items-start">
          {/* Left Side */}
          <div className="space-y-6 md:col-span-5">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Contact Directory
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                Open to full-time roles, freelance collaborations, and technical
                partnerships.
              </p>
            </div>

            <ul className="space-y-1">
              {CONTACT_LINKS.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex items-center gap-3 rounded-xl py-2.5 text-sm text-zinc-600 transition duration-200 hover:text-[#5143ee]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-50 text-zinc-500 transition duration-200 group-hover:bg-[#5143ee]/10 group-hover:text-[#5143ee]">
                      <Icon size={15} />
                    </span>

                    <span className="break-all font-medium">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 md:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-bold uppercase tracking-wider text-zinc-400"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => {
                    if (status === "err") setStatus(null);
                    setForm({ ...form, name: e.target.value });
                  }}
                  required
                  className="w-full rounded-xl bg-zinc-50 px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 focus:bg-zinc-100/70 focus:outline-none focus:ring-2 focus:ring-[#5143ee]/10"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-bold uppercase tracking-wider text-zinc-400"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => {
                    if (status === "err") setStatus(null);
                    setForm({ ...form, email: e.target.value });
                  }}
                  required
                  className="w-full rounded-xl bg-zinc-50 px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 focus:bg-zinc-100/70 focus:outline-none focus:ring-2 focus:ring-[#5143ee]/10"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-bold uppercase tracking-wider text-zinc-400"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={(e) => {
                  if (status === "err") setStatus(null);
                  setForm({ ...form, message: e.target.value });
                }}
                required
                className="w-full resize-none rounded-xl bg-zinc-50 px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 focus:bg-zinc-100/70 focus:outline-none focus:ring-2 focus:ring-[#5143ee]/10"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#5143ee] px-8 py-3 text-sm font-medium text-white shadow-md shadow-[#5143ee]/10 transition-all hover:bg-[#5143ee]/90 disabled:opacity-60 sm:w-auto"
            >
              {loading
                ? "Sending..."
                : status === "ok"
                  ? "Message Sent ✓"
                  : "Send Message"}
            </button>

            {status === "ok" && (
              <p className="text-sm font-medium text-emerald-600">
                Thank you! Your message has been sent successfully.
              </p>
            )}

            {status === "err" && (
              <p className="text-sm font-medium text-red-500">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
