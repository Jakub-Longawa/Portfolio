import { motion } from 'framer-motion';
import { fadeUp } from '../data/animations';
import Profilowe from "../assets/Profilowe.jpg"

export default function About() {
  return (
    <motion.section id="about" className="py-5 border-top border-secondary about-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="portfolio-container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-black border border-secondary rounded-5 p-4 p-lg-5 shadow-lg about-personal-card">
              <div className="row align-items-center g-5">
                <div className="col-lg-4">
                  <div className="about-personal-photo">
                    <img
                      src={Profilowe}
                      alt="Zdjęcie profilowe"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="col-lg-8">
                  <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill">O mnie</span>
                  <h2 className="display-5 fw-bold mb-4">Cześć, jestem Jakub — tworzę strony, które dobrze wyglądają i pomagają firmom zdobywać klientów.</h2>
                  <p className="lead text-secondary mb-4">Jestem początkującym web developerem po technikum programistycznym i stale rozwijam swoje umiejętności w tworzeniu nowoczesnych stron internetowych oraz aplikacji komputerowych. Najbardziej interesuje mnie frontend, design i budowanie stron, które wyglądają profesjonalnie, działają szybko i są wygodne dla użytkownika.</p>
                  <p className="text-secondary mb-4">Lubię łączyć technologię z prostym i czytelnym designem. Zależy mi na tym, żeby klient nie dostał tylko „ładnej strony”, ale narzędzie, które jasno pokazuje ofertę, buduje zaufanie i ułatwia kontakt. Przy projektach zwracam dużą uwagę na estetykę, responsywność i szczegóły wykonania.</p>

                  <div className="d-flex flex-wrap gap-3">
                    <a href="#projects" className="btn btn-primary rounded-pill px-4">Zobacz moje projekty</a>
                    <a href="#contact" className="btn btn-outline-light rounded-pill px-4">Napisz do mnie</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
