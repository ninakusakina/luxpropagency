import Link from "next/link";
import Image from "next/image";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang || "en";

  return (
    <main className="hero">
      {/* Background image */}
      <Image
        src="/images/hero-water.jpg"
        alt="Water luxury background"
        fill
        priority
        className="heroBg"
      />
      <div className="heroOverlay" />

      {/* Top bar */}
      <header className="heroTop">
        <div className="heroBrand">
          <div className="heroBrandTitle">LUXPROPAGENCY</div>
          <div className="heroBrandSub">
            Private Real Estate &amp; Family Office Advisory
          </div>
        </div>

        <nav className="heroNav">
          <Link className="heroNavLink" href={`/${lang}/about`}>About</Link>
          <Link className="heroNavLink" href={`/${lang}/services`}>Services</Link>
          <Link className="heroNavLink" href={`/${lang}/geography`}>Geography</Link>
          <Link className="heroNavLink" href={`/${lang}/contacts`}>Contact</Link>
        </nav>
      </header>

      {/* Center hero text */}
      <section className="heroCenter">
        <div className="heroInner">
          <h1 className="heroTitle">LUXPROPAGENCY</h1>

          <div className="heroSubtitle">
            Private Real Estate &amp; Family Office Advisory
            <br />
            Where capital meets real assets — discreetly.
          </div>
        </div>
      </section>
    </main>
  );
}