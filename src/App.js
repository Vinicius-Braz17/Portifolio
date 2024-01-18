import Navegacao from './Pages/Navegacao';
import Apresentacao from './Pages/Apresentacao';
import './App.css';
import InicioHome from './Pages/InicioHome';
import React, { useState } from 'react';

function App() {

  const [language, setLanguage] = useState("pt");

  function changeLanguage(l) {
    setLanguage(l)
  }

  return (
  <>
   <Navegacao changeL={changeLanguage} language={language}/>
   {/* <Apresentacao /> */}
   <InicioHome language={language}/>
   
  </>
  );
}

export default App;
