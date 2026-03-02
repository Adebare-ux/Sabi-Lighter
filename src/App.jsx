import { useState, useEffect, useRef } from "react";
import { features, steps, useCases } from "./data";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Inter','Segoe UI',sans-serif",
        background: "#080c12",
        color: "#f0f4ff",
        overflowX: "hidden",
      }}
    >
      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 40px",
          background: scrolled ? "rgba(8,12,18,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,140,255,0.15)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <span
          style={{
            fontSize: "20px",
            fontWeight: 800,
            letterSpacing: "0.04em",
            color: "#fff",
          }}
        >
          SABI <span style={{ color: "#0084ff" }}>LIGHTER</span>
        </span>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          {[
            {
              href: "https://www.facebook.com/share/1DUavAFSQf/?mibextid=wwXIfr",
              label: "Facebook",
            },
            {
              href: "https://www.tiktok.com/@sabi.lighter?_r=1&_t=ZS-93L28gNbyrw",
              label: "TikTok",
            },
            { href: "https://wa.me/message/SULENUJBBE57P1", label: "WhatsApp" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "13px",
                color: "#aac4ff",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="https://wa.me/message/SULENUJBBE57P1"
            style={{
              background: "linear-gradient(135deg,#0062cc,#0099ff)",
              color: "#fff",
              padding: "9px 20px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "120px 24px 80px",
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(0,100,255,0.15) 0%, transparent 70%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(0,130,255,0.06)",
            filter: "blur(80px)",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }}
        />
        <Reveal>
          <div
            style={{
              display: "inline-block",
              background: "rgba(0,130,255,0.12)",
              border: "1px solid rgba(0,130,255,0.3)",
              borderRadius: "100px",
              padding: "6px 18px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#5ab4ff",
              letterSpacing: "0.1em",
              marginBottom: "24px",
              textTransform: "uppercase",
            }}
          >
            ⚡ Electric Arc Technology
          </div>
          <h1
            style={{
              fontSize: "clamp(42px,7vw,80px)",
              fontWeight: 900,
              lineHeight: 1.08,
              margin: "0 0 24px",
              letterSpacing: "-0.02em",
            }}
          >
            Smart Power.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#0084ff,#00c6ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              In Your Hand.
            </span>
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#8ba8d4",
              maxWidth: "500px",
              margin: "0 auto 40px",
              lineHeight: 1.6,
            }}
          >
            Flameless. Rechargeable. Built for every moment — rain or shine.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/message/SULENUJBBE57P1"
              style={{
                background: "linear-gradient(135deg,#0062cc,#0099ff)",
                color: "#fff",
                padding: "15px 36px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 0 30px rgba(0,140,255,0.45)",
              }}
            >
              Get Yours Now
            </a>
            <a
              href="https://www.tiktok.com/@sabi.lighter?_r=1&_t=ZS-93L28gNbyrw"
              style={{
                background: "transparent",
                color: "#aac4ff",
                padding: "15px 36px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid rgba(0,130,255,0.3)",
              }}
            >
              Watch Demo →
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ marginTop: "70px", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "200px",
                height: "60px",
                background:
                  "radial-gradient(ellipse,rgba(0,130,255,0.45) 0%,transparent 70%)",
                filter: "blur(10px)",
              }}
            />
            <img
              src="/lighter.png"
              alt="Sabi Lighter"
              style={{
                height: "240px",
                filter:
                  "drop-shadow(0 0 40px rgba(0,140,255,0.6)) drop-shadow(0 0 80px rgba(0,100,255,0.3))",
                position: "relative",
              }}
            />
          </div>
        </Reveal>
      </section>

      {/* TRUST BAR */}
      <Reveal>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "24px 40px",
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px,6vw,80px)",
            flexWrap: "wrap",
          }}
        >
          {[
            "100% Flameless",
            "USB-C Ready",
            "Fast Delivery",
            "Wind Resistant",
          ].map((t) => (
            <span
              key={t}
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#6a90c4",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              ✓ {t}
            </span>
          ))}
        </div>
      </Reveal>

      {/* FEATURES */}
      <section style={{ padding: "100px 24px" }}>
        <Reveal>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(28px,4vw,42px)",
              fontWeight: 800,
              marginBottom: "12px",
            }}
          >
            Why Choose <span style={{ color: "#0084ff" }}>Sabi Lighter?</span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#6a90c4",
              marginBottom: "60px",
            }}
          >
            Engineered for reliability. Designed for everyday life.
          </p>
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {features.map(({ icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(0,130,255,0.15)",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  height: "100%",
                }}
              >
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>
                  {icon}
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    marginBottom: "10px",
                    color: "#d8eaff",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#607a9e",
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{
          padding: "100px 24px",
          background:
            "linear-gradient(180deg,rgba(0,60,140,0.08) 0%,transparent 100%)",
          borderTop: "1px solid rgba(0,130,255,0.08)",
        }}
      >
        <Reveal>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(28px,4vw,42px)",
              fontWeight: 800,
              marginBottom: "12px",
            }}
          >
            How It Works
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#6a90c4",
              marginBottom: "64px",
            }}
          >
            Three simple steps to perfect ignition.
          </p>
        </Reveal>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {steps.map(({ src, label, title, desc }, i) => (
            <div
              key={title}
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
              <Reveal delay={i * 0.15}>
                <div style={{ textAlign: "center", maxWidth: "200px" }}>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#0084ff",
                      letterSpacing: "0.15em",
                      marginBottom: "16px",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      background: "rgba(0,130,255,0.06)",
                      border: "1px solid rgba(0,130,255,0.2)",
                      borderRadius: "20px",
                      padding: "24px",
                      marginBottom: "16px",
                    }}
                  >
                    <img
                      src={src}
                      alt={title}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#607a9e",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <div
                  style={{
                    color: "#0084ff",
                    fontSize: "28px",
                    opacity: 0.4,
                    marginBottom: "40px",
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section style={{ padding: "100px 24px" }}>
        <Reveal>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(28px,4vw,42px)",
              fontWeight: 800,
              marginBottom: "12px",
            }}
          >
            Sabi Lighter <span style={{ color: "#0084ff" }}>In Action</span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#6a90c4",
              marginBottom: "60px",
            }}
          >
            From the kitchen to the campsite — always ready.
          </p>
        </Reveal>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {useCases.map(({ src, label }, i) => (
            <Reveal key={label} delay={i * 0.1}>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(0,130,255,0.12)",
                  borderRadius: "20px",
                  padding: "28px 32px",
                  textAlign: "center",
                }}
              >
                <img
                  src={src}
                  alt={label}
                  style={{
                    width: "130px",
                    height: "130px",
                    objectFit: "contain",
                  }}
                />
                <p
                  style={{
                    marginTop: "16px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#8ab0e0",
                  }}
                >
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Reveal>
        <section
          style={{
            margin: "0 24px 80px",
            borderRadius: "24px",
            background:
              "linear-gradient(135deg,#003d99 0%,#0066cc 50%,#0099cc 100%)",
            padding: "80px 40px",
            textAlign: "center",
            boxShadow: "0 0 80px rgba(0,100,255,0.3)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.05)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              left: "-40px",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.1)",
            }}
          />
          <div style={{ position: "relative" }}>
            <h2
              style={{
                fontSize: "clamp(26px,4vw,46px)",
                fontWeight: 900,
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              Ready to Upgrade Your Flame?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "16px",
                marginBottom: "36px",
              }}
            >
              Smart · Safe · Rechargeable · Built to Last
            </p>
            <a
              href="https://wa.me/message/SULENUJBBE57P1"
              style={{
                display: "inline-block",
                background: "#fff",
                color: "#003d99",
                padding: "16px 44px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
              }}
            >
              Order on WhatsApp →
            </a>
          </div>
        </section>
      </Reveal>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px 24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          color: "#3a5580",
          fontSize: "13px",
        }}
      >
        <p
          style={{
            marginBottom: "16px",
            fontWeight: 700,
            fontSize: "15px",
            color: "#6a90c4",
          }}
        >
          SABI <span style={{ color: "#0084ff" }}>LIGHTER</span>
        </p>
        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          {[
            {
              href: "https://www.facebook.com/share/1DUavAFSQf/?mibextid=wwXIfr",
              label: "Facebook",
            },
            { href: "https://www.tiktok.com/@sabi.lighter", label: "TikTok" },
            { href: "https://wa.me/message/SULENUJBBE57P1", label: "WhatsApp" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              style={{ color: "#3a5580", textDecoration: "none" }}
            >
              {label}
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Sabi Lighter. All rights reserved.</p>
      </footer>
    </div>
  );
}
