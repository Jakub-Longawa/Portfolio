import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../data/animations';
import { projects } from '../data/projects';

export default function Projects() {
  const projectsPerPage = 3;
  const [activeProjectPage, setActiveProjectPage] = useState(1);
  const projectPagesCount = Math.ceil(projects.length / projectsPerPage);
  const visibleProjects = projects.slice((activeProjectPage - 1) * projectsPerPage, activeProjectPage * projectsPerPage);

  return (
    <motion.section id="projects" className="py-5 border-top border-secondary" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="portfolio-container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Przykładowe projekty</h2>
          <p className="text-secondary mt-3">Projekty pokazujące styl i jakość wykonywanych stron internetowych.</p>
        </div>

        <motion.div className="row g-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {visibleProjects.map((project, index) => (
            <motion.div className="col-lg-4" key={index} variants={fadeUp}>
              <div className="card bg-black border-secondary rounded-5 overflow-hidden h-100 shadow-lg">
                <img src={project.image} alt={project.title} className="img-fluid" style={{ height: '250px', objectFit: 'cover' }} />

                <div className="card-body p-4 d-flex flex-column">
                  <h3 className="fw-bold mb-3">{project.title}</h3>
                  <p className="text-secondary flex-grow-1">{project.description}</p>

                  <div className="d-flex flex-wrap gap-2 mt-3 mb-4">
                    {project.tech.map((item, i) => (
                      <span key={i} className="badge project-tech-badge px-3 py-2 rounded-pill">{item}</span>
                    ))}
                  </div>

                  <a href={project.link} className="btn btn-outline-light rounded-pill px-4 mt-auto">Zobacz projekt</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <nav className="mt-5" aria-label="Paginacja projektów">
          <ul className="pagination justify-content-center gap-2 flex-wrap mb-0">
            {Array.from({ length: projectPagesCount }, (_, index) => {
              const page = index + 1;
              return (
                <li className="page-item" key={page}>
                  <button
                    type="button"
                    className={`page-link rounded-pill project-page-link ${activeProjectPage === page ? 'active' : ''}`}
                    onClick={() => setActiveProjectPage(page)}
                  >
                    {page}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </motion.section>
  );
}
