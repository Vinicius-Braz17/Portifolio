import { useState } from "react";
import s from "./Projetos.module.css";
import { infoProjetos } from "./infoProjetos.js";
import link from "../images/linkedin.svg";
import wpp from "../images/whatsapp.svg";
import email from "../images/envelope-fill.svg";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

export default function Projetos({ lang }) {
  let elemento = new Array(infoProjetos[0][0]).fill("elemento");

  const [selectedProject, setselectedProject] = useState(infoProjetos[0][1]);
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
    const trans = "translateX(-" + e.target.id * 318 + "px)";
    const im = document.getElementsByClassName("img");
    let cont = 0;

    document.getElementById("numeroPagina").innerHTML =
      parseInt(e.target.id) + 1 + "/" + im.length;

    while (cont < im.length) {
      im[cont].style.transform = trans;
      cont++;
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
          <div className={s.divImagens}>{selectedProject}</div>

          <div className={s.navegacaoImagens}>
            {/* <label onClick={passarImagens} id='1'></label>
             <label onClick={passarImagens} id='2'></label>
             <label onClick={passarImagens} id='3'></label>
             <label onClick={passarImagens} id='4'></label> */}
            <b id="numeroPagina">1/{infoProjetos[0][0]}</b>
            <br></br>
            {elemento.map((a, index) => {
              return (
                <label
                  onClick={passarImagens}
                  id={index}
                  name={"label"}
                ></label>
              );
            })}
          </div>
        </div>
        <div className={s.descricao}>
          <h1>Calculadora</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of typ.
          </p>
          <div>
            <p>Tecnologias utilizadas:</p>
            {/*Ícones das gracinha*/}
            <img
              title="Clique para ver o meu Linkedin"
              alt="Icone footer linkedin"
              className={s.iconesRodape}
              src={link}
            ></img>
            <img
              title="Clique para me chamar no WhatsApp"
              alt="Icone footer whatsapp"
              style={{ borderRadius: "9px" }}
              className={s.iconesRodape}
              src={wpp}
            ></img>
            <img
              title="Clique para me mandar um email"
              alt="icone footer email"
              className={s.iconesRodape}
              src={email}
            />
          </div>
          <div className={s.divBotoes}>
            <article className={s.linkExterno}><HiExternalLink /></article>
            <article className={s.linkExterno}><FaGithub /></article>
          </div>
        </div>
      </section>
    </section>
  );
}
