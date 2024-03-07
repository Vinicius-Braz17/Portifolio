import s from "./Rodape.module.css";
import link from "../images/linkedin.svg";
import wpp from "../images/whatsapp.svg";
import email from "../images/envelope-fill.svg";
import icone from "../images/reactIcon.png";

export default function Rodape({ lang }) {
  function spin(e) {
    const elemento = document.getElementById(e.target.id);

    elemento.style.transform += "rotate(360deg)";
  }

  return (
    <footer className={s.rodape} id="5">
      <section className={s.sesaoIcones}>
        <div className={s.divSesaoIcones}>
          <img
            alt="imagem react fim da pagina"
            onClick={spin}
            id="reactIcon"
            title="Click to spin"
            className={s.reactIcon}
            src={icone}
          />
          <h1>React App</h1>
          <br></br>
          <hr></hr>
          <br></br>
          {/* Botões/ícones de contato */}
          <div className={s.divIcones}>
            {lang === "pt" ? (
              <>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/vin%C3%ADcius-braz/"
                  target="_blank"
                >
                  <img
                    title="Clique para ver o meu Linkedin"
                    alt="Icone footer linkedin"
                    className={s.iconesRodape}
                    src={link}
                  ></img>
                </a>
                <a
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send/?phone=11997540828&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <img
                    title="Clique para me chamar no WhatsApp"
                    alt="Icone footer whatsapp"
                    style={{ borderRadius: "9px" }}
                    className={s.iconesRodape}
                    src={wpp}
                  ></img>
                </a>
                <a href="mailto: vini.p.braz@hotmail.com">
                  <img
                    title="Clique para me mandar um email"
                    alt="icone footer email"
                    className={s.iconesRodape}
                    src={email}
                  />
                </a>
              </>
            ) : (
              <>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/vin%C3%ADcius-braz/"
                  target="_blank"
                >
                  <img
                    title="Click to see my linkedin"
                    alt="Icone footer linkedin"
                    className={s.iconesRodape}
                    src={link}
                  ></img>
                </a>
                <a
                  rel="noreferrer"
                  href="https://api.whatsapp.com/send/?phone=11997540828&text&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <img
                    title="Click to call me in WhatsApp"
                    alt="Icone footer whatsapp"
                    style={{ borderRadius: "9px" }}
                    className={s.iconesRodape}
                    src={wpp}
                  ></img>
                </a>
                <a href="mailto: vini.p.braz@hotmail.com">
                  <img
                    title="Click to send me an email"
                    alt="icone footer email"
                    className={s.iconesRodape}
                    src={email}
                  />
                </a>
              </>
            )}
          </div>
          <br></br>
          <p>Vinicius Braz</p>
          <p>2024</p>
        </div>
      </section>
      <section className={s.sessaoMenssagem}>
        {/* Formulário de envio de email */}
        <form
          action="https://formsubmit.co/godinhobraz@gmail.com"
          method="POST"
        >
          {lang === "pt" ? (
            <h1>Deixe uma mensagem para mim</h1>
          ) : (
            <h1>Leave a message to me</h1>
          )}
          <br></br>
          {lang === "pt" ? (
            <>
              <label>Nome: </label>
              <br></br>
              <input
                autoComplete="off"
                placeholder="Digite aqui o seu nome"
                type="text"
                name="name"
                required
              />
            </>
          ) : (
            <>
            <label>Name: </label>
            <br></br>
              <input
                autoComplete="off"
                placeholder="Type here your name"
                type="text"
                name="name"
                required
              />
            </>
          )}

          <br></br>
          <br></br>
          <label>Email: </label>
          <br></br>
          {lang === 'pt' ? (
            <input
            autoComplete="off"
            placeholder="Deixe aqui um endereço de email"
            type="email"
            name="email"
            required
          />
          ) : (
            <input
            autoComplete="off"
            placeholder="Leave here an email adress"
            type="email"
            name="email"
            required
          />
          )} 
          <br></br>
          <br></br>
          {lang === "pt" ? (
          <>
          <label>Mensagem: </label>
          <textarea
            style={{ height: "90px" }}
            autoComplete="off"
            placeholder="Digite aqui a sua mensagem"
            type="textarea"
            name="message"
            required
          />
          </>
          ) : (
          <>
          <label>Message: </label>
          <textarea
            style={{ height: "90px" }}
            autoComplete="off"
            placeholder="Type here your message"
            type="textarea"
            name="message"
            required
          />
          </>
        )}
          <br></br>
          
          <br></br>
          <br></br>
          {lang === "pt" ? (
            <button type="submit">Enviar</button>
          ) : (
            <button type="submit">Send</button>
          )}
        </form>
      </section>
    </footer>
  );
}
