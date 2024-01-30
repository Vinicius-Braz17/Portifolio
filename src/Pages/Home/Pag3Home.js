import s from "./Pag3Home.module.css"
import FOTO from './images/FOTO.jpg'

export default function Pag3Home({ lang }) {
    return (
        <section className={s.introducao}>
            <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

            <div className={s.painel_esquerda}>
                <img alt='Foto profissional do Vinícius' className={s.foto_profissional} src={FOTO} />
                {lang === 'pt' ? (<h1 className={s.botoes_introducao}>Sobre mim</h1>) : (<h1 className={s.botoes_introducao}>About Me</h1>)}
                {lang === 'pt' ? (<h1 className={s.botoes_introducao}>Meus conhecimentos</h1>) : (<h1 className={s.botoes_introducao}>My Knowlodges</h1>)}
                <h1 className={s.botoes_introducao}>Hard-Skills</h1>
                <h1 className={s.botoes_introducao}>Soft-Skills</h1>
                {lang === 'pt' ? (<h1 className={s.botoes_introducao}>Por quê me contratar?</h1>) : (<h1 className={s.botoes_introducao}>Why should you hire me?</h1>)}
            </div>
            <div className={s.painel_direita}>
                <article className={s.cardzin}>

                </article>
                <article className={s.cardzin}>

                </article>
                <article className={s.cardzin}>
                    
                </article>
            </div>
        </section>
    )
}