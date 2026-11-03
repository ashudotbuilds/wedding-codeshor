import { designs } from '../data/designs';
import DesignCard from './DesignCard';

export default function DesignCollection({ onChoose }) {
  return (
    <section id="designs" className="container-page pb-12 sm:pb-16" aria-labelledby="designs-heading">
      <div className="mb-6 flex flex-col justify-between gap-2 border-t border-line pt-7 sm:flex-row sm:items-end">
        <h2 id="designs-heading" className="text-2xl font-bold tracking-tight sm:text-[28px]">Find your design</h2>
        <p className="text-base text-muted">Open a live demo to see the full experience.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3 lg:gap-6">{designs.map(design => <DesignCard key={design.name} design={design} onChoose={onChoose} />)}</div>
    </section>
  );
}
