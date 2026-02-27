import styles from "../services/services.module.css";

export default function GeographyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        color: "white",
        padding: "64px 48px 120px",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="/images/hero-water.jpg"
          alt="Water luxury background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(2px)",
            transform: "scale(1.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,18,28,0.75) 0%, rgba(10,18,28,0.85) 40%, rgba(10,18,28,0.92) 100%)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {/* Top nav (как в Services) */}
        <div className={styles.topNav}>
          <a className={styles.topLink} href="../services">
            ← Back
          </a>

          <a className={styles.topLink} href="../contacts">
            Next →
          </a>
        </div>

        {/* Header centered */}
        <div style={{ textAlign: "center", maxWidth: 980, margin: "0 auto" }}>
          <h1
            className={styles.title}
            style={{
              margin: "0 0 18px",
              // на всякий: если где-то перебивает — оставляем визуально как Services
              fontWeight: 600,
            }}
          >
            Geography
          </h1>

          <h2
            className={styles.subtitle}
            style={{
              margin: "0 0 16px",
              textAlign: "center",
              fontWeight: 400, 
              lineHeight: 1.9,
            }}
          >
            Strategic Jurisdictions &amp; Core European Markets
          </h2>

          <p className={styles.intro} style={{ margin: "0 0 24px", textAlign:"center",maxWidth: 820, marginLeft: "auto", marginRight:"auto", }}>
            Private advisory across financial centers, investment markets and prime lifestyle
            destinations — aligned with residency, capital structuring and long-term asset
            positioning.
          </p>
        </div>

        {/* Cards: 3 in a row (как Services) */}
        <div
          className={styles.grid}
          data-geo-grid
          style={{
            marginTop: 56,
            // services.grid уже задаёт 3 колонки + stretch, но оставляем твоё marginTop
          }}
        >
          {/* Card 1 */}
          <div
            className={styles.card}
            style={{
              borderRadius: 28, // оставляем твою форму
              minHeight: 520,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <div
                className={styles.cardTitle}
                style={{
                  // чтобы не было слишком “маленько”: можно чуть крупнее, но в стиле Services
                  fontSize: 14,
                  margin: 0,
                }}
              >
                Tax-Optimized Jurisdictions
              </div>

              <div className={styles.disclaimer} style={{ marginTop: 10 }}>
                For residency &amp; capital structuring
              </div>
            </div>

            <div className={styles.cardText} style={{ marginTop: 18, flex: 1 }}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Switzerland</li>
                <li>Monaco</li>
                <li>Italy</li>
                <li>Portugal</li>
                <li>Cyprus</li>
                <li>Greece</li>
                <li>Hungary</li>
              </ul>

              <div className={styles.divider} style={{ marginTop: 18, marginBottom: 18 }} />

              <div className={styles.cardTitle} style={{ fontSize: 13 }}>
                Relevant for:
              </div>

              <div className={styles.cardText} style={{ marginTop: 10 }}>
                <div>→ tax residency planning</div>
                <div>→ corporate and holding structures</div>
                <div>→ cross-border liquidity management</div>
                <div>→ asset protection planning</div>
                <div>→ long-term capital positioning</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={styles.card}
            style={{
              borderRadius: 28,
              minHeight: 520,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <div className={styles.cardTitle} style={{ fontSize: 14, margin: 0 }}>
                Investment Core Markets
              </div>

              <div className={styles.disclaimer} style={{ marginTop: 10 }}>
                Long-term capital allocation
              </div>
            </div>

            <div className={styles.cardText} style={{ marginTop: 18, flex: 1 }}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Germany</li>
                <li>Spain</li>
                <li>Portugal</li>
                <li>Great Britain</li>
                <li>Switzerland</li>
                <li>Czech Republic</li>
                <li>Poland</li>
              </ul>

              <div className={styles.divider} style={{ marginTop: 18, marginBottom: 18 }} />

              <div className={styles.cardTitle} style={{ fontSize: 13 }}>
                Focused on:
              </div>

              <div className={styles.cardText} style={{ marginTop: 10 }}>
                <div>→ income-producing real estate</div>
                <div>→ logistics and data-driven infrastructure</div>
                <div>→ prime commerial assets</div>
                <div>→ residential supply-constrained markets</div>
                <div>→ long-duration yield strategies</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={styles.card}
            style={{
              borderRadius: 28,
              minHeight: 520,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <div className={styles.cardTitle} style={{ fontSize: 14, margin: 0 }}>
                Lifestyle &amp; Prime Living
              </div>

              <div className={styles.disclaimer} style={{ marginTop: 10 }}>
                Second residences &amp; generational assets
              </div>
            </div>

            <div className={styles.cardText} style={{ marginTop: 18, flex: 1 }}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                <li>Italy</li>
                <li>Spain</li>
                <li>France</li>
                <li>Monaco</li>
                <li>Croatia</li>
                <li>Greece</li>
                <li>Portugal</li>
              </ul>

              <div className={styles.divider} style={{ marginTop: 18, marginBottom: 18 }} />

              <div className={styles.cardTitle} style={{ fontSize: 13 }}>
                Relevant for:
              </div>

              <div className={styles.cardText} style={{ marginTop: 10 }}>
                <div>→ second-home positioning</div>
                <div>→ lifestyle asset allocation</div>
                <div>→ prime coastal markets</div>
                <div>→ legacy property acquisition</div>
                <div>→ yield &amp; long-term appreciation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing centered (как Services footnote по духу) */}
        <div style={{ marginTop: 44, textAlign: "center" }}>
          <div className={styles.footnote} style={{ maxWidth: 980, margin: "0 auto" }}>
            Geography is approached as structure — not prescription.
            <br />
            Each mandate defines its own jurisdictional framework.
          </div>
        </div>

        {/* Responsive tweak (оставляю твою логику) */}
      
      </div>

      {/* Small hack: apply responsive class via wrapper if you want */}
    
    </div>
  );
}
