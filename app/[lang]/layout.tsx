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
          paddingBottom: 96, // чуть больше, чтобы точно не наезжало
        }}
      >
        {children}
      </main>

      {/* footer: тот же фон, без "чужой плашки" */}
      <footer
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          padding: "12px 16px",
          pointerEvents: "auto",
        }}
      >
        {/* Этот слой делает фон футера единым с общим фоном */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 72,
            background: "trasparent", 
            
            WebkitBackdropFilter: "blur(10px)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            fontSize: 12,
            color: "rgba(255,255,255,0.92)",
            opacity: 0.80,
            letterSpacing: 0.2,
            textAlign: "center",
            lineHeight: 1.35,
            maxWidth: 1100,

            // ключевое: чтобы не "вылазило" и красиво переносилось
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span>
            © {year} <span style={{ fontWeight: 600 }}>LUXPROPAGENCY</span> · Luxpropagency s.r.o. · IČO 23862530 ·
            Lindleyova 2822/10, Dejvice, 160 00 Praha 6, Czech Republic
          </span>

          <span style={{ opacity: 0.75 }}>·</span>

          <Link
            href={`/${lang}/legal`}
            style={{
              color: "rgba(255,255,255,0.92)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.28)",
              paddingBottom: 1,
            }}
          >
            Legal Notice
          </Link>

          <span style={{ opacity: 0.75 }}>·</span>

          <Link
            href={`/${lang}/cookies`}
            style={{
              color: "rgba(255,255,255,0.92)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.28)",
              paddingBottom: 1,
            }}
          >
            Cookie Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}