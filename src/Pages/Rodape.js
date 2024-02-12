import s from './Rodape.module.css'
import link from '../images/linkedin.svg'
import wpp from '../images/whatsapp.svg'
import email from '../images/envelope-fill.svg'

export default function Rodape({lang}) {
    return (
        <footer className={s.rodape}>
            <div>
                <a rel="noreferrer" href='https://www.linkedin.com/in/vin%C3%ADcius-braz/' target='_blank'><img alt='icone footer' className={s.iconeLinkedin} src={link}></img></a>
                <a rel='noreferrer' href='https://api.whatsapp.com/send/?phone=11997540828&text&type=phone_number&app_absent=0' target='_blank'><img alt='icone footer' style={{borderRadius: '9px'}}className={s.iconeLinkedin} src={wpp}></img></a>
                <img alt='icone footer' className={s.iconeLinkedin} src={email}></img>
            </div>
            <br></br>
            <p>Vinicius corporation</p>
            <p>2024</p>
        </footer>
    )
}