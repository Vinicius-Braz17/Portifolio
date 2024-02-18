import s from './Rodape.module.css'
import link from '../images/linkedin.svg'
import wpp from '../images/whatsapp.svg'
import email from '../images/envelope-fill.svg'
import icone from "../images/reactIcon.png";


export default function Rodape({lang}) {

    function spin(e) {
        const elemento = document.getElementById(e.target.id)

        elemento.style.transform += 'rotate(360deg)'
    }
    
    return (
        <footer className={s.rodape} id='3'>
            <section className={s.sesaoIcones}>
                <div className={s.divSesaoIcones}>
                    <img alt='imagem react fim da pagina' onClick={spin} id='reactIcon' title='Click to spin' className={s.reactIcon} src={icone}/>
                <h1>React App</h1>
                <br></br>
                <hr></hr>
                <br></br>
                {/* Botões/ícones de contato */}
                <div className={s.divIcones}>
                    <a rel="noreferrer" href='https://www.linkedin.com/in/vin%C3%ADcius-braz/' target='_blank'><img title="Clique para ver o meu Linkedin" alt='Icone footer linkedin' className={s.iconesRodape} src={link}></img></a>
                    <a rel='noreferrer' href='https://api.whatsapp.com/send/?phone=11997540828&text&type=phone_number&app_absent=0' target='_blank'><img title="Clique para me chamar no WhatsApp" alt='Icone footer whatsapp' style={{borderRadius: '9px'}}className={s.iconesRodape} src={wpp}></img></a>
                    <a href='mailto: vini.p.braz@hotmail.com'>
                        <img title="Clique para me mandar um email" alt='icone footer email' className={s.iconesRodape} src={email} />
                    </a>
                </div>
                <br></br>
                <p>Vinicius Braz</p>
                <p>2024</p>
                </div>
                
            </section>
            <section className={s.sessaoMenssagem}>
                {/* Formulário de envio de email */}
                <form action="https://formsubmit.co/godinhobraz@gmail.com" method='POST'>
                    <h1>Deixe uma mensagem para mim</h1><br></br>
                    <label>Nome: </label><br></br>
                    <input autocomplete="off" placeholder='Digite aqui o seu nome' type="text" name="name" required /><br></br><br></br>
                    <label>Email: </label><br></br>
                    <input autocomplete="off" placeholder='Deixe aqui um email' type="email" name="email" required /><br></br><br></br>
                    <label>Mensagem: </label><br></br>
                    <textarea style={{height: "90px"}}autocomplete="off" placeholder="Digite uma mensagem para mim" type="textarea" name="message" required />
                    <br></br>
                    <br></br>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </footer>
    )
}