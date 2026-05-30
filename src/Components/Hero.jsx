import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../data/animations';
import { floatingSkills } from '../data/skills';
import Profilowe from "../assets/Profilowe.jpg"

export default function Hero() {
  const shuffledSkills = useMemo(
    () =>
      [...floatingSkills]
        .sort(() => Math.random() - 0.5)
        .map((skill, index) => ({
          skill,
          id: `${skill}-${index}`,
          delay: Math.random() * 18,
          x: -260 + Math.random() * 220,
          scale: 0.82 + Math.random() * 0.35,
          duration: 9 + Math.random() * 6,
        })),
    []
  );

  return (
    <motion.section id="home" className="hero-section py-5 py-lg-7" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="portfolio-container py-5 position-relative">
        <div className="hero-glow"></div>

        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <motion.div className="hero-image-wrapper floating-animation" variants={fadeUp}>
              <div className="hero-image-circle">
                <img
                  src={Profilowe}
                  alt="Zdjęcie profilowe"
                  className="hero-main-image"
                />
              </div>

              <div className="skills-orbit" aria-hidden="true">
                {shuffledSkills.map((item) => (
                  <div
                    key={item.id}
                    className="floating-skill dynamic-skill"
                    style={{
                      '--delay': `${item.delay}s`,
                      '--x': `${item.x}px`,
                      '--scale': `${item.scale}`,
                      '--duration': `${item.duration}s`,
                    }}
                  >
                    <span>{item.skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="col-lg-7">
            <span className="badge bg-primary mb-4 px-3 py-2 rounded-pill">Freelancer Web Developer</span>
            <h1 className="display-2 fw-bold mb-4 hero-title">Tworzę nowoczesne strony internetowe dla lokalnych firm</h1>
            <p className="lead text-secondary mb-5 hero-description">
              Pomagam małym biznesom wyglądać profesjonalnie online dzięki szybkim, nowoczesnym i responsywnym stronom internetowym.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <a href="#projects" className="btn btn-primary btn-lg px-5 py-3 rounded-pill">Zobacz moje projekty</a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill">Skontaktuj się</a>
            </div>

            <div className="hero-stats d-flex flex-wrap gap-4">
              <div><h3 className="fw-bold mb-0">3+</h3><p className="text-secondary mb-0">projektów demo</p></div>
              <div><h3 className="fw-bold mb-0">100%</h3><p className="text-secondary mb-0">mobile-first</p></div>
              <div><h3 className="fw-bold mb-0">24h</h3><p className="text-secondary mb-0">średni czas odpowiedzi</p></div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
