import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../data/animations';
import { pricingPlans } from '../data/pricing';

export default function Pricing() {
  return (
    <motion.section id="services" className="py-5 border-top border-secondary" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div className="portfolio-container py-5">
        <div className="text-center mb-5">
          <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill">Oferty</span>
          <h2 className="display-5 fw-bold">Cennik stron internetowych</h2>
          <p className="text-secondary mt-3 mx-auto" style={{ maxWidth: '720px' }}>
            Proste i przejrzyste pakiety dla lokalnych firm, które chcą dobrze wyglądać w internecie i ułatwić klientom kontakt.
            Każdy projekt wyceniam indywidualnie po poznaniu zakresu.
          </p>
        </div>

        <motion.div className="row g-4 align-items-stretch" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {pricingPlans.map((plan, index) => (
            <motion.div className="col-lg-4" key={index} variants={fadeUp}>
              <div className={`card pricing-card bg-black border-secondary h-100 rounded-5 p-4 shadow-lg ${plan.highlighted ? 'pricing-card-featured border-primary' : ''}`}>
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-4 gap-3">
                    <h3 className="pricing-plan-title fw-bold mb-0">{plan.name}</h3>
                    <span className={`badge rounded-pill px-3 py-2 ${plan.highlighted ? 'bg-primary' : 'bg-secondary'}`}>{plan.label}</span>
                  </div>

                  <p className="text-secondary mb-4">{plan.description}</p>

                  <div className="mb-4">
                    <span className="pricing-price display-6 fw-bold">{plan.price}</span>
                    <p className="text-secondary small mb-0 mt-2">Cena zależy od liczby sekcji, treści i dodatkowych funkcji.</p>
                  </div>

                  <ul className="list-unstyled d-grid gap-3 mb-5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="d-flex gap-3 text-secondary">
                        <span className="text-primary fw-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className={`btn mt-auto rounded-pill px-4 py-3 ${plan.highlighted ? 'btn-primary' : 'btn-outline-light'}`}>
                    {plan.button}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="row mt-4 g-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="col-lg-6" variants={fadeUp}>
            <div className="bg-black border border-secondary rounded-5 p-4 h-100">
              <h4 className="fw-bold mb-3">Opieka techniczna</h4>
              <p className="text-secondary mb-3">Po wdrożeniu strony mogę zająć się drobnymi zmianami, aktualizacjami i kontrolą działania.</p>
              <p className="pricing-extra-price fs-4 fw-bold mb-0">od 150 zł / miesiąc</p>
            </div>
          </motion.div>

          <motion.div className="col-lg-6" variants={fadeUp}>
            <div className="bg-black border border-secondary rounded-5 p-4 h-100">
              <h4 className="fw-bold mb-3">Dodatkowe funkcje</h4>
              <p className="text-secondary mb-3">Blog, wielojęzyczność, rozbudowane formularze, integracje lub sklep internetowy wyceniam osobno.</p>
              <p className="pricing-extra-price fs-4 fw-bold mb-0">wycena indywidualna</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
