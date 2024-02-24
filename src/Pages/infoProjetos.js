import j1 from "../images/javaBet1.jpg";
import j2 from "../images/javaBet2.jpg";
import j3 from "../images/javaBet3.jpg";
import j4 from "../images/javaBet4.jpg";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import Java from "../images/Java-Logo.png";
import Swing from "../images/maxresdefault.jpg";
import NetBeans from "../images/netBeans.jpg";
import s from "./Projetos.module.css";
import videoCalculadora from "../images/VideoCalculadora.mp4";
import calculadora from "../images/calculadora.jpg";
import html from "../images/html-removebg-preview.png";
import css from "../images/css-removebg-preview.png";
import js from "../images/js.png";

export const infoProjetos = [
  [
    /* Projeto 1 - Calculadora */
    2,
    <>
      <video
        alt="vídeo calculadora"
        className="img"
        src={videoCalculadora}
        controls
      />
      <img alt="print calculadora" src={calculadora} className="img" />
    </>,
    <>
      <h1>Calculadora</h1>
      <p>
        Este foi o meu primeiro "projeto", consiste em calculadora interativa
        com algoritmo em JavaScript com o objetivo de resolver equações e
        operações matemáticas. Ela conta também com um sistema de ajustes de
        cor, possibilitando o usuário alterar a cor de fundo da interface de
        acordo com sua preferência
      </p>
      <div>
        <p>Tecnologias utilizadas:</p>
        {/*Ícones das gracinha*/}
        <img alt="HTML" src={html}></img>
        <img alt="CSS" src={css}></img>
        <img alt="IDE Apache Netbeans" src={js} />
      </div>
      <hr style={{ border: "1.5px solid black" }}></hr>
      <div className={s.divBotoes}>
        <a
          href="https://calculadora-html-pi.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          <article className={s.linkExterno}>
            <HiExternalLink />
          </article>
        </a>
        <a
          href="https://github.com/Vinicius-Braz17/Calculadora.html"
          target="_blank"
          rel="noreferrer"
        >
          <article className={s.linkExterno2}>
            <FaGithub />
          </article>
        </a>
      </div>
    </>,
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
      <h1>Java.Bet</h1>
      <p>
        Projeto idealizado e desenvolvido no 1° semestre do curso de bacharelado
        em ciência da computação. Eu, junto ao meu grupo desenvolvemos uma casa
        de apostas chamada "JavaBet", trazendo como atração dois grandes
        clássicos dos cassinos: Caça Níqueis e Black Jack. O projeto conta com
        um sistema de cadastros de usuários, tela de login, menu para
        moderadores da plataforma, saque e depósito de dinheiro fictício,
        histórico de apostas e acesso às informações pessoais do usuário, sendo
        possível alterá-las ou até excluí-las.
      </p>
      <div>
        <p>Tecnologias utilizadas:</p>
        {/*Ícones das gracinha*/}
        <img alt="Java" src={Java}></img>
        <img alt="Java Swing" src={Swing}></img>
        <img alt="IDE Apache Netbeans" src={NetBeans} />
      </div>
      <hr style={{ border: "1.5px solid black" }}></hr>
      <div className={s.divBotoes}>
        <a
          href="https://github.com/Vinicius-Braz17/Casa_de_Apostas"
          target="blank"
        >
          <article className={s.linkExterno2}>
            <FaGithub />
          </article>
        </a>
      </div>
    </>,
  ],
];
