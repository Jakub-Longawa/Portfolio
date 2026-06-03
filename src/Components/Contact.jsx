import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../data/animations';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

const initialFormData = {
  name: '',
  email: '',
  message: '',
  company: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState('');

  const isLoading = formStatus === 'loading';

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (formStatus !== 'idle') {
      setFormStatus('idle');
      setFormError('');
    }
  };


  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return 'Uzupełnij wszystkie pola formularza.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email.trim())) {
      return 'Podaj poprawny adres email.';
    }

    if (formData.message.trim().length < 10) {
      return 'Wiadomość powinna mieć przynajmniej 10 znaków.';
    }

    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError('');

    if (formData.company) {
      return;
    }

    const validationError = validateForm();

    if (validationError) {
      setFormStatus('error');
      setFormError(validationError);
      return;
    }

    if (FORMSPREE_ENDPOINT.includes('TWOJE_ID_FORMULARZA')) {
      setFormStatus('error');
      setFormError('Najpierw podmień endpoint Formspree w pliku Contact.jsx albo ustaw VITE_FORMSPREE_ENDPOINT w pliku .env.');
      return;
    }

    try {
      setFormStatus('loading');

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: 'Nowa wiadomość z portfolio',
        }),
      });

      if (!response.ok) {
        throw new Error('Formspree request failed');
      }

      setFormStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      setFormStatus('error');
      setFormError('Nie udało się wysłać wiadomości. Spróbuj ponownie albo napisz bezpośrednio na email.');
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-5 border-top border-secondary"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="portfolio-container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-black border border-secondary rounded-5 p-5 shadow-lg contact-card">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold">Kontakt</h2>
                <p className="text-secondary mt-3">
                  Masz pomysł na stronę internetową? Napisz wiadomość.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-4">
                  <div className="contact-honeypot" aria-hidden="true">
                    <label htmlFor="company">Firma</label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      tabIndex="-1"
                      autoComplete="off"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control bg-dark border-secondary text-light p-3 rounded-4"
                      placeholder="Imię"
                      autoComplete="name"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control bg-dark border-secondary text-light p-3 rounded-4"
                      placeholder="Email"
                      autoComplete="email"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      rows="6"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control bg-dark border-secondary text-light p-3 rounded-4"
                      placeholder="Napisz wiadomość"
                      disabled={isLoading}
                    ></textarea>
                  </div>

                  {formStatus === 'success' && (
                    <div className="col-12">
                      <div className="alert alert-success rounded-4 mb-0" role="alert">
                        Wiadomość została wysłana. Odezwę się tak szybko, jak to możliwe.
                      </div>
                    </div>
                  )}

                  {formStatus === 'error' && formError && (
                    <div className="col-12">
                      <div className="alert alert-danger rounded-4 mb-0" role="alert">
                        {formError}
                      </div>
                    </div>
                  )}

                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg px-5 rounded-pill"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
