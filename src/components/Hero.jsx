import ArrowIcon from './ArrowIcon';

export default function Hero() {
  return (
    <section className="wedding-hero" aria-labelledby="hero-heading">
      <div className="container-page flex flex-col items-center gap-6 py-12 text-center sm:py-14">
        <div className="max-w-[780px]">
          <div className="wedding-ornament mb-5" aria-hidden="true"><svg width="40" height="28" viewBox="0 0 48 34" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M24 28C11 22 17 8 24 2c7 6 13 20 0 26Z"/><path d="M24 28C11 30 5 18 5 10c10 0 16 7 19 18Zm0 0c13 2 19-10 19-18-10 0-16 7-19 18Z"/><path d="M2 24c8 9 36 9 44 0"/></svg></div>
          <p className="mb-3 text-sm font-bold tracking-[0.18em] text-action uppercase">Your wedding. Beautifully invited.</p>
          <h1 id="hero-heading" className="text-[43px] leading-[1.04] font-semibold text-action sm:text-[64px]">Rooted in tradition.<br />Made for your forever.</h1>
          <p className="mx-auto mt-5 max-w-[600px] text-lg leading-relaxed text-muted">Wedding websites that bring your story, your celebrations and your loved ones together. Choose a design. Make it yours.</p>
        </div>
        <a href="#designs" className="button-primary whitespace-nowrap">Explore the collection <ArrowIcon direction="right" /></a>
      </div>
    </section>
  );
}
