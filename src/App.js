import Navegacao from './Pages/Navegacao';
import InicioHome from './Pages/Home/InicioHome';
import React, { useState } from 'react';
import MVV from './Pages/Home/MVV';
import SobreMim from './Pages/Home/SobreMim';
import './App.css'
import Rodape from './Pages/Rodape';

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
  </>
  );
}

export default App;
