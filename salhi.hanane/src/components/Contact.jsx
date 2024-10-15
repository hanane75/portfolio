import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Passer directement formData au lieu de e.target pour éviter l'utilisation de 'name' EmailJS
    emailjs.send('service_2s9f0r4', 'template_qfjwxun', formData, 'nMrEO-9ZdDyaFE6Ra')
    .then((result) => {
      console.log('Message envoyé avec succès !', result.text);
      setSubmitted(true); // Affiche un message de succès
    }, (error) => {
      console.log('Erreur lors de l\'envoi du message :', error.text);
    });
  };

  return (
    <section className="contact-section">
      <h2>{"< Contactez-moi >"}</h2>
      {submitted ? (
        <div className="thank-you-message">
          <p>Merci pour votre message. Je vous contacterai bientôt.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name" // Alignez avec le formData "name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email" // Alignez avec le formData "email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message" // Alignez avec le formData "message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-submit-button">
            Envoyer
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
