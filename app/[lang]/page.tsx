import Link from "next/link";
import Image from "next/image";

export default async function HomePage({
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
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/hero-water.jpg"
          alt="Water luxury background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        {/* overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,18,28,0.55) 0%, rgba(10,18,28,0.35) 45%, rgba(10,18,28,0.65) 100%)",
          }}
        />
      </div>

      {/* Top bar */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "26px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ color: "rgba(255,255,255,0.92)" }}>
          <div style={{ fontWeight: 700, letterSpacing: 1.4, marginLeft: 0 }}>
            LUXPROPAGENCY
          </div>
          <div style={{ fontSize: 12, opacity: 0.85, marginTop: 6 }}>
            Private Real Estate & Family Office Advisory
          </div>
        </div>

        <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link
            href={`/${lang}/about`}
            style={{
              color: "rgba(255,255,255,0.92)",
              textDecoration: "none",
              fontSize: 13,
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            About
          </Link>

          <Link
            href={`/${lang}/services`}
            style={{
              color: "rgba(255,255,255,0.92)",
              textDecoration: "none",
              fontSize: 13,
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            Services
          </Link>

          <Link
            href={`/${lang}/geography`}
            style={{
              color: "rgba(255,255,255,0.92)",
              textDecoration: "none",
              fontSize: 13,
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            Geography
          </Link>

          {/* ВАЖНО: проверь, как у тебя реально называется папка: contact или contacts */}
          <Link
            href={`/${lang}/contacts`}
            style={{
              color: "rgba(255,255,255,0.92)",
              textDecoration: "none",
              fontSize: 13,
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Center hero text */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "90px 64px 110px",
          display: "flex",
          alignItems: "center",
          minHeight: "calc(100vh - 92px)",
        }}
      >
        <div style={{ maxWidth: 760 }}>
          <h1
            style={{
              fontSize: "64px",
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: "0.06em",
              color: "rgba(255,255,255,0.96)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            LUXPROPAGENCY
          </h1>

          <div
            style={{
              marginTop: 18,
              fontSize: 17,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.82)",
              maxWidth: 560,
              letterSpacing: "0.02em",
            }}
          >
            Private Real Estate & Family Office Advisory
            <br />
            Where capital meets real assets — discreetly.
          </div>

          <div
            style={{
              marginTop: 28,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:ninakusakina@luxpropagency.com?subject=Private%20property%20shortlist%20request"
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
              REQUEST A SHORTLIST
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
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}