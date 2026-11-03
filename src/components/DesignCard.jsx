import ArrowIcon from './ArrowIcon';

export default function DesignCard({ design, onChoose }) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-line bg-white">
      <a href={design.url} target="_blank" rel="noopener noreferrer" className="group relative block border-b border-line bg-surface p-3" aria-label={`View ${design.name} live demo (opens in a new tab)`}>
        <img src={design.preview} alt={design.previewAlt} width="1280" height="720" className="aspect-[16/10] w-full rounded-sm object-cover object-top" />
        <span className="absolute right-5 bottom-5 flex size-9 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors group-hover:bg-action group-hover:text-white"><ArrowIcon /></span>
      </a>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="mb-1 text-sm font-medium text-muted">{design.style}</p>
        <h3 className="text-2xl font-bold tracking-tight">{design.name}</h3>
        <p className="mt-3 text-base leading-relaxed text-muted">{design.description}</p>
        <ul aria-label={`${design.name} highlights`} className="mt-5 mb-6 space-y-2 text-base">
          {design.features.map(feature => <li key={feature} className="flex items-start gap-2.5"><span aria-hidden="true" className="font-semibold text-action">✓</span>{feature}</li>)}
        </ul>
        <div className="mt-auto grid gap-2">
          <a className="button-secondary" href={design.url} target="_blank" rel="noopener noreferrer">View live demo <ArrowIcon /><span className="sr-only"> — {design.name} (opens in a new tab)</span></a>
          <button type="button" onClick={() => onChoose(design.name)} className="button-primary" aria-label={`Enquire about ${design.name}`}>Choose {design.name} <ArrowIcon direction="right" /></button>
        </div>
      </div>
    </article>
  );
}
