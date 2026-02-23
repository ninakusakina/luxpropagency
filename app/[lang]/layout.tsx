import type { ReactNode } from "react";
import Link from "next/link";

export default function LangLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url('/images/hero-water.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1200px 700px at 50% 35%, rgba(255,255,255,0.10), rgba(0,0,0,0.55))",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Page content */}
      <main style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
        {children}

        {/* Global legal footer line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 18,
            display: "flex",
            justifyContent: "center",
            padding: "0 16px",
            pointerEvents: "none", // so it doesn't block page UI
          }}
        >
          <div
            style={{
              fontSize: 12,
              opacity: 0.62,
              color: "rgba(255,255,255,0.92)",
              letterSpacing: 0.2,
              textAlign: "center",
              pointerEvents: "auto", // enable clicks on the link
            }}
          >
            © {year}{" "}
            <Link
              href="/en/legal"
              style={{
                color: "rgba(255,255,255,0.92)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.28)",
                paddingBottom: 1,
              }}
            >
              LUXPROPAGENCY · Luxpropagency s.r.o.
            </Link>
            {" · "}
            IČO 23862530 · Lindleyova 2822/10, Dejvice, 160 00 Praha 6, Czech Republic
          </div>
        </div>
      </main>
    </div>
  );
}