export default function Footer() {
  return (
    <footer className="border-top border-secondary py-5 mt-5">
      <div className="portfolio-container d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
        <p className="text-secondary mb-0">© 2026 Jakub Longawa. Wszystkie prawa zastrzeżone.</p>

        <div className="d-flex gap-4">
          <a href="https://github.com/Jakub-Longawa" className="text-decoration-none text-secondary">GitHub</a>
          <a href="https://linkedin.com/in/jakub-longawa-755834412" className="text-decoration-none text-secondary">LinkedIn</a>
          <a href="https://mailto:jakub.longawa.dev@gmail.com" className="text-decoration-none text-secondary">Email</a>
        </div>
      </div>
    </footer>
  );
}
