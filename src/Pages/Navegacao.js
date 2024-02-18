import s from "./Navegacao.module.css";
import { Link } from 'react-scroll'
import icone from "../images/reactIcon.png";
import BR from "../images/br.jpg";
import USA from "../images/eua.jpg";

function Navegacao({ changeL, language }) {

  function spin(e) {
    const elemento = document.getElementById(e.target.id)

    elemento.style.transform += 'rotate(360deg)'
}

  return (
    <nav className={s.navegacao} id='0'>

      <img className={s.fotoNav} onClick={spin} id='icone_react_nav' src={icone} alt="Icone Currículo navegação" />
      <div className={s.divNavegacaoBotoes}>

        <p>{language === "pt" ? (
          <Link Link to="2" spy={true} smooth={true} offset={-20} duration={500}>
            Sobre
          </Link>) : (
          <Link Link to="2" spy={true} smooth={true} offset={-20} duration={500}>
            About
          </Link>)}
        </p>

        <p>{language === "pt" ? (
          <Link Link to="1" spy={true} smooth={true} offset={-20} duration={500}>
            Missão, visão, valores
          </Link>) : (
          <Link to="1" spy={true} smooth={true} offset={20} duration={500}>
            Mission, vision, values
          </Link>
        )}
        </p>

        <p>{language === "pt" ? (
          <Link Link to="3" spy={true} smooth={true} offset={-20} duration={500}>
            Contato
          </Link>) : (
          <Link Link to="3" spy={true} smooth={true} offset={-20} duration={500}>
            Contact
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

export default Navegacao;
