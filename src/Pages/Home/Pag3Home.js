import { useState } from "react"
import s from "./Pag3Home.module.css"
import FOTO from '../../images/FOTO.jpg'
import { textos } from "./info"

export default function Pag3Home({ lang }) {

    const [classe, setClasse] = useState(['fade-in', ''])
    const [conteudoCard, setConteudoCard] = useState(textos[0])

    function show(t) {

        setTimeout(() => {
            setClasse('fade-out')
        }, 500)

        setTimeout(() => {
            if (t === 1) {
                // let varTexto = ['quadrado 1', 'qua 2', 'qua 3']
                setConteudoCard(textos[0]);
            }
            else if (t === 2) {
                // let varTexto = ['quadrado 4', 'qua 5', 'qua 6']
                setConteudoCard(textos[1]);
            }
            else if (t === 3) {
                let varTexto = ['quadrado 7', 'qua 8', 'qua 9']
                setConteudoCard(varTexto);
            }
            else if (t === 4) {
                let varTexto = ['quadrado 10', 'qua 11', 'qua 12']
                setConteudoCard(varTexto);
            }
            else if (t === 5) {
                let varTexto = ['quadrado 13', 'qua 14', 'qua 15']
                setConteudoCard(varTexto);
            }
            else if (t === 6) {
                let varTexto = ['quadrado 16', 'qua 17', 'qua 18']
                setConteudoCard(varTexto);
            }
        }, 1500)

        setTimeout(() => {
            setClasse('fade-in')
        }, 1500)
    }

    return (
        <section className={s.introducao}>

            <div className={s.painel_esquerda}>
                <img alt='Foto profissional do Vinícius' className={s.foto_profissional} src={FOTO} />

                {lang === 'pt' ? (
                    <h1 className={s.botoes_introducao} onClick={() => show(1)}>Sobre mim</h1>
                ) : (
                    <h1 className={s.botoes_introducao}>About Me</h1>
                )}

                {lang === 'pt' ? (
                    <h1 className={s.botoes_introducao} onClick={() => show(2)}>Meus conhecimentos</h1>
                ) : (
                    <h1 className={s.botoes_introducao}>My Knowlodges</h1>
                )}

                <h1 className={s.botoes_introducao} onClick={() => show(3)}>Hard Skills</h1>
                <h1 className={s.botoes_introducao} onClick={() => show(4)}>Soft Skills</h1>

                {lang === 'pt' ? (
                    <h1 className={s.botoes_introducao} onClick={() => show(5)}>Por quê me contratar?</h1>
                ) : (
                    <h1 className={s.botoes_introducao} onClick={() => show(6)}>Why should you hire me?</h1>
                )}
            </div>

            <div className={s.painel_direita}>

                <article className={classe} id='esq'>
                    {conteudoCard[0]}
                </article>

                <article className={classe} id='cima'>
                    {conteudoCard[1]}
                </article>
                <article className={classe} id='dir'>
                    {conteudoCard[2]}
                </article>
            </div>
        </section>
    )
}