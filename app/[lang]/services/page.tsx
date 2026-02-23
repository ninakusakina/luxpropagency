// app/[lang]/services/page.tsx
import Link from "next/link";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang || "en";

  const services = [
    {
      title: "Private Real Estate Advisory",
      subtitle:
        "Discreet sourcing and buyer-side representation for residential and investment property across Europe.",
      points: [
        "Off-market property search",
        "Buyer representation",
        "Strategic shortlisting",
        "Negotiation coordination",
        "Due diligence process management",
        "Closing coordination",
      ],
    },
    {
      title: "Family Office Coordination",
      subtitle:
        "Structured coordination of trusted partners across property, banking and cross-border matters.",
      points: [
        "Introductions to legal counsel and notaries",
        "Fiduciary and structuring partners",
        "Banking introductions",
        "Account opening coordination",
        "Financing support",
        "Cross-border alignment",
      ],
    },
    {
      title: "Relocation & Lifestyle Integration",
      subtitle:
        "Support beyond acquisition — ensuring seamless transitions across jurisdictions.",
      points: [
        "Relocation advisory",
        "Local onboarding support",
        "Education and private network introductions",
        "Trusted local service providers",
        "Discreet concierge coordination",
      ],
    },
    {
      title: "Transaction Oversight",
      subtitle: "Single point coordination across the full acquisition lifecycle.",
      points: [
        "Process timeline management",
        "Communication flow alignment",
        "Document coordination",
        "Multi-party oversight",
        "Discretion control",
      ],
    },
    {
      title: "Strategic Advisory",
      subtitle: "Clarity around decisions — not asset management.",
      points: [
        "Hold versus exit considerations",
        "Jurisdictional implications",
        "Long-term residence strategy",
        "Capital allocation context",
      ],
    },
    {
      title: "Private Network & Access",
      subtitle:
        "Curated introductions across capital, property and professional networks.",
      points: [
        "Investor and family office connections",
        "Banking & fiduciary introductions",
        "Legal and tax advisory referrals",
        "Local market access",
        "Off-market intelligence",
      ],
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("/images/hero-water.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(1.05)",
          transform: "scale(1.02)",
          zIndex: 0,
        }}
      />
      {/* Dark overlay (a bit darker, like About) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(1200px 800px at 50% 30%, rgba(0,0,0,0.35), rgba(0,0,0,0.72))",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "64px 24px 56px",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: 56,
            margin: 0,
            letterSpacing: 0.5,
            lineHeight: 1.05,
          }}
        >
          Services
        </h1>

        <p
          style={{
            maxWidth: 720,
            marginTop: 14,
            marginBottom: 32,
            opacity: 0.85,
            fontWeight: 300,
            lineHeight: 1.6,
          }}
        >
          Private advisory across property, family office coordination and lifestyle —
          delivered with discretion, clarity and precision.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                padding: 32,
                borderRadius: 24,
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 18px 60px rgba(0,0,0,0.30)",
                display: "flex",
                flexDirection: "column",
                minHeight: 360,
              }}
            >
              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 500,
                  margin: 0,
                  lineHeight: 1.2,
                  minHeight: 62,
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                {s.title}
              </h2>

              <p
                style={{
                  fontWeight: 300,
                  opacity: 0.85,
                  marginTop: 10,
                  marginBottom: 0,
                  lineHeight: 1.6,
                  minHeight: 72,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                }}
              >
                {s.subtitle}
              </p>

              <ul
                style={{
                  marginTop: 18,
                  marginBottom: 0,
                  paddingLeft: 18,
                  lineHeight: 1.85,
                  opacity: 0.9,
                }}
              >
                {s.points.map((p) => (
                  <li key={p} style={{ marginBottom: 6 }}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom buttons (same as homepage / about) */}
        <div
          style={{
            marginTop: 52,
            display: "flex",
            justifyContent: "center",
            gap: 12,
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
            href={`/${lang}/geography`}
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
            Geography
          </Link>
        </div>

        {/* Optional: back to home */}
        <div style={{ marginTop: 18, textAlign: "center", opacity: 0.75 }}>
          <Link href={`/${lang}`} style={{ color: "white", textDecoration: "none" }}>
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
}