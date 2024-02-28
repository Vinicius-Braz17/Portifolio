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
import TIKB from "../images/frubByProj/Captura de tela 2024-02-28 154738.jpg";
import KB1 from "../images/frubByProj/kanBan.jpg";
import KB2 from "../images/frubByProj/kanBanSaude.jpg";
import criarCard1 from "../images/frubByProj/criarCard1.jpg";
import reactIcon from "../images/reactIcon.png";
import SQL from "../images/MySQL.jpg";
import videoFrub from "../images/frubByProj/videoFrubFy.mp4";

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
        Este foi o meu primeiro projeto, consiste em calculadora interativa com
        algoritmo em JavaScript com o objetivo de resolver equações e operações
        matemáticas. Ela conta também com um sistema de ajustes de cor,
        possibilitando o usuário alterar a cor de fundo da interface de acordo
        com sua preferência
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
  [
    /* Projeto 3 - Frub.Fy */
    5,
    <>
      <img alt="imagensProjetos" className="img" src={TIKB} />
      <img alt="imagensProjetos" className="img" src={KB1} />
      <img alt="imagensProjetos" className="img" src={KB2} />
      <img alt="imagensProjetos" className="img" src={criarCard1} />
      <video alt="vídeo calculadora" className="img" src={videoFrub} controls />
    </>,
    <>
      <h1>FrubBy</h1>
      <p
        style={{
          overflowY: "scroll",
          paddingRight: "10px",
        }}
      >
        O FrubFy é uma plataforma de{" "}
        <b>gerenciamento de processos admissionais</b>, inspirada na plafatorma{" "}
        <a
          href="https://www.pipefy.com/pt-br/"
          target="_blank"
          rel="noreferrer"
        >
          <b>PipeFy</b>
        </a>
        , e apresentado em uma reunião na minha atual empresa,{" "}
        <a
          href="https://www.linkedin.com/company/frubana/mycompany/"
          target="_blank"
          rel="noreferrer"
        >
          <b>Frubana</b>
        </a>
        , por isso o nome "FrubFy". O projeto conta com uma interface simples,
        porém muito útil e interativa, com um esquema visual envolvendo colunas
        e registros de futuros colaboradores em forma de cards. O modelo é
        desenvolvido a partir da <b>metologia KanBan</b>, de gerenciamento de
        atividades, porém adaptada para o fluxo de um processo admissional. A
        admissão é dividia em dois KanBans, um do <b>processo principal</b> e
        outro para o processo de <b>exames médicos admissionais</b>, no qual o
        departamento de saúde tem uma visibilidade dos colaboradores e podem
        registrar as demais informações sobre o exame. Atualmente, funciona
        apenas no localHost, porém estou trabalhando para realizar o deploy da
        aplicação e disponibilizar para todos testarem
      </p>
      <div>
        <p>Tecnologias utilizadas:</p>
        {/*Ícones das gracinha*/}
        <img alt="icone React" src={reactIcon}></img>
        <img alt="Js" src={js} />
        <img alt="MySQL" src={SQL}></img>
      </div>
      <hr style={{ border: "1.5px solid black" }}></hr>
      <div className={s.divBotoes}>
        <a href="https://github.com/Vinicius-Braz17/FrubFy" target="blank">
          <article className={s.linkExterno2}>
            <FaGithub />
          </article>
        </a>
      </div>
    </>,
  ],
];
