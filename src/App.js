import Navegacao from './Pages/Navegacao';
import InicioHome from './Pages/InicioHome';
import React, { useState } from 'react';
import MVV from './Pages/MVV';
import SobreMim from './Pages/SobreMim';
import './App.css'
import Rodape from './Pages/Rodape';
import BotaoBackToTop from './Elementos/BotaoBackToTop';

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
   <Rodape lang={language}/>
   <BotaoBackToTop />
  </>
  );
}

export default App;
