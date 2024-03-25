import s from "./Navegacao.module.css";
import { Link } from 'react-scroll'
import icone from "../images/reactIcon.png";
import BR from "../images/br.jpg";
import USA from "../images/eua.jpg";
// import { Nav } from "reactstrap";

export default function Navegacao({ changeL, language }) {

  function spin(e) {
    const elemento = document.getElementById(e.target.id)

    elemento.style.transform += 'rotate(360deg)'
}

  return (
    <nav className={s.navegacao} id='0'>

      <img className={s.fotoNav} onClick={spin} id='icone_react_nav' src={icone} alt="Icone Currículo navegação" />
      <div className={s.divNavegacaoBotoes}>
        <p>{language === "pt" ? (
          <Link Link to="1" spy={true} smooth={true} offset={0} duration={500}>
            Sobre mim
          </Link>) : (
          <Link to="1" spy={true} smooth={true} offset={0} duration={500}>
            About me
          </Link>
        )}
        </p>
        
        <p>{language === "pt" ? (
          <Link Link to="2" spy={true} smooth={true} offset={-10} duration={500}>
            Missão, visão e valores
          </Link>) : (
          <Link Link to="2" spy={true} smooth={true} offset={-10} duration={500}>
            Mission, vision and values  
          </Link>)}
        </p>

        <p>{language === "pt" ? (
          <Link Link to="3" spy={true} smooth={true} offset={-10} duration={500}>
            Experiência profissional
          </Link>) : (
          <Link Link to="3" spy={true} smooth={true} offset={-10} duration={500}>
            Professtional experience
          </Link>)}
        </p>

        <p>{language === "pt" ? (
          <Link Link to="4" spy={true} smooth={true} offset={-10} duration={500}>
            Projetos
          </Link>) : (
          <Link Link to="4" spy={true} smooth={true} offset={-10} duration={500}>
            Projects
          </Link>)}
        </p>

        <p>{language === "pt" ? (
          <Link Link to="5" spy={true} smooth={true} offset={-10} duration={500}>
            Contate-me
          </Link>) : (
          <Link Link to="5" spy={true} smooth={true} offset={-10} duration={500}>
            Contact me
          </Link>)}
        </p>
      </div>
      <div className={s.changeLanguage}>
        <img onClick={() => changeL("pt")} src={BR} alt="Change language buttom" />
        <br></br>
        <img onClick={() => changeL("en")} src={USA} alt="Change language buttom" />
      </div>
    </nav>
  );
}

