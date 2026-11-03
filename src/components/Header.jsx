import logo from '../assets/brand/codeshor-weddings-brown-aligned.png';
import ArrowIcon from './ArrowIcon';

export default function Header() {
  return (
    <header id="top" className="border-b border-line bg-[#fffbf3] text-ink">
      <div className="container-page flex min-h-[76px] items-center justify-between gap-4 py-3 sm:min-h-[84px]">
        <a href="#top" aria-label="Codeshor home" className="relative block h-[52px] w-[clamp(126px,42vw,174px)] shrink-0 overflow-hidden sm:h-[60px] sm:w-[212px]">
          <img src={logo} alt="Codeshor Weddings" className="absolute top-1/2 left-0 h-auto w-full max-w-none -translate-y-1/2 scale-[1.27] origin-center" />
        </a>
        <nav aria-label="Main navigation" className="flex items-center gap-5 text-base sm:gap-8">
          <a className="hidden py-2 text-muted transition-colors hover:text-action sm:block" href="#designs">Designs</a>
          <a className="hidden py-2 text-muted transition-colors hover:text-action sm:block" href="#features">Features</a>
          <a className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-line px-4 py-2 font-semibold text-action transition-colors hover:border-gold hover:bg-surface" href="#contact">Contact <ArrowIcon /></a>
        </nav>
      </div>
    </header>
  );
}
