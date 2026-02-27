
// app/[lang]/layout.tsx
import type { ReactNode } from "react";
import Link from "next/link";

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const year = new Date().getFullYear();
  const { lang } = await params;

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
      {/* overlay (как везде) */}
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

      {/* content */}
      <main
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          paddingBottom: 78, // чтобы футер НЕ наезжал на текст
        }}
      >
        {children}
      </main>

      {/* footer fixed bottom + свой фон */}
      <footer
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          padding: "10px 16px 14px",
          background:
            "linear-gradient(180deg, rgba(10,18,28,0.00) 0%, rgba(10,18,28,0.85) 40%, rgba(10,18,28,0.92) 100%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            fontSize: 12,
            opacity: 0.78,
            color: "rgba(255,255,255,0.92)",
            letterSpacing: 0.2,
            textAlign: "center",
            lineHeight: 1.35,
            whiteSpace: "nowrap",
          }}
        >
          © {year} <span style={{ fontWeight: 600 }}>LUXPROPAGENCY</span> · Luxpropagency s.r.o. · IČO 23862530 ·
          Lindleyova 2822/10, Dejvice, 160 00 Praha 6, Czech Republic
          {" · "}
          <Link
            href={`/${lang}/legal`}
            style={{
              color: "rgba(255,255,255,0.92)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.28)",
              paddingBottom: 1,
              marginLeft: 6,
            }}
          >
            Legal Notice
          </Link>
          {" · "}
          <Link
            href={`/${lang}/cookies`}
            style={{
              color: "rgba(255,255,255,0.92)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.28)",
              paddingBottom: 1,
              marginLeft: 6,
            }}
          >
            Cookie Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
