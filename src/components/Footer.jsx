export default function Footer() {
  return (
    <footer className="border-t border-line py-6 text-sm text-muted">
      <div className="container-page flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Codeshor Technologies</p>
        <a className="self-start py-2 underline-offset-4 hover:underline" href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
