import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Importation des composants Modal et Button de Bootstrap

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const response = await axios.post('https://getform.io/f/bjjeknob', formData);

      if (response.status === 200) {
        setSubmitted(true); // Ouvre la modal
        setError(null); // Réinitialise les erreurs

        // Réinitialiser les champs du formulaire
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
      setError('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    }
  };

  const handleCloseModal = () => {
    setSubmitted(false); // Fermer la modal
  };

  return (
    <section id="contact" className="contact-section padding-section">
      <h2>{"< Contactez-moi >"}</h2>
      
      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
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
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="text-danger">{error}</p>} {/* Gestion des erreurs */}

        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>

      {/* Modal Bootstrap */}
      <Modal show={submitted} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Merci !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Merci pour votre message. Je vous contacterai bientôt.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Contact;
