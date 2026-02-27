// app/[lang]/services/page.tsx
import Link from "next/link";
import styles from "./services.module.css";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <main className={styles.page}>
      <div className={styles.bg} />

      {/* Top navigation (как на About) */}
      <div className={styles.topNav}>
        <Link className={styles.topLink} href={`/${lang}/about`}>
          ← Back
        </Link>

        <Link className={styles.topLink} href={`/${lang}/geography`}>
          Next →
        </Link>
      </div>

      {/* Intro */}
      <section className={styles.intro}>
        <h1 className={styles.title}>Services</h1>
        <p className={styles.subtitle}>
          Private advisory across real assets, family office coordination and
          cross-border lifestyle — delivered with discretion.
        </p>
      </section>

      {/* Cards */}
      <section className={styles.grid}>
        <article className={styles.card}>
          <div className={styles.cardHead}>
            <div className={styles.cardTitle}>PRIVATE REAL ESTATE ADVISORY</div>
            <div className={styles.cardText}>
              Discreet buyer-side representation across Europe and selected international markets.
              
            </div>
             <div className={styles.cardText}>
              Every engagement begins with your broader objectives - capital, lifestyle and long-term positioning.
            </div>
            <div className={styles.divider} />
          </div>

          <ul className={styles.list}>
            <li>Off-market &amp; on-market sourcing</li>
            <li>Strategic shortlisting</li>
            <li>Due diligence coordination</li>
          
            <li>Offer preparation &amp; negotiation support</li>
            
            <li>Strategic closing oversight</li>
            <li>Long-term asset positioning</li>
          </ul>
        </article>

        <article className={styles.card}>
          <div className={styles.cardHead}>
            <div className={styles.cardTitle}>
              FAMILY OFFICE COORDINATION
            </div>
            <div className={styles.cardText}>
              Strategic coordination across banking, legal and fiduciary structures.
            
            </div>
            <div className={styles.cardText}>
              Our role is advisory and connective - assembling expertise around each client's objectives.
            </div>
      
            <div className={styles.divider} />
          </div>

          <ul className={styles.list}>
            <li>Private banking introductions</li>
            <li>
              Legal structuring &amp; residency pathways (via licensed partners)
            </li>
            <li>Tax advisory connections</li>
            <li>Cross-border asset alignment</li>
          
            <li>Real assets positioning within broader personal strategies</li>
          </ul>
        </article>

        <article className={styles.card}>
          <div className={styles.cardHead}>
            <div className={styles.cardTitle}>
              RELOCATION &amp; LIFESTYLE INTEGRATION
            </div>
            <div className={styles.cardText}>
              Discreet support beyond acquisition — ensuring seamless
              transitions.
            </div>
            <div className={styles.cardText}>
              We coordinate trusted partners to align property, residency and daily life - with continuity, privacy and long-term stability.
            </div>
            <div className={styles.divider} />
          </div>

          <ul className={styles.list}>
            <li>Relocation coordination</li>
            <li>Local onboarding &amp; settlement</li>
            <li>Education &amp; private network introductions</li>
            <li>Executive travel planning</li>
            <li>Confidential concierge support</li>
            <li>Ongoing local alignment</li>
          
          </ul>
        </article>

        <article className={styles.card}>
          <div className={styles.cardHead}>
            <div className={styles.cardTitle}>TRANSACTION OVERSIGHT</div>
            <div className={styles.cardText}>
              Single-point coordination across the full acquisition lifecycle.
            </div>
            <div className={styles.cardText}>
              We manage complex multi-party transactions with structure, discretion and precision - ensuring continuity from offer to completion.
            </div>
            <div className={styles.divider} />
          </div>

          <ul className={styles.list}>
            <li>Process timeline management</li>
            <li>Multi-party communication alignment</li>
            <li>Documentation flow coordination</li>
            <li>Due diligence coordination (via licensed partners)</li>
            <li>Discretion and privacy control</li>
          </ul>
        </article>

        <article className={styles.card}>
          <div className={styles.cardHead}>
            <div className={styles.cardTitle}>STRATEGIC ADVISORY</div>
            <div className={styles.cardText}>
              Clarity around decisions — not asset management.
            </div>
            <div className={styles.cardText}>
              We support strategic thinking around real estate within boarder personal and capital frameworks.
            </div>
            <div className={styles.divider} />
          </div>

          <ul className={styles.list}>
            <li>Hold versus exit considerations</li>
            <li>Jurisdictional implications</li>
            <li>Long-term residence strategy alignment</li>
            <li>Capital allocation context</li>
            <li>Second-residence planning</li>
          </ul>
        </article>

        <article className={styles.card}>
          <div className={styles.cardHead}>
            <div className={styles.cardTitle}>PRIVATE NETWORK &amp; ACCESS</div>
            <div className={styles.cardText}>
              Curated introductions across capital, property and professional
              networks.
            </div>
            <div className={styles.cardText}>
              We provide access to trusted international ecosystem - enabling discreet connections where traditional channels fall short.
            </div>
            <div className={styles.divider} />
          </div>

          <ul className={styles.list}>
            <li>Investor and family office connections</li>
            <li>Banking &amp; fiduciary introductions</li>
            <li>Legal and tax advisory referrals</li>
            <li>Local market access</li>
            <li>Off-market intelligence</li>
          </ul>
        </article>
      </section>

    
    </main>
  );
}