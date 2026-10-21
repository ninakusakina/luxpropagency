
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LUXPROPAGENCY | New Website",
  description: "Private Real Estate Advisory & Curated Properties.",
};

export default function NewWebsitePage() {
  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100dvh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        background: "#0b1420",
      }}
    >
      <iframe
        src="/new-site/index.html"
        title="LUXPROPAGENCY New Website"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </main>
  );
}
