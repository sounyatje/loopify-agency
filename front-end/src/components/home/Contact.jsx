import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Merci pour votre message !");
  };

  return (
    <div className="bg-beigeClair h-[110vh] flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-4 border-beigeMarron">
        <h1 className="text-3xl font-bold text-beigeMarron text-center mb-6">
          Contactez-nous !
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nom */}
          <div>
            <label
              htmlFor="name"
              className="block text-beigeMarron font-bold mb-2"
            >
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
            <label
              htmlFor="email"
              className="block text-beigeMarron font-bold mb-2"
            >
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
            <label
              htmlFor="message"
              className="block text-beigeMarron font-bold mb-2"
            >
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
            className="w-full bg-beigeMarron text-white py-2 px-4 rounded-lg font-bold text-xl hover:bg-beigeInter hover:text-beigeMarron transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
