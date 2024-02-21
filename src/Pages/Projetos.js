import { useState } from "react";
import s from "./Projetos.module.css";
import j1 from "../images/javaBet1.jpg";
import j2 from "../images/javaBet2.jpg";
import j3 from "../images/javaBet3.jpg";
import j4 from "../images/javaBet4.jpg";

export default function Projetos({ lang }) {
  const [selectedClass, setSelectedClass] = useState([
    "butao1",
    "selectedP",
    "nonSelectedP",
    "nonSelectedP",
  ]);
  var newClasses = [];

  function changeB(e) {
    if (selectedClass[0] !== e.target.id) {
      switch (e.target.id) {
        case "butao1":
          newClasses = ["butao1", "selectedP", "nonSelectedP", "nonSelectedP"];
          setSelectedClass(newClasses);
          break;
        case "butao2":
          newClasses = ["butao2", "nonSelectedP", "selectedP", "nonSelectedP"];
          setSelectedClass(newClasses);
          break;
        case "butao3":
          newClasses = ["butao3", "nonSelectedP", "nonSelectedP", "selectedP"];
          setSelectedClass(newClasses);
          break;
        default:
          break;
      }
    }
  }

  function passarImagens(e) {
    const trans = "translateX(-" + ((e.target.id - 1) * 318) + "px)"
    const elemento = document.getElementsByClassName("img");
    let cont = 0
    
   while (cont < elemento.length) {
       elemento[cont].style.transform = trans;
       cont++
    }
    
  }

  return (
    <section className={s.projetos}>
      <div className={s.tituloProjetos}>
        <h1>Projetos</h1>
        <p>
          Como um aspirante a desenvolvedor sem experiência profissional, possuo
          alguns projetos pessoais/acadêmicos que criei para aprender e
          aperfeiçoar as minhas habilidades
        </p>
      </div>
      <nav className={s.navegacaoProjetos}>
        <button onClick={changeB} class={selectedClass[1]} id="butao1">
          Calculadora
        </button>
        <button onClick={changeB} class={selectedClass[2]} id="butao2">
          Java.Bet
        </button>
        <button onClick={changeB} class={selectedClass[3]} id="butao3">
          FrubFy
        </button>
      </nav>
      <section className={s.descProjetos}>
        <div className={s.images}>
          <div className={s.divImagens}>
            <img alt="imagensProjetos" className='img' src={j1} />
            <img alt="imagensProjetos" className='img' src={j2} />
            <img alt="imagensProjetos" className='img' src={j3} />
            <img alt="imagensProjetos" className='img' src={j4} />
          </div>

          <div className={s.navegacaoImagens}>
            <label onClick={passarImagens} id="1"></label>
            <label onClick={passarImagens} id="2"></label>
            <label onClick={passarImagens} id="3"></label>
            <label onClick={passarImagens} id="4"></label>
          </div>
        </div>
      </section>
    </section>
  );
}
