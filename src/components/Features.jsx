import { features } from '../data/features';

export default function Features() {
  return (
    <section id="features" className="border-y border-line bg-surface py-10 sm:py-12" aria-labelledby="features-heading">
      <div className="container-page">
        <h2 id="features-heading" className="text-4xl font-semibold text-action sm:text-[42px]">Every detail, thoughtfully included.</h2>
        <div className="mt-7 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(feature => <div key={feature.title}><h3 className="text-lg font-semibold">{feature.title}</h3><p className="mt-1 text-base leading-relaxed text-muted">{feature.description}</p></div>)}
        </div>
        <p className="mt-8 text-sm text-muted">Features vary by design. We'll confirm the details, support and turnaround before we start.</p>
      </div>
    </section>
  );
}
