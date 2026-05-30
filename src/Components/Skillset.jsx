import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../data/animations';
import { floatingSkills, skillProgress } from '../data/skills';

export default function Skillset() {
  const qualityPillars = [
    {
      icon: '⚡',
      title: 'Szybkie działanie',
      text: 'Strona powinna ładować się sprawnie i działać płynnie, bo pierwsze wrażenie użytkownika często decyduje o tym, czy zostanie na stronie.',
    },
    {
      icon: '📱',
      title: 'Mobile-first',
      text: 'Projektuję z myślą o telefonach, bo właśnie tam wielu klientów po raz pierwszy trafia na stronę lokalnej firmy.',
    },
    {
      icon: '🎯',
      title: 'Czytelna ścieżka kontaktu',
      text: 'Układ strony prowadzę tak, żeby użytkownik szybko zrozumiał ofertę i bez problemu mógł napisać, zadzwonić albo przejść dalej.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Poznanie celu strony',
      text: 'Najpierw ustalam, co strona ma osiągnąć: pokazać ofertę, zdobywać zapytania, budować zaufanie albo wspierać konkretną usługę.',
    },
    {
      number: '02',
      title: 'Układ i treść',
      text: 'Planuję sekcje tak, żeby użytkownik od razu wiedział, czym zajmuje się firma, dlaczego warto jej zaufać i jak się skontaktować.',
    },
    {
      number: '03',
      title: 'Kodowanie i responsywność',
      text: 'Tworzę stronę w nowoczesnym frontendzie, dopracowuję wersję mobilną, animacje, szybkość działania i podstawową optymalizację.',
    },
    {
      number: '04',
      title: 'Publikacja i poprawki',
      text: 'Pomagam przygotować stronę do działania online, a po wdrożeniu mogę wprowadzić drobne zmiany i dopracować szczegóły.',
    },
  ];

  return (
    <motion.section
      id="skills"
      className="py-5 border-top border-secondary skillset-section"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="portfolio-container py-5">
        <div className="text-center mb-5">
          <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill">
            Jak tworzę strony
          </span>

          <h2 className="display-4 fw-bold mb-4">
            Nowoczesne strony, które wyglądają dobrze i są wygodne dla klientów
          </h2>

          <p className="lead text-secondary mx-auto skillset-intro">
            Nie skupiam się wyłącznie na kodzie. Dobra strona powinna być szybka,
            czytelna, responsywna i prowadzić użytkownika do konkretnego działania:
            kontaktu, rezerwacji, zapytania albo poznania oferty.
          </p>
        </div>

        <motion.div
          className="row g-4 mb-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {qualityPillars.map((item, index) => (
            <motion.div className="col-lg-4" key={index} variants={fadeUp}>
              <div className="skill-main-card bg-black border border-secondary rounded-5 p-4 h-100 shadow-lg">
                <div className="skill-main-icon mb-4">{item.icon}</div>
                <h3 className="fw-bold mb-3">{item.title}</h3>
                <p className="text-secondary mb-0">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="row align-items-stretch g-4 mb-5">
          <motion.div className="col-xl-5" variants={fadeUp}>
            <div className="skillset-highlight bg-black border border-secondary rounded-5 p-4 p-lg-5 h-100 shadow-lg">
              <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill">
                Podejście
              </span>

              <h3 className="display-6 fw-bold mb-4">
                Projektuję stronę z perspektywy osoby, która ma z niej skorzystać.
              </h3>

              <p className="text-secondary mb-4">
                Zależy mi na tym, żeby strona była nie tylko estetyczna, ale też prosta
                w odbiorze. Użytkownik powinien szybko znaleźć najważniejsze informacje,
                zrozumieć ofertę i bez problemu przejść do kontaktu.
              </p>

              <div className="d-grid gap-3">
                <div className="skillset-mini-point">
                  <span>01</span>
                  <p className="mb-0">Czytelna struktura sekcji i komunikatów</p>
                </div>
                <div className="skillset-mini-point">
                  <span>02</span>
                  <p className="mb-0">Nowoczesny wygląd dopasowany do branży</p>
                </div>
                <div className="skillset-mini-point">
                  <span>03</span>
                  <p className="mb-0">Przemyślane przyciski, formularze i kontakt</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="col-xl-7" variants={fadeUp}>
            <div className="skills-progress-panel bg-black border border-secondary rounded-5 p-4 p-lg-5 h-100">
              <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
                <div>
                  <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill">
                    Priorytety
                  </span>
                  <h3 className="fw-bold mb-2">Na czym skupiam się najmocniej</h3>
                  <p className="text-secondary mb-0">
                    Te elementy mają największy wpływ na to, czy strona wygląda profesjonalnie
                    i realnie pomaga firmie w internecie.
                  </p>
                </div>
              </div>

              <div className="d-grid gap-4">
                {skillProgress.map((skill, index) => (
                  <div key={index}>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="fw-semibold">{skill.name}</span>
                      <span className="text-secondary small">{skill.value}%</span>
                    </div>

                    <div
                      className="progress bg-dark rounded-pill"
                      role="progressbar"
                      aria-label={skill.name}
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ height: '10px' }}
                    >
                      <motion.div
                        className="progress-bar rounded-pill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        transition={{ duration: 1, delay: index * 0.12 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="process-panel bg-black border border-secondary rounded-5 p-4 p-lg-5 shadow-lg mb-5">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-4 mb-5">
            <div>
              <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill">
                Proces pracy
              </span>

              <h3 className="display-6 fw-bold mb-0">
                Prosty proces współpracy bez technicznego chaosu
              </h3>
            </div>

            <p className="text-secondary mb-0 process-description">
              Dzięki jasnym etapom klient wie, co będzie potrzebne, co aktualnie powstaje
              i kiedy strona będzie gotowa do publikacji.
            </p>
          </div>

          <motion.div
            className="row g-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div className="col-md-6 col-xl-3" key={index} variants={fadeUp}>
                <div className="process-card h-100 rounded-5 p-4">
                  <div className="process-number mb-4">{step.number}</div>
                  <h5 className="fw-bold mb-3">{step.title}</h5>
                  <p className="text-secondary mb-0 small">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="tech-stack-panel bg-black border border-secondary rounded-5 p-4 p-lg-5 shadow-lg">
          <div className="row align-items-center g-4">
            <div className="col-lg-4">
              <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill">
                Technologie
              </span>

              <h3 className="fw-bold mb-3">Stack i narzędzia</h3>

              <p className="text-secondary mb-0">
                Technologie są dla mnie narzędziem do stworzenia strony, która działa szybko,
                wygląda dobrze i jest łatwa do dalszego rozwijania.
              </p>
            </div>

            <div className="col-lg-8">
              <div className="d-flex flex-wrap gap-3">
                {floatingSkills.map((skill, index) => (
                  <span key={index} className="badge skillset-badge px-3 py-2 rounded-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
