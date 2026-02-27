// app/[lang]/legal/page.tsx
import Link from "next/link";
import React from "react";

const BRAND = "LUXPROPAGENCY";
const COMPANY = "Luxpropagency s.r.o.";
const ICO = "23862530";
const REGISTERED_OFFICE = "Lindleyova 2822/10, 160 00 Prague 6, Czech Republic";
const DATABOX_ID = "fsxrwquq";
const EMAIL = "ninakusakina@luxpropagency.com";
const PHONE_LABEL = "+420 774 079 513";
const NEXT_PATH = "cookies"; // next page slug

export default async function LegalPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang || "en";

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section style={{ marginTop: 34 }}>
      <h2
        style={{
          fontSize: 14,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight: 600,
          margin: "0 0 14px",
          color: "rgba(255,255,255,0.92)",
          opacity: 0.92,
        }}
      >
        {title}
      </h2>
      <div style={{ opacity: 0.9, lineHeight: 1.8, fontSize: 15 }}>{children}</div>
      <div
        style={{
          marginTop: 22,
          height: 1,
          background: "rgba(255,255,255,0.14)",
        }}
      />
    </section>
  );

  const Item = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      <span style={{ opacity: 0.7 }}>{label}</span>
      <span style={{ opacity: 0.95 }}>{value}</span>
    </div>
  );

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
            transform: "scale(1.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,18,28,0.78) 0%, rgba(10,18,28,0.86) 40%, rgba(10,18,28,0.92) 100%)",
          }}
        />
      </div>

      <main
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          padding: "28px 24px 110px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: 980 }}>
          {/* Top navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 22,
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
              href={`/${lang}/${NEXT_PATH}`}
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
              Next →
            </Link>
          </div>

          {/* Intro zone */}
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 34px" }}>
            <h1
              style={{
                margin: 0,
                fontSize: 44,
                lineHeight: 1.12,
                fontWeight: 600,
                letterSpacing: "-0.4px",
                color: "rgba(255,255,255,0.96)",
                textShadow: "0 10px 40px rgba(0,0,0,0.35)",
              }}
            >
              Legal Notice
            </h1>
            <p style={{ margin: "12px 0 0", lineHeight: 1.7, color: "#ffffff"}}>
              Corporate identity, regulatory disclosure and legal terms.
            </p>
          </div>

          {/* Main glass panel */}
          <div
            style={{
              margin: "0 auto",
              maxWidth: 920,
              padding: "30px 28px",
              borderRadius: 26,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 18px 60px rgba(0,0,0,0.28)",
              textAlign: "left",
              color: "#ffffff",
            
            }}
          >
            <Section title="1. Corporate Information">
              <div style={{ display: "grid", gap: 10 }}>
                <Item label="Business name:" value={COMPANY} />
                <Item label="Brand name:" value={BRAND} />
                <Item label="Registered office:" value={REGISTERED_OFFICE} />
                <Item label="Company ID (IČO):" value={ICO} />
                <Item label="Data box ID:" value={DATABOX_ID} />
              </div>

              <p style={{ marginTop: 18 }}>
                Registered in the Commercial Register maintained by the Municipal Court in Prague,
                Section C.
              </p>

              <p style={{ marginTop: 12 }}>
                {COMPANY} is incorporated under the laws of the Czech Republic.
              </p>

              <p style={{ marginTop: 14, marginBottom: 0 }}>
                <span style={{ opacity: 0.75 }}>Contact:</span>
                <br />
                <a className="softLink" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
                <br />
                <a className="softLink" href="tel:+420774079513">
                  {PHONE_LABEL}
                </a>
              </p>
            </Section>

            <Section title="2. Regulatory Status">
              <p>
                {COMPANY} is authorized to conduct the regulated trade “Real Estate Intermediation”
                (Realitní zprostředkování) under Czech law.
              </p>

              <p>
                The statutory director (jednatel), Nina Kusakina, fulfills the qualification
                requirements pursuant to Act No. 39/2020 Coll., on Real Estate Intermediation.
              </p>

              <p style={{ marginBottom: 0 }}>
                <span style={{ opacity: 0.78 }}>Professional qualification:</span>
                <br />
                Real Estate Intermediary (66-042-M), Certificate issued in Prague on 23 April 2025.
              </p>
            </Section>

            <Section title="3. Nature of Services">
              <p>{COMPANY} provides private real estate advisory and intermediation services.</p>

              <p style={{ marginTop: 14, marginBottom: 10, opacity: 0.85 }}>
                The company’s activities include:
              </p>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>
                <li>identification and sourcing of real estate opportunities</li>
                <li>introduction of clients to property owners, developers and professional advisors</li>
                <li>coordination of communication between relevant parties</li>
                <li>assistance in negotiation processes</li>
                <li>strategic coordination related to property acquisitions and dispositions</li>
              </ul>

              <p style={{ marginTop: 16 }}>
                The company acts exclusively as an independent intermediary and strategic coordinator.
              </p>

              <p style={{ marginTop: 14, marginBottom: 10, opacity: 0.85 }}>
                The company does not provide:
              </p>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>
                <li>legal services</li>
                <li>tax advisory services</li>
                <li>accounting services</li>
                <li>investment services within the meaning of financial market regulations</li>
                <li>portfolio or asset management</li>
                <li>fiduciary or trustee services</li>
                <li>escrow, custody or depositary services</li>
              </ul>

              <p style={{ marginTop: 16 }}>
                The company does not hold, manage or control client funds.
              </p>

              <p style={{ marginTop: 14, marginBottom: 0 }}>
                All legal, tax, financial and regulatory matters must be addressed exclusively by
                licensed third-party professionals engaged directly by the client.
              </p>
            </Section>

            <Section title="4. Contractual Position">
              <p>
                {COMPANY} is not a contracting party to any real estate transaction unless expressly
                agreed in writing.
              </p>

              <p style={{ marginTop: 14, marginBottom: 10, opacity: 0.85 }}>
                No content on this website constitutes:
              </p>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>
                <li>a binding offer,</li>
                <li>an offer to conclude a contract within the meaning of Section 1732 of the Czech Civil Code, or</li>
                <li>a legally enforceable representation.</li>
              </ul>

              <p style={{ marginTop: 16 }}>
                Property descriptions, visuals, plans, availability and pricing are provided by third
                parties and may be amended without prior notice.
              </p>

              <p style={{ marginTop: 12 }}>
                While reasonable care is exercised, accuracy, completeness and current validity of such
                information cannot be guaranteed.
              </p>

              <p style={{ marginTop: 12, marginBottom: 0 }}>
                Clients are solely responsible for conducting independent legal, tax and financial due
                diligence before entering into any transaction.
              </p>
            </Section>

            <Section title="5. Limitation of Liability">
              <p style={{ marginBottom: 10 }}>
                To the fullest extent permitted by applicable law, {COMPANY} shall not be liable for:
              </p>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>
                <li>decisions made by clients,</li>
                <li>advice provided by third-party professionals,</li>
                <li>inaccuracies in third-party property information,</li>
                <li>regulatory or tax changes,</li>
                <li>market conditions or economic developments,</li>
                <li>indirect or consequential damages.</li>
              </ul>

              <p style={{ marginTop: 16, marginBottom: 0 }}>
                The company’s responsibility is strictly limited to its role as intermediary.
              </p>
            </Section>

            <Section title="6. Confidentiality">
              <p>
                Information exchanged with clients in the course of advisory activities is treated as
                confidential.
              </p>

              <p style={{ marginTop: 12 }}>
                However, confidentiality does not create fiduciary, trustee or asset management
                obligations.
              </p>

              <p style={{ marginTop: 12, marginBottom: 0 }}>
                Information may be disclosed where required by law or where necessary to fulfill a
                client’s request involving third-party professionals.
              </p>
            </Section>

            <Section title="7. Governing Law and Jurisdiction">
              <p>
                This website and any non-contractual obligations arising out of or in connection with it
                shall be governed by the laws of the Czech Republic.
              </p>

              <p style={{ marginTop: 12, marginBottom: 0 }}>
                Any disputes arising in connection with this website shall fall within the exclusive
                jurisdiction of the competent courts of the Czech Republic, unless otherwise agreed in
                writing.
              </p>
            </Section>

            <Section title="8. Privacy Notice">
              <p>
                {COMPANY}, IČO {ICO}, acts as data controller in accordance with Regulation (EU)
                2016/679 (GDPR) and applicable Czech data protection laws.
              </p>

              <h3 style={{ marginTop: 18, marginBottom: 8, fontSize: 15, fontWeight: 600, opacity: 0.95 }}>
                8.1 Purpose of Processing
              </h3>
              <p style={{ marginTop: 0 }}>
                Personal data provided via email, contact forms or other communication channels is processed
                solely for:
              </p>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>
                <li>responding to inquiries</li>
                <li>establishing and maintaining professional communication</li>
                <li>pre-contractual measures</li>
                <li>contractual performance where applicable</li>
              </ul>

              <h3 style={{ marginTop: 18, marginBottom: 8, fontSize: 15, fontWeight: 600, opacity: 0.95 }}>
                8.2 Legal Basis
              </h3>
              <p style={{ marginTop: 0 }}>
                Processing is based on:
              </p>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>
                <li>legitimate interest,</li>
                <li>pre-contractual necessity,</li>
                <li>contractual necessity, or</li>
                <li>consent where required.</li>
              </ul>

              <h3 style={{ marginTop: 18, marginBottom: 8, fontSize: 15, fontWeight: 600, opacity: 0.95 }}>
                8.3 Data Sharing
              </h3>
              <p style={{ marginTop: 0 }}>
                Personal data is not sold.
              </p>
              <p style={{ marginTop: 10 }}>
                Data may be shared with trusted professional partners only where necessary to fulfill client
                requests and subject to confidentiality obligations.
              </p>

              <h3 style={{ marginTop: 18, marginBottom: 8, fontSize: 15, fontWeight: 600, opacity: 0.95 }}>
                8.4 Data Retention
              </h3>
              <p style={{ marginTop: 0 }}>
                Personal data is retained only for the period necessary to fulfill the purpose of processing
                or comply with legal obligations.
              </p>

              <h3 style={{ marginTop: 18, marginBottom: 8, fontSize: 15, fontWeight: 600, opacity: 0.95 }}>
                8.5 Data Subject Rights
              </h3>
              <p style={{ marginTop: 0 }}>
                Data subjects have the right to:
              </p>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>
                <li>access their data</li>
                <li>request correction or deletion</li>
                <li>restrict processing</li>
                <li>object to processing</li>
                <li>request data portability</li>
                <li>withdraw consent where applicable</li>
              </ul>

              <p style={{ marginTop: 14 }}>
                Data subjects have the right to lodge a complaint with the Czech Data Protection Authority
                (Úřad pro ochranu osobních údajů – ÚOOÚ).
              </p>

              <p style={{ marginTop: 14, marginBottom: 0 }}>
                Requests may be addressed to:
                <br />
                <a className="softLink" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </p>
            </Section>

            <p style={{ marginTop: 24, opacity: 0.65, fontSize: 12 }}>
              © {new Date().getFullYear()} {BRAND} · {COMPANY}
            </p>
          </div>

          <style>{`
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
        </div>
      </main>
    </div>
  );
}
