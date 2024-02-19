import Navegacao from './Pages/Navegacao';
import InicioHome from './Pages/InicioHome';
import React, { useState } from 'react';
import './App.css'
import Projetos from './Pages/Projetos';
import SobreMim from './Pages/SobreMim';
// import MVV from './Pages/MVV';
// import Rodape from './Pages/Rodape';
// import BotaoBackToTop from './Elementos/BotaoBackToTop';

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
   <Projetos lang={language}/>
   {/* <MVV lang={language}/> */}
   {/* <Rodape lang={language}/>
   <BotaoBackToTop />  */}
  </>
  );
}

export default App;
