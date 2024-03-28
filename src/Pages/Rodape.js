import s from "./Rodape.module.css";
import link from "../images/linkedin.svg";
import wpp from "../images/whatsapp.svg";
import email from "../images/envelope-fill.svg";
import icone from "../images/reactIcon.png";
import emailjs from "@emailjs/browser";
import $ from "jquery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Rodape({ lang }) {
  let envioDeEmail = 0;

  function spin(e) {
    const elemento = $("#" + e.target.id)[0];

    elemento.style.transform += "rotate(360deg)";
  }

  emailjs.init({
    publicKey: "3h74RWwUSOmEGzBWH",
  });

  function enviarEmail(e) {
    e.preventDefault();

    if (envioDeEmail < 3) {
      const emailSucessfulSent = () => {
        if (lang === "pt") {
          toast("Mensagem enviada com sucesso", {
            closeOnClick: true,
            theme: "dark",
            type: "success",
          });
        } else {
          toast("Message send succesfully", {
            closeOnClick: true,
            theme: "dark",
            type: "success",
          });
        }
      };
      emailjs
        .sendForm(
          "service_wqn6goj",
          "template_zxlex23",
          $('[name="form-send-email"]')[0],
          {
            publicKey: "3h74RWwUSOmEGzBWH",
          }
        )
        .then(() => {
          emailSucessfulSent();
          $('[name="form-send-email"]')[0].reset();
          envioDeEmail++;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const emailSucessfulSent = () => {
        if (lang === "pt") {
          toast("Limite de mensagens atingido", {
            closeOnClick: true,
            theme: "dark",
            type: "error",
          });
        } else {
          toast("Messages limit reached", {
            closeOnClick: true,
            theme: "dark",
            type: "error",
          });
        }
      };
      emailSucessfulSent();
    }
  }

  return (
    <footer className={s.rodape} id="5">
      <ToastContainer />
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
        <form onSubmit={enviarEmail} name="form-send-email">
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
                title=""
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
                title=""
                required
              />
            </>
          )}

          <br></br>
          <br></br>
          <label>Email: </label>
          <br></br>
          {lang === "pt" ? (
            <input
              autoComplete="off"
              placeholder="Deixe aqui um endereço de email"
              type="email"
              name="email"
              title=""
              required
            />
          ) : (
            <input
              autoComplete="off"
              placeholder="Leave here an email adress"
              type="email"
              name="email"
              title=""
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
                title=""
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
                title=""
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

/* 

{ const form = useRef(); const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY ).then( (result) => {
    alert('message sent successfully...');
    console.log(result.text); },
    (error) => {
      console.log(error.text); } ); 
    };


  return ( <div> <h1>Contact Form</h1> <form className='cf' ref={form} onSubmit={sendEmail}> // div container with input element </form> </div> ); } export default App;


  
  <form className='cf'> 
    <div className='half left cf'> 
      <input type='text' placeholder='Name' name='user_name' /> 
      <input type='email' placeholder='Email address' name='user_email' />
    </div>
    <div className='half right cf'>
      <textarea name='message' type='text' placeholder='Message'></textarea>
    </div> 
    <input type='submit' value='Submit' id='input-submit' />
  </form> </div> )*/
