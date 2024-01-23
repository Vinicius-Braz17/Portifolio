import Navegacao from './Pages/Navegacao';
import './App.css';
import InicioHome from './Pages/Home/InicioHome';
import React, { useState } from 'react';
import Pag2Home from './Pages/Home/Pag2Home';
import Pag3Home from './Pages/Home/Pag3Home';

function App() {

  const [language, setLanguage] = useState("pt");

  function changeLanguage(l) {
    setLanguage(l)
  }

  return (
  <>
   <Navegacao changeL={changeLanguage} language={language}/>
   {/* <Apresentacao /> */}
   <InicioHome lang={language}/>
   <Pag2Home lang={language}/>
   <Pag3Home lang={language} />
  </>
  );
}

export default App;
