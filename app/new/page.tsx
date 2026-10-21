import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LUXPROPAGENCY | Private Real Estate Advisory — New Version",
  description:
    "A considered approach to real estate, tailored to you. Explore the new LUXPROPAGENCY website experience.",
};

export default function NewWebsitePage() {
  return (
    <main className="newWebsiteFrame">
      <iframe
        src="/new-site/index.html"
        title="LUXPROPAGENCY — new website version"
        loading="eager"
        allow="clipboard-read; clipboard-write"
      />
      <style jsx>{`
        .newWebsiteFrame {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100dvh;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #0b1420;
        }
        iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>
    </main>
  );
}
