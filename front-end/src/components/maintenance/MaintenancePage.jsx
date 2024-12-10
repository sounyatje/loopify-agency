import React, { useState } from 'react';
import axios from 'axios'; // Assurez-vous d'importer axios
import logo from '../../../public/logo (2).png';
import backgroundImage from '../../../public/backgroundimage.webp'; // Assurez-vous de bien utiliser le chemin correct

const MaintenancePage = () => {
  const [email, setEmail] = useState(''); // Utilisation du state pour l'email
  const [message, setMessage] = useState(''); // Message de confirmation ou d'erreur

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification simple pour s'assurer que l'email est valide
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage('please enter a valid email');
      return;
    }

    try {
      // Envoi de la requête POST avec axios
      const response = await axios.post('http://localhost:5000/save-email', { email });

      // Affichage du message de succès
      setMessage(response.data.message);
      setEmail(''); // Réinitialiser le champ email après soumission
    } catch (error) {
      // Affichage d'une erreur si la requête échoue
      setMessage('Error while saving the email. Please try again.');
    }
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center h-screen text-black p-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Couche d'opacité blanche */}
      <div className="absolute inset-0 bg-white opacity-70"></div>

      {/* Contenu principal sans opacité */}
      <div className="relative text-center p-10 bg-blue-950 rounded-lg">
        {/* Illustration */}
        <div className="flex justify-center items-center h-20">
          <img src={logo} alt="Logo" className="w-40 h-auto" />
        </div>

        {/* Main Title */}
        <h1 className="text-3xl font-bold text-white font-custom">
          Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-white max-w-md mb-2 ">
          Our website is currently under maintenance. We’re working hard to deliver the best experience possible.
        </p>

        {/* Notify Me Form */}
        <div className="flex flex-col items-center">
          <p className="mb-2 text-white font-medium">
            Notify me when it's ready:
          </p>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring focus:ring-orange-400"
            />
            <button
              type="submit"
              className="bg-orange text-white px-4 py-2 rounded-r-md hover:bg-orange-600"
            >
              Notify Me
            </button>
          </form>

          {/* Message de confirmation ou d'erreur */}
          {message && <p className="mt-4 text-white">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;

