import React, { useState } from "react";
import './ContactForm.css'; // Assure-toi que les styles sont définis dans ce fichier
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Gestion des changements de chaque champ
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fonction de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Envoi des données avec Axios vers ton backend
      const response = await axios.post('/api/contact', formData);
      
      // Si l'envoi est un succès, tu peux afficher une alerte ou une confirmation
      if (response.status === 200) {
        alert("Merci pour votre message !");
        // Réinitialiser le formulaire après soumission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      alert("Il y a eu une erreur lors de l'envoi du message. Veuillez réessayer.");
    }
  };

  return (
    <div id="contact" className="h-[110vh] bg-beigeClair flex flex-col p-6">
  
      {/* Conteneur de l'enveloppe */}
      <div className="envelope-container h-2/3 flex justify-center items-center mt-auto">
        <div className="envelope">
          <div className="back"></div>
          <form className="letter" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-beigeMarron text-center mb-6">
              Contactez-nous !
            </h1>
  
            {/* Nom */}
            <div>
              <label htmlFor="name" className="block text-beigeMarron font-bold mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom..."
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border-2 border-beigeInter focus:outline-none focus:border-beigeMarron"
                required
              />
            </div>
  
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-beigeMarron font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre email..."
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border-2 border-beigeInter focus:outline-none focus:border-beigeMarron"
                required
              />
            </div>
  
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-beigeMarron font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border-2 border-beigeInter focus:outline-none focus:border-beigeMarron"
                rows="4"
                required
              ></textarea>
            </div>
  
            {/* Bouton d'envoi */}
            <button
              type="submit"
              className="w-1/3 bg-beigeMarron text-white py-2 px-4 rounded-lg font-bold text-xl hover:bg-beigeClair hover:text-beigeMarron transition duration-300 block mx-auto"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default ContactForm;
