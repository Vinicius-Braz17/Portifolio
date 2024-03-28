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
import $ from 'jquery'

function App() {

  const [language, setLanguage] = useState("pt");

  function changeLanguage(l) {
    setLanguage(l)
  }

  const root = document.documentElement;
  root.className += ' js';

function boxTop(idBox) {
  var boxOffset = $(idBox).offset().top;
  return boxOffset;
}

$(document).ready(function() {
  var $target = $('.anima'),
      animationClass = 'anime-init',
      windowHeight = $(window).height(),
      offset = windowHeight - (windowHeight / 4);

  function animeScroll() {
    var documentTop = $(document).scrollTop();
    $target.each(function() {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass)
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }
  animeScroll();

  $(document).scroll(function() {
    animeScroll();
  });
});

  

  return (
  <>
    {language === 'pt' ? (<title>Portifólio</title>) : (<title>Portfolio</title>)}
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
