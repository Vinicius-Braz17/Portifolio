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
                setConteudoCard(textos[0]);
            }
            else if (t === 2) {
                setConteudoCard(textos[1]);
            }
            else if (t === 3) {
                setConteudoCard(textos[2]);
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
                    <h1 className={s.botoes_introducao} onClick={() => show(1)}>About Me</h1>
                )}

                {lang === 'pt' ? (
                    <h1 className={s.botoes_introducao} onClick={() => show(2)}>Meus conhecimentos</h1>
                ) : (
                    <h1 className={s.botoes_introducao} onClick={() => show(2)}>My Knowlodges</h1>
                )}

                <h1 className={s.botoes_introducao} onClick={() => show(3)}>Hard Skills</h1>
                <h1 className={s.botoes_introducao} onClick={() => show(4)}>Soft Skills</h1>

                {lang === 'pt' ? (
                    <h1 className={s.botoes_introducao} onClick={() => show(5)}>Por quê me contratar?</h1>
                ) : (
                    <h1 className={s.botoes_introducao} onClick={() => show(5)}>Why should you hire me?</h1>
                )}
            </div>


            <div className={s.painel_direita}>
                {lang === 'pt' ? (
                    <h1 className={classe}>{conteudoCard[0]}</h1>
                ) : (
                    <h1 className={classe}>{conteudoCard[4]}</h1>
                )}
                  
                {lang === 'pt' ? (
                    <article className={classe} id='esq'>
                        {conteudoCard[1]}
                    </article>
                ) : (
                    <article className={classe} id='esq'>
                        {conteudoCard[5]}
                    </article>
                )}

                {lang === 'pt' ? (
                    <article className={classe} id='cima'>
                        {conteudoCard[2]}
                    </article>
                ) : (
                    <article className={classe} id='cima'>
                        {conteudoCard[6]}
                    </article>
                )}
                
                {lang === 'pt' ? (
                    <article className={classe} id='dir'>
                        {conteudoCard[3]}
                    </article>
                ) : (
                    <article className={classe} id='dir'>
                        {conteudoCard[7]}
                    </article>
                )}
                
                
            </div>
        </section>
    )
}