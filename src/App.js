import Navegacao from './Pages/Navegacao';
import React, { useState } from 'react';
import './App.css'
import BotaoBackToTop from './Elementos/BotaoBackToTop';
import ExperienciaProf from './Pages/ExperienciaProf';
import Projetos from './Pages/Projetos';
import Rodape from './Pages/Rodape';
import InicioHome from './Pages/InicioHome';
import SobreMim from './Pages/SobreMim';
import MVV from './Pages/MVV';

function App() {

  const [language, setLanguage] = useState("pt");

  function changeLanguage(l) {
    setLanguage(l)
  }

  return (
  <>
   <Navegacao changeL={changeLanguage} language={language}/>
   <InicioHome lang={language}/>
   <SobreMim lang={language}/>
   <MVV lang={language}/>
   <ExperienciaProf lang={language}/>
   <Projetos lang={language}/>
   <Rodape lang={language}/>
   <BotaoBackToTop />  
  </>
  );
}

export default App;
