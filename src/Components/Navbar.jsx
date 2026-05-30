import { useState } from 'react';

export default function Navbar({ showNavbar }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary sticky-top ${
        showNavbar || isMenuOpen ? '' : 'navbar-hidden'
      }`}
    >
      <div className="portfolio-container py-2">
        <a className="navbar-brand fw-bold fs-3" href="#home" onClick={closeMenu}>
          Jakub Longawa webDev
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto gap-lg-4">
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeMenu}>
                Projekty
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={closeMenu}>
                Cennik
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={closeMenu}>
                Skillset
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeMenu}>
                O mnie
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary px-4 rounded-pill" href="#contact" onClick={closeMenu}>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
