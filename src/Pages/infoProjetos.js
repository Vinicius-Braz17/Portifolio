import j1 from "../images/javaBet1.jpg";
import j2 from "../images/javaBet2.jpg";
import j3 from "../images/javaBet3.jpg";
import j4 from "../images/javaBet4.jpg";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import Java from '../images/Java-Logo.png'
import Swing from '../images/maxresdefault.jpg'
import NetBeans from '../images/netBeans.jpg'
import s from "./Projetos.module.css";
import videoCalculadora from '../images/VideoCalculadora.mp4'
import calculadora from '../images/calculadora.jpg'


export const infoProjetos = [
  [
    /* Projeto 1 - Calculadora */
    2,
    <>
      <img alt='print calculadora' src={calculadora} className="img"/>
      <video alt="vídeo calculadora" className="img" src={videoCalculadora} controls />
    </>,
    <>
      <h1>Calculadora</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of typ. ijancijadnf
          </p>
          <div>
            <p>Tecnologias utilizadas:</p>
            {/*Ícones das gracinha*/}
            <img
              alt="Java"
              src={Swing}
            ></img>
            <img
              alt="Java Swing"
              src={Java}
            ></img>
            <img
              alt="IDE Apache Netbeans"
              src={NetBeans}
            />
          </div>
          <div className={s.divBotoes}>
            <article className={s.linkExterno}><HiExternalLink /></article>
            <article className={s.linkExterno2}><FaGithub /></article>
          </div>
    </>
  ],
  [
    /* Projeto 2 - Java.Bet */
    4,
    <>
      <img alt="imagensProjetos" className="img" src={j1} />
      <img alt="imagensProjetos" className="img" src={j2} />
      <img alt="imagensProjetos" className="img" src={j3} />
      <img alt="imagensProjetos" className="img" src={j4} />
    </>,
    <>
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
              alt="Java"
              src={Java}
            ></img>
            <img
              alt="Java Swing"
              src={Swing}
            ></img>
            <img
              alt="IDE Apache Netbeans"
              src={NetBeans}
            />
          </div>
          <div className={s.divBotoes}>
            <article className={s.linkExterno}><HiExternalLink /></article>
            <article className={s.linkExterno2}><FaGithub /></article>
          </div>
    </>
  ]
];
