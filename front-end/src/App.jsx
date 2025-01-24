import React, { useState } from 'react'; // Import de useState
// import MaintenancePage from './components/maintenance/MaintenancePage';
import Navbar from './components/home/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/home/Header.jsx';
import PandaAnimation from './components/home/PandaAnimation.jsx';
import Resume from './components/home/Resume.jsx';
import './styles.css';
import './App.css';
import Projects from './components/home/projects.jsx';
import Contact from './components/home/Contact.jsx';
import AboutMe from './components/home/AbouteMe.jsx';

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false); // Correctement déclaré

  return (
    <>
      {/* Afficher la barre de chargement si le site n'est pas chargé */}
      {!loadingComplete ? (
        <PandaAnimation onComplete={() => setLoadingComplete(true)} />
      ) : (
        <>
          {/* Contenu principal */}
         <Navbar />
          <Header />
         <AboutMe/>
           <Resume/> 
           <Projects/>
           <Contact/>
           <Footer/> 
        </>
      )}
    </>
  );
};

export default App;
