import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative px-6 py-7 bg-[#101727] overflow-hidden"
    >
      <SectionHeader
        label="Certifications"
        title="Credentials and continuous learning"
        description="Formal training that strengthens my foundation in computer science and modern software development."
      />

      <div className="marquee-wrapper mt-12">
        <div className="marquee-track">
          {[...certifications, ...certifications].map((cert, index) => {
            const Card = cert.url ? "a" : "div";

            return (
              <Card
                key={index}
                {...(cert.url && {
                  href: cert.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className={`cert-card ${!cert.url ? "disabled" : ""}`}
              >
                <div className="img-box">
                  <img src={cert.image} alt={cert.title} />
                </div>

                <div className="content">
                  <span className="badge">{cert.badge}</span>

                  <h3>{cert.title}</h3>

                  <p>{cert.institution}</p>

                  <div className="bottom">
                    <span>{cert.year}</span>
                    {cert.url && <FaExternalLinkAlt className="icon" />}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <style>{`
        /* OUTER CONTAINER */
        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
          padding: 10px 0;
        }

        /* MOVING TRACK */
        .marquee-track {
          display: flex;
          gap: 18px;
          width: max-content;
          animation: scroll 35s linear infinite;
        }

        /* PAUSE ON HOVER */
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* CARD */
        .cert-card {
          width: 260px;
          flex-shrink: 0;
          border-radius: 16px;
          background: #161f32;
          border: 1px solid rgba(63, 63, 70, 0.4);
          text-decoration: none;
          overflow: hidden;
          transition: all 0.3s ease;
          display: block;
        }

        .cert-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
          border-color: #5143ee;
        }

        /* DISABLED CARD */
        .cert-card.disabled {
          cursor: default;
        }

        .cert-card.disabled:hover {
          transform: none;
          box-shadow: none;
          border-color: rgba(63, 63, 70, 0.4);
        }

        /* IMAGE */
        .img-box {
          height: 140px;
          overflow: hidden;
          background: #0f1422;
          border-bottom: 1px solid rgba(63, 63, 70, 0.3);
        }

        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .cert-card:hover img {
          transform: scale(1.05);
        }

        .cert-card.disabled:hover img {
          transform: none;
        }

        /* CONTENT */
        .content {
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .badge {
          font-size: 10px;
          font-weight: 600;
          background: rgba(81, 67, 238, 0.15);
          color: #7065f0;
          padding: 3px 8px;
          border-radius: 6px;
          width: fit-content;
        }

        h3 {
          font-size: 14px;
          font-weight: 600;
          margin: 0;
          color: #f4f4f5;
          line-height: 1.4;
        }

        p {
          font-size: 12px;
          color: #a1a1aa;
          margin: 0;
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 8px;
          font-size: 12px;
          font-weight: 500;
          color: #7065f0;
        }

        .icon {
          font-size: 11px;
          color: #71717a;
          transition: color 0.2s;
        }

        .cert-card:hover .icon {
          color: #7065f0;
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .cert-card {
            width: 230px;
          }
        }
      `}</style>
    </section>
  );
}
