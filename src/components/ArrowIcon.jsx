export default function ArrowIcon({ className = 'size-4', direction = 'up' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {direction === 'up' ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M5 12h14m-6-6 6 6-6 6" />}
    </svg>
  );
}
