import { Link } from "react-scroll";
import s from './BotaoBackToTop.module.css'

export default function BotaoBackToTop() {
    return (
        <Link>
            <button className={s.backToTop}></button>
        </Link>
    )
}