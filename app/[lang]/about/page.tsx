import Link from "next/link";
import Image from "next/image";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang || "en";

  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/hero-water.jpg"
          alt="Luxury water background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,18,28,0.75) 0%, rgba(10,18,28,0.85) 40%, rgba(10,18,28,0.92) 100%)",
          }}
        />
      </div>

      {/* TOP NAVIGATION */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "28px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* BACK */}
        <Link
          href={`/${lang}`}
          style={{
            color: "rgba(255,255,255,0.92)",
            textDecoration: "none",
            fontSize: 13,
            padding: "10px 16px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.20)",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
          }}
        >
          ← Back
        </Link>

        {/* NEXT */}
        <Link
          href={`/${lang}/services`}
          style={{
            color: "rgba(255,255,255,0.92)",
            textDecoration: "none",
            fontSize: 13,
            padding: "10px 16px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.20)",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
          }}
        >
          Next →
        </Link>
      </div>

      {/* CONTENT */}
      <section
        style={{
          position: "relative",
          zIndex: 2,
          padding: "90px 64px 110px",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 860, color: "rgba(255,255,255,0.92)" }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              opacity: 0.6,
              marginBottom: 18,
            }}
          >
            OUR MISSION
          </div>

          <h1
            style={{
              fontSize: 44,
              lineHeight: 1.15,
              fontWeight: 280,
              margin: 0,
              color: "rgba(255,255,255,0.92)",
              letterSpacing: "-0,015em",
            }}
          >
            We don’t sell property.
            <br />
            We create clarity.
          </h1>

          <div
            style={{
              marginTop: 36,
              fontSize: 15,
              lineHeight: 1.75,
              opacity: 0.82,
              fontWeight: 300,
              maxWidth: "720px",
              letterSpacing: "0.01em",
              display: "flex",
              flexDirection: "column",
              gap: "26px", 

      
            }}
          >
            LUXPROPAGENCY is a private real estate and lifestyle
            advisory operating quietly at the intersection of capital,
            property and personal life.
            <br />
            <br />
            We work with people — not transactions.
        <br />
            With possibilities — not listings.
            <br />
            <br />
            Every engagement begins with listening. Every solution is shaped
            around your objectives.
            <br />
            <br />
            We curate access to off-market opportunities, coordinate trusted
            legal and banking partners, and support complex life transitions —
            from acquisition to relocation — with discretion, precision and care.
            <br />
            <br />
            Our work is relationship-driven, cross-border and deeply personal.
          </div>
        
        </div>
      </section>
    </main>
  );
}