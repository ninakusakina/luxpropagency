
// app/[lang]/contacts/page.tsx
import Link from "next/link";

export default async function ContactsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang || "en";

  const EMAIL = "ninakusakina@luxpropagency.com";
  const PHONE = "+420774079513";
  const PHONE_LABEL = "+420 774 079 513";

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Private consultation request"
  )}`;

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
            transform: "scale(1.04)",
          }}
        />

        {/* Dark overlay (darker) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,18,28,0.75) 0%, rgba(10,18,28,0.85) 40%, rgba(10,18,28,0.92) 100%)",
          }}
        />
      </div>

      <main
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          padding: "28px 24px 90px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Top nav: Back / Next */}
        <div
          style={{
            width: "100%",
            maxWidth: 1100,
            marginBottom: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
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
              whiteSpace: "nowrap",
            }}
          >
            Next →
          </Link>
        </div>

        {/* Header */}
        <div
          style={{
            width: "100%",
            maxWidth: 980,
            textAlign: "center",
            padding: "24px 10px 0",
          }}
        >
          <h1
            style={{
              fontSize: 56,
              margin: 0,
              lineHeight: 1.05,
              color: "rgba(255,255,255,0.96)",
              textShadow: "0 10px 40px rgba(0,0,0,0.35)",
              fontWeight: 650,
              textTransform: "none",
            }}
          >
            Contact
          </h1>

          <p
            style={{
              marginTop: 12,
              marginBottom: 28,
              opacity: 0.86,
              fontWeight: 300,
              color: "rgba(255,255,255,0.88)",
            }}
          >
         Private Real Estate &amp; Family Office Advisory
          </p>

          {/* Card */}
          <div
            style={{
              margin: "0 auto",
              maxWidth: 720,
              padding: "28px 26px",
              borderRadius: 26,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 18px 60px rgba(0,0,0,0.28)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "grid",
                gap: 18,
                fontSize: 17,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.90)",
                justifyItems: "center",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div className="label">Email</div>
                <a className="softLink" href={mailto}>
                  {EMAIL}
                </a>
              </div>

              <div style={{ textAlign: "center" }}>
                <div className="label">Phone</div>
                <a className="softLink" href={`tel:${PHONE}`}>
                  {PHONE_LABEL}
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .label{
            opacity: 0.75;
            font-size: 12px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 6px;
          }
          .softLink {
            color: rgba(255, 255, 255, 0.92);
            text-decoration: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.22);
            padding-bottom: 2px;
            display: inline-block;
          }
          .softLink:hover {
            border-bottom-color: rgba(255, 255, 255, 0.55);
            color: rgba(255, 255, 255, 0.98);
          }
        `}</style>
      </main>
    </div>
  );
}
