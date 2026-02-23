import React from "react";
import Link from "next/link";

const BRAND = "LUXPROPAGENCY";
const COMPANY = "Luxpropagency s.r.o.";
const ICO = "23862530";
const REGISTERED_OFFICE =
  "Lindleyova 2822/10, Dejvice, 160 00 Praha 6, Czech Republic";
const DATABOX_ID = "fsxrwquq";
const EMAIL = "ninakusakina@luxpropagency.com";
const PHONE = "+420 774 079 513";

export default async function LegalPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang || "en";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/images/hero-water.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.45))",
          padding: "70px 22px 60px",
        }}
      >
        <main style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* BACK */}
          <div style={{ marginBottom: 34 }}>
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
                padding: "10px 16px",
                borderRadius: 999,
                backdropFilter: "blur(10px)",
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              ← Back
            </Link>
          </div>

          {/* HEADER */}
          <h1
            style={{
              fontSize: 48,
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            Professional Disclosure
          </h1>

          <p style={{ opacity: 0.85, marginBottom: 42 }}>
            Corporate identity & regulatory disclosure
          </p>

          <Section title="Company Details">
            <ul>
              <li>Business name: {COMPANY}</li>
              <li>Brand: {BRAND}</li>
              <li>Registered office: {REGISTERED_OFFICE}</li>
              <li>Company ID (IČO): {ICO}</li>
              <li>Data box ID: {DATABOX_ID}</li>
              <li>Email: {EMAIL}</li>
              <li>Phone: {PHONE}</li>
            </ul>
          </Section>

          <Section title="Management">
            <p>
              The company is wholly owned and managed by its statutory director
              (jednatel), Nina Kusakina — Private Real Estate & Family Office Advisor.
            </p>

            <span style={{ opacity: 0.7, fontSize: 13 }}>
              Licensed Real Estate Intermediary · Czech Republic
            </span>
          </Section>

          <Section title="Professional Qualification">
            <p>
              The director holds an official Czech professional qualification
              for real estate intermediation:
            </p>

            <p>
              Real Estate Intermediary (66-042-M) — Certificate issued in Prague on
              23.04.2025.
            </p>
          </Section>

          <Section title="Scope of Services">
            <p>
              LUXPROPAGENCY provides private real estate advisory and property
              search services, including sourcing opportunities, market
              research, coordination of viewings, negotiation assistance and
              cooperation with external professionals (lawyers, notaries,
              architects, banks).
            </p>

            <p>
              LUXPROPAGENCY does not provide legal or tax services. Any legal or
              financial matters must be handled by licensed professionals.
            </p>

            <p>
              Property information, visuals, floor plans and prices are provided
              by third parties and may change without notice. Accuracy is not
              guaranteed.
            </p>
          </Section>

          <Section title="Privacy">
            <p>
              Personal data provided via email or contact forms is used solely
              to respond to inquiries and manage communication.
            </p>

            <p>
              Data is never sold. Limited information may be shared with
              professional partners only when necessary to fulfill client
              requests.
            </p>

            <p>
              You may request access, correction or deletion of your data by
              contacting {EMAIL}.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              This website may use essential cookies for functionality. Optional
              analytics cookies depend on browser settings.
            </p>
          </Section>

        </main>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginTop: 34 }}>
      <h2
        style={{
          fontSize: 14,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: 12,
          opacity: 0.85,
        }}
      >
        {title}
      </h2>

      <div style={{ opacity: 0.9, lineHeight: 1.7 }}>{children}</div>

      <div
        style={{
          marginTop: 22,
          height: 1,
          background: "rgba(255,255,255,0.18)",
        }}
      />
    </section>
  );
}