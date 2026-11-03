import logo from '../assets/brand/codeshor-logo.png';
import ArrowIcon from './ArrowIcon';

export default function Header() {
  return (
    <header id="top" className="bg-brand text-white">
      <div className="container-page flex min-h-20 items-center justify-between gap-4 py-4 sm:min-h-24 sm:py-5">
        <a href="#top" aria-label="Codeshor home" className="shrink-0"><img src={logo} alt="Codeshor Technologies" width="331" height="82" className="h-auto w-[190px] sm:w-[230px]" /></a>
        <nav aria-label="Main navigation" className="flex items-center gap-5 text-base sm:gap-8">
          <a className="hidden py-2 text-slate-200 hover:text-white sm:block" href="#designs">Designs</a>
          <a className="hidden py-2 text-slate-200 hover:text-white sm:block" href="#features">Features</a>
          <a className="inline-flex min-h-11 items-center gap-2 py-2 font-semibold text-white" href="#contact">Contact <ArrowIcon /></a>
        </nav>
      </div>
    </header>
  );
}
