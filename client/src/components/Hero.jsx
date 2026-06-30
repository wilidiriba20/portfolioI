import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "../data/portfolio";

const SOCIALS = [
  {
    href: profile.github,
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: profile.linkedin,
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
    label: "Email",
    Icon: HiOutlineMail,
  },
  {
    href: profile.instagram,
    label: "Instagram",
    Icon: FaInstagram,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        paddingTop: "120px",
        paddingBottom: "38px",
        backgroundColor: "#fcfcfc",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        /* DESKTOP */
        @media (min-width: 780px) {
          .mobile-portrait {
            display: none !important;
          }
        }

        /* MOBILE */
        @media (max-width: 779px) {
          .desktop-portrait {
            display: none !important;
          }

          .mobile-center {
            text-align: center;
          }

          .mobile-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }

          .mobile-socials {
            justify-content: center;
          }

          .mobile-title {
            border-left: none !important;
            padding-left: 0 !important;
          }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          gap: "60px",
          maxWidth: "100%",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        {/* LEFT CONTENT */}
        <div
          className="mobile-center"
          style={{
            flex: "1",
            minWidth: "350px",
            maxWidth: "600px",
          }}
        >
          <p
            style={{
              color: "#4f46e5",
              marginBottom: "10px",
              fontSize: "13px",
              fontWeight: "500",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Hello, I'm
          </p>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: "600",
              margin: "0 0 20px 0",
              lineHeight: "0.8",
            }}
          >
            <span style={{ fontFamily: "'Playfair Display', serif" }}>
              Wili
            </span>

            <span
              style={{
                fontFamily: "'Dancing Script', cursive",
                color: "#4f46e5",
                marginLeft: "15px",
              }}
            >
              Diriba
            </span>
          </h1>

          <div
            className="mobile-title"
            style={{
              borderLeft: "3px solid #4f46e5",
              paddingLeft: "12px",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#374151",
                margin: 0,
              }}
            >
              Full Stack Developer
            </h2>
          </div>

          {/* MOBILE IMAGE */}
          <div
            className="mobile-portrait"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "320px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "230px",
                  height: "230px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(79,70,229,0.2), rgba(168,85,247,0.2))",
                  filter: "blur(35px)",
                  top: "30px",
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: "relative",
                  width: "250px",
                  height: "300px",
                  borderRadius: "30px",
                  overflow: "hidden",
                  border: "4px solid white",
                  boxShadow: "0 25px 40px rgba(0,0,0,0.15)",
                  zIndex: 1,
                }}
              >
                <img
                  src="/assets/profile.png"
                  alt={profile.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>

          {/* PARAGRAPH */}
          <p
            style={{
              color: "#6b7280",
              lineHeight: "1.7",
              fontSize: "17px",
              textAlign: "center",
              maxWidth: "600px",
              margin: "20px auto",
            }}
          >
            I'm an Information Systems student and a passionate Full Stack
            Developer. My journey in tech is driven by curiosity, creativity,
            and the desire to build solutions that make a difference.
          </p>

          {/* BUTTONS FOR BOTH MOBILE & DESKTOP */}
          <div
            className="mobile-buttons"
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "30px",
            }}
          >
            <a
              href="#projects"
              style={{
                backgroundColor: "#111827",
                color: "white",
                padding: "14px 32px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              View Projects
            </a>

            <a
              href={profile.cvUrl}
              download="Wili_Diriba_CV.pdf"
              style={{
                border: "2px solid #e5e7eb",
                color: "#111827",
                padding: "14px 32px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Download CV
            </a>
          </div>

          {/* SOCIALS */}
          <div
            className="mobile-socials"
            style={{
              display: "flex",
              gap: "25px",
              justifyContent: "center",
            }}
          >
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  color: "#9ca3af",
                  fontSize: "24px",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#4f46e5";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#9ca3af";
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* DESKTOP PORTRAIT */}
        <div
          className="desktop-portrait"
          style={{
            flex: "0 0 320px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              width: "100%",
              height: "100%",
              border: "2px solid #e5e7eb",
              borderRadius: "20px",
            }}
          />

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "400px",
              boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src="/assets/profile.png"
              alt={profile.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
