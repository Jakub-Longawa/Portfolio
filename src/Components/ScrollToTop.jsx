export default function ScrollToTop({ showScrollTop }) {
  return (
    <a
      href="#home"
      className={`scroll-to-top ${showScrollTop ? 'scroll-to-top-visible' : 'scroll-to-top-hidden'}`}
      aria-label="Powrót na górę"
    >
      ↑
    </a>
  );
}
