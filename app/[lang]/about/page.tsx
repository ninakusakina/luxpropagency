// app/[lang]/about/page.tsx
import Link from "next/link";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang || "en";

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="/images/hero-water.jpg"
          alt="Water luxury background"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Dark overlay for readability (NOT a text box) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            // чуть темнее, чтобы читалось лучше
            background:
              "radial-gradient(1200px 800px at 50% 30%, rgba(0,0,0,0.35), rgba(0,0,0,0.72))",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <main
          style={{
            minHeight: "100vh",
            padding: "28px 24px 60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Back */}
          <div style={{ width: "100%", maxWidth: 1100, marginBottom: 24 }}>
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
              ← Back
            </Link>
          </div>

          {/* Centered editorial block (no background panel) */}
          <div
            style={{
              width: "100%",
              maxWidth: 980,
              textAlign: "center",
              padding: "40px 10px 0",
            }}
          >
            <div
              style={{
                letterSpacing: 5,
                fontSize: 12,
                opacity: 0.75,
                fontWeight: 700,
                marginBottom: 18,
                color: "rgba(255,255,255,0.85)",
                textTransform: "uppercase",
              }}
            >
              OUR MISSION
            </div>

            <div
              style={{
                fontSize: 44,
                lineHeight: 1.18,
                fontWeight: 400,
                color: "rgba(255,255,255,0.96)",
                textShadow: "0 10px 40px rgba(0,0,0,0.35)",
                marginBottom: 18,
              }}
            >
              We don’t sell property.
              <br />
              We create clarity.
            </div>

            <div
              style={{
                fontSize: 18,
                lineHeight: 1.85,
                fontWeight: 300,
                color: "rgba(255,255,255,0.86)",
                maxWidth: 760,
                margin: "0 auto 34px",
                textShadow: "0 8px 30px rgba(0,0,0,0.35)",
              }}
            >
              <span style={{ fontWeight: 500, color: "rgba(255,255,255,0.92)" }}>
                LUXPROPAGENCY
              </span>{" "}
              is a private real estate and lifestyle advisory operating quietly at the intersection
              of capital, property and personal life.
              <br />
              <br />
              We work with people — not transactions.
              <br />
              With possibilities — not listings.
              <br />
              <br />
              Every engagement begins with listening. Every solution is shaped around your
              objectives.
              <br />
              <br />
              We curate access to off-market opportunities, coordinate trusted legal and banking
              partners, and support complex life transitions — from acquisition to relocation — with
              discretion, precision and care.
              <br />
              <br />
              Our work is relationship-driven, cross-border and deeply personal.
            </div>

            {/* Buttons (same style as homepage) */}
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:ninakusakina@luxpropagency.com?subject=Request%20a%20consultation"
                style={{
                  color: "rgba(255,255,255,0.92)",
                  textDecoration: "none",
                  fontSize: 13,
                  padding: "12px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.35)",
                  background: "transparent",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Request consultation
              </a>

              <Link
                href={`/${lang}/services`}
                style={{
                  color: "rgba(255,255,255,0.92)",
                  textDecoration: "none",
                  fontSize: 13,
                  padding: "12px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.35)",
                  background: "transparent",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Explore services
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}