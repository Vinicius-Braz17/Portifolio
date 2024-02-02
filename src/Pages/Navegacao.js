import s from "./Navegacao.module.css";
import icone from "../images/FotoCurriculo.png";
import BR from "../images/br.jpg";
import USA from "../images/eua.jpg";

function Navegacao({ changeL, language }) {
  return (
    <nav className={s.navegacao}>

      <img className={s.fotoNav} src={icone} alt="Icone Currículo navegação" />
      <div className={s.divNavegacaoBotoes}>
        <p className={s.botaoHome}>Home</p>
        <p>{language === "pt" ? (<>Formação acadêmica</>) : (<>Academic graduation</>)}</p>
        <p>{language === "pt" ? (<>Cursos complementares </>) : (<>Complementary courses</>)}</p>
        <p>{language === "pt" ? (<>Contato</>) : (<>Contact</>)}</p>
        <div className={s.changeLanguage}>
          <img onClick={() => changeL("pt")} src={BR} alt="Change language buttom" />
          <br></br>
          <img onClick={() => changeL("en")} src={USA} alt="Change language buttom" />
        </div>
      </div>

      <section className={s.painelHover}>
        oi
      </section>
    </nav>
  );
}

export default Navegacao;
