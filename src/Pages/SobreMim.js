import { useState } from "react";
import s from "./SobreMim.module.css";
import FOTO from "../images/FOTO.jpg";
import { textos } from "./infoSobreMim";
import $ from 'jquery'

export default function SobreMim({ lang }) {
  const [classe, setClasse] = useState(["fade-in", ""]);
  const [classeSelecionada, setClasseSelecionada] = useState([
    "selected",
    "non_selected",
    "non_selected",
    "non_selected",
    "non_selected",
  ]);
  const [conteudoCard, setConteudoCard] = useState(textos[0]);

  function show(t) {
    if (classeSelecionada[t - 1] === "selected") {
    } else {
      setTimeout(() => {
        setClasse("fade-out");
      }, 500);

      setTimeout(() => {
        if (t === 1) {
          setConteudoCard(textos[0]);
          setClasseSelecionada([
            "selected",
            "non_selected",
            "non_selected",
            "non_selected",
          ]);
        } else if (t === 2 && !(classeSelecionada[t - 1] === "selected")) {
          setConteudoCard(textos[1]);
          setClasseSelecionada([
            "non_selected",
            "selected",
            "non_selected",
            "non_selected",
          ]);
        } else if (t === 3 && !(classeSelecionada[t - 1] === "selected")) {
          setConteudoCard(textos[2]);
          setClasseSelecionada([
            "non_selected",
            "non_selected",
            "selected",
            "non_selected",
          ]);
        } else if (t === 4 && !(classeSelecionada[t - 1] === "selected")) {
          setConteudoCard(textos[3]);
          setClasseSelecionada([
            "non_selected",
            "non_selected",
            "non_selected",
            "selected",
          ]);
        } 
      }, 1500);

      setTimeout(() => {
        setClasse("fade-in");
      }, 1500);
      setTimeout(() => {
        $('.fade-in').removeClass(".fade-in")
      }, 2000)
    }
  }

  return (
      <section className={s.introducao} id="1">
          <div className={s.painel_esquerda}>
              <div class='anima'>
                <img
                  alt="Foto profissional do Vinícius"
                  src={FOTO}
                  className={s.foto_profissional}
                />
                <br></br>

                  {lang === "pt" ? (
                    <h1
                      className={s.botoes_introducao}
                      id={classeSelecionada[0]}
                      onClick={() => show(1)}
                    >
                      Sobre mim
                    </h1>
                  ) : (
                    <h1
                      className={s.botoes_introducao}
                      id={classeSelecionada[0]}
                      onClick={() => show(1)}
                    >
                      About Me
                    </h1>
                  )}
                
                {lang === "pt" ? (
                  <h1
                    className={s.botoes_introducao}
                    id={classeSelecionada[1]}
                    onClick={() => show(2)}
                  >
                    Meus conhecimentos
                  </h1>
                ) : (
                  <h1
                    className={s.botoes_introducao}
                    id={classeSelecionada[1]}
                    onClick={() => show(2)}
                  >
                    My Knowlodges
                  </h1>
                )}
                
                <h1
                  className={s.botoes_introducao}
                  id={classeSelecionada[2]}
                  onClick={() => show(3)}
                >
                  Hard Skills
                </h1>
                <h1
                  className={s.botoes_introducao}
                  id={classeSelecionada[3]}
                  onClick={() => show(4)}
                >
                  Soft Skills
                </h1>
                  </div>
          </div>
          
          <div className={s.painel_direita}>
            <div class='anima'>
              {lang === "pt" ? (
                <h1 className={classe}>{conteudoCard[0]}</h1>
              ) : (
                <h1 className={classe}>{conteudoCard[4]}</h1>
              )}
              
              {lang === "pt" ? (
                <article className={classe}>
                  {conteudoCard[1]}
                </article>
              ) : (
                <article className={classe}>
                  {conteudoCard[5]}
                </article>
              )}
              
              {lang === "pt" ? (
                <article className={classe}>
                  {conteudoCard[2]}
                </article>
              ) : (
                <article className={classe}>
                  {conteudoCard[6]}
                </article>
              )}
              
              {lang === "pt" ? (
                <article className={classe}>
                  {conteudoCard[3]}
                </article>
              ) : (
                <article className={classe}>
                  {conteudoCard[7]}
                </article>
              )}
            </div>
          </div>
      </section>
  );
}
