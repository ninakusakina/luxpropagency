// app/[lang]/cookies/page.tsx
import Link from "next/link";
import React from "react";

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang || "en";

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section style={{ marginTop: 34 }}>
      <h2
        style={{
          fontSize: 14,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight: 600,
          margin: "0 0 14px",
          color: "rgba(255,255,255,0.92)",
          opacity: 0.92,
        }}
      >
        {title}
      </h2>
      <div style={{ opacity: 0.9, lineHeight: 1.8, fontSize: 15 }}>{children}</div>
      <div
        style={{
          marginTop: 22,
          height: 1,
          background: "rgba(255,255,255,0.14)",
        }}
      />
    </section>
  );

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="/images/hero-water.jpg"
          alt="Water luxury background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(2px) saturate(1.05)",
            transform: "scale(1.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,18,28,0.78) 0%, rgba(10,18,28,0.86) 40%, rgba(10,18,28,0.92) 100%)",
          }}
        />
      </div>

      <main
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          padding: "28px 24px 110px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: 980 }}>
          {/* Top navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 22,
            }}
          >
            <Link
              href={`/${lang}/legal`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                color: "rgba(255,255,255,0.88)",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.08)",
                padding: "10px 14px",
                borderRadius: 999,
                backdropFilter: "blur(10px)",
              }}
            >
              ← Back
            </Link>

            <Link
              href={`/${lang}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                color: "rgba(255,255,255,0.88)",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.08)",
                padding: "10px 14px",
                borderRadius: 999,
                backdropFilter: "blur(10px)",
              }}
            >
              Next →
            </Link>
          </div>

          {/* Intro */}
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 34px" }}>
            <h1
              style={{
                margin: 0,
                fontSize: 44,
                lineHeight: 1.12,
                fontWeight: 600,
                letterSpacing: "-0.4px",
                color: "rgba(255,255,255,0.96)",
                textShadow: "0 10px 40px rgba(0,0,0,0.35)",
              }}
            >
              Cookies Policy
            </h1>
            <p style={{ margin: "12px 0 0", lineHeight: 1.7, color: "#ffffff" }}>
              How cookies are used on this website.
            </p>
          </div>

          {/* Glass panel */}
          <div
            style={{
              margin: "0 auto",
              maxWidth: 920,
              padding: "30px 28px",
              borderRadius: 26,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 18px 60px rgba(0,0,0,0.28)",
              textAlign: "left",
              color:"#ffffff",
            }}
          >
            <Section title="1. General Information">
              <p>
                This website uses cookies in accordance with applicable European Union and Czech
                legislation.
              </p>
              <p style={{ marginTop: 12, marginBottom: 0 }}>
                Cookies are small text files stored on a user’s device when visiting a website.
              </p>
            </Section>

            <Section title="2. Essential Cookies">
              <p style={{ marginBottom: 0 }}>
                Essential cookies are necessary for the proper functioning and security of the
                website.
              </p>
              <p style={{ marginTop: 12, marginBottom: 0 }}>
                These cookies do not require user consent.
              </p>
            </Section>

            <Section title="3. Non-Essential Cookies">
              <p style={{ marginBottom: 0 }}>
                Analytical or performance cookies may be used only on the basis of the user’s
                explicit consent.
              </p>
              <p style={{ marginTop: 12, marginBottom: 0 }}>
                Such cookies are used to improve website functionality and user experience.
              </p>
              <p style={{ marginTop: 12, marginBottom: 0 }}>
                Consent may be withdrawn at any time.
              </p>
            </Section>

            <Section title="4. Managing Cookies">
              <p style={{ marginBottom: 10 }}>Users may manage cookie preferences through:</p>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>
                <li>the website’s cookie preference mechanism (if implemented), or</li>
                <li>their browser settings.</li>
              </ul>
              <p style={{ marginTop: 14, marginBottom: 0 }}>
                Disabling certain cookies may affect website functionality.
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}
