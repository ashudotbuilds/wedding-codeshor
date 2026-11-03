import ArrowIcon from './ArrowIcon';

export default function Hero() {
  return (
    <section className="container-page pt-10 pb-10 sm:pt-14 sm:pb-12" aria-labelledby="hero-heading">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-14">
        <div className="max-w-[780px]">
          <p className="mb-3 text-base font-semibold text-action">Wedding websites by Codeshor</p>
          <h1 id="hero-heading" className="text-[36px] leading-[1.15] font-bold tracking-tight sm:text-[48px]">A wedding website<br className="hidden sm:block" /> that feels like you.</h1>
          <p className="mt-5 max-w-[640px] text-lg leading-relaxed text-muted">Pick from three designs. We'll personalise it with your photos, story and events, ready to share with your guests.</p>
        </div>
        <a href="#designs" className="button-primary self-start whitespace-nowrap lg:mb-1">Explore the designs <ArrowIcon direction="right" /></a>
      </div>
    </section>
  );
}
