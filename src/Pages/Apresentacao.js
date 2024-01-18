import foto from "../images/Foto Linkedin.png";
import s from "./Apresentacao.module.css";

function Apresentacao() {
  return (
    <main className={s.apresentacao}>
      <img className={s.ft} src={foto} alt="Foto página principal" />
      <div className={s.descricaoPerfil}>
        <h2>Vinícius do Prado Braz</h2>
        <p>18 anos</p>
        <button>Contact me</button>
      </div>
    </main>
  );
}

export default Apresentacao;
