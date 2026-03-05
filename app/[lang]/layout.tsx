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

  const linkStyle: React.CSSProperties = {
    color: "rgba(255,255,255,0.92)",
    textDecoration: "none",
    borderBottom: "1px solid rgba(255,255,255,0.22)",
    paddingBottom: 1,
  };

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
             "linear-gradient(180deg, rgba(10,18,28,0.75) 0%, rgba(10,18,28,0.85) 40%, rgba(10,18,28,0.95) 100%)",
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
          paddingBottom: 40, // чтобы контент не залезал под футер
        }}
      >
        {children}
      </main>

      {/* footer: прозрачный контейнер, плашка ТОЛЬКО под текстом */}
      <footer
        style={{
          position: "fixed",
          marginTop: 60,
          left: 0,
          right: 0,
          bottom: 8,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          padding: "0 16px",
          background: "transparent", // важно: НЕТ full-width полосы
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            pointerEvents: "auto",
            fontSize: 11,
            color: "rgba(255,255,255,0.65)",
            letterSpacing: 0.12,
            lineHeight: 1.25,
            fontWeight: 400,
            textAlign: "center",

            display: "inline-flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            alignItems: "center",

            padding: "8px 12px",
            borderRadius: 999,

            // тёмная плашка, без “синей полосы” и без белой линии
            background:
              "linear-gradient(180deg, rgba(10,18,28,0.00) 0%, rgba(10,18,28,0.70) 35%, rgba(10,18,28,0.88) 100%)",
            // УБИРАЕМ blur — он часто даёт этот голубой tint из-за body-фона
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            border: "none",
            boxShadow: "none",
          }}
        >
          <span>
            © {year} <span style={{ fontWeight: 600 }}>LUXPROPAGENCY</span> · Luxpropagency s.r.o. · IČO 23862530 ·
            Lindleyova 2822/10, Dejvice, 160 00 Praha 6, Czech Republic
          </span>

          <span style={{ opacity: 0.75 }}>·</span>

          <Link href={`/${lang}/legal`} style={linkStyle}>
            Legal Notice
          </Link>

          <span style={{ opacity: 0.75 }}>·</span>

          <Link href={`/${lang}/cookies`} style={linkStyle}>
            Cookie Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}