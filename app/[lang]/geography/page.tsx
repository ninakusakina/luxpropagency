export default function GeographyPage() {
  const countries = [
    {
      title: "Switzerland",
      subtitle: "Core banking jurisdiction and prime alpine residences.",
      cities:
        "Lugano · Zurich · Geneva · St. Moritz · Davos · Zermatt · Crans-Montana · Gstaad · Low-tax cantons",
    },
    {
      title: "Italy",
      subtitle: "Lifestyle estates and legacy property locations.",
      cities:
        "Milan · Lake Como · Lake Garda · Lake Maggiore · Tuscany · Florence · Rome · Venice · Campione d’Italia",
    },
    {
      title: "Monaco",
      subtitle: "Ultra-high-density capital and residency hub.",
      cities: "Monte-Carlo",
    },
    {
      title: "Czech Republic",
      subtitle: "Central European residential and investment base.",
      cities: "Prague",
    },
    {
      title: "Germany",
      subtitle: "Economic core and urban prime assets.",
      cities: "Munich · Frankfurt · Berlin",
    },
    {
      title: "Spain",
      subtitle: "Mediterranean lifestyle and international second residences.",
      cities: "Barcelona · Madrid · Marbella · Seville",
    },
    {
      title: "Portugal",
      subtitle: "Relocation gateway and tax-efficient living.",
      cities: "Lisbon · Cascais · Porto",
    },
    {
      title: "Cyprus",
      subtitle: "Residency structuring and Mediterranean access.",
      cities: "Limassol · Paphos",
    },
    {
      title: "France",
      subtitle: "Riviera lifestyle, global capital city and alpine luxury.",
      cities: "French Riviera · Paris · Courchevel",
    },
  ];

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
      {/* Background (same style as other pages) */}
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

        {/* Dark overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(1200px 800px at 50% 30%, rgba(0,0,0,0.30), rgba(0,0,0,0.62))",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1400, margin: "0 auto" }}>
        {/* Smaller title */}
        <h1 style={{ fontSize: 56, marginBottom: 12, lineHeight: 1.05 }}>
          Geography
        </h1>

        <h2 style={{ fontSize: 24, fontWeight: 500, marginBottom: 10, opacity: 0.92 }}>
          Residential, Investment & Hospitality Assets across Europe
        </h2>

        <p style={{ maxWidth: 820, opacity: 0.85, lineHeight: 1.6 }}>
          Advisory across prime residential real estate, investment-grade assets and hospitality
          properties — supporting acquisitions in Europe’s most established financial, lifestyle and
          alpine destinations.
        </p>

        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: 36,
          }}
        >
          {countries.map((c) => (
            <div
              key={c.title}
              style={{
                padding: "32px 32px 36px",
                borderRadius: 28,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(14px)",
              }}
            >
              <h3 style={{ fontSize: 24, marginBottom: 6, fontWeight: 600 }}>
                {c.title}
              </h3>

              <p style={{ opacity: 0.85, marginBottom: 18, lineHeight: 1.6 }}>
                {c.subtitle}
              </p>

              <p style={{ opacity: 0.9, lineHeight: 1.6 }}>{c.cities}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}