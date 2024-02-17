import { Link } from "react-scroll";
import s from './BotaoBackToTop.module.css'
import arrow_up from '../images/arrow-up-circle-fill.svg'

export default function BotaoBackToTop() {
    return (
        <Link Link to="0" spy={true} smooth={true} offset={0} duration={500}>
            <button className={s.backToTop}><img className={s.iconeBackToTop} alt='icone back to top' src={arrow_up}/></button>
        </Link>
    )
}