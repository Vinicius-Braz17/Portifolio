import { useState } from "react";
import s from "./Projetos.module.css";
import { infoProjetos } from "./infoProjetos.js";

export default function Projetos({ lang }) {
  const [labels, setLabels] = useState(infoProjetos[0][0]);

  let elemento = new Array(labels).fill(labels);
  console.log(elemento.toString());

  const [selectedImage, setselectedImage] = useState(infoProjetos[0][1]);
  const [selectedDescricao, setSelectedDescricao] = useState(
    infoProjetos[0][2]
  );
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
        case "1":
          newClasses = ["1", "selectedP", "nonSelectedP", "nonSelectedP"];
          setSelectedClass(newClasses);
          break;
        case "2":
          newClasses = ["2", "nonSelectedP", "selectedP", "nonSelectedP"];
          setSelectedClass(newClasses);
          break;
        case "3":
          newClasses = ["3", "nonSelectedP", "nonSelectedP", "selectedP"];
          setSelectedClass(newClasses);
          break;
        default:
          break;
      }

      const im = document.getElementsByClassName("img");
      let cont = 0;
      while (cont < im.length) {
        im[cont].style.transform = "translateX(0)";
        cont++;
      }

      setselectedImage(infoProjetos[parseInt(e.target.id) - 1][1]);
      setSelectedDescricao(infoProjetos[parseInt(e.target.id) - 1][2]);
      setLabels(infoProjetos[parseInt(e.target.id) - 1][0]);
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
        <button onClick={changeB} class={selectedClass[1]} id="1">
          Calculadora
        </button>
        <button onClick={changeB} class={selectedClass[2]} id="2">
          Java.Bet
        </button>
        <button onClick={changeB} class={selectedClass[3]} id="3">
          FrubFy
        </button>
      </nav>
      <section className={s.descProjetos}>
        <div className={s.images}>
          <div className={s.divImagens}>{selectedImage}</div>

          <div className={s.navegacaoImagens}>
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
        <div className={s.descricao}>{selectedDescricao}</div>
      </section>
    </section>
  );
}
