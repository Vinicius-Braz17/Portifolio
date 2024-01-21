import s from "./Pag2Home.module.css"


export default function Pag2Home({lang}) {
    return (
        <section className={s.sessaoMVV}>
            {/* <h1>Missão, visão e valores</h1>
            <br></br>
            <br></br>
            <br></br> */}
            <div className={s.div_cards}>
                {/*Carta de missões frente e trás*/}
                <div className={s.div_missao}>
                    <div className={s.div_missao_inner}>
                        {/*Frente*/}
                        <article className={s.card} style={{
                            borderTop: '5px solid rgb(122, 45, 255)'
                        }}>{lang === "pt" ? (<p>Missão</p>)
                        : (<p>Mission</p>)}</article>

                        {/*Verso*/}
                        <article style={{
                            borderTop: '5px solid rgb(122, 45, 255)'
                        }} className={s.versoCard}>{lang === "pt" ? (<p>Oferecer os melhores serviços para os clientes, colaborando com a equipe do melhor jeito possivel</p>) : (<p>Offer the best services to the clients, colaborating with the team of the best way as possible</p>)}</article>

                    </div>
                </div>

                {/*Carta de visão frente e trás*/}
                <div className={s.div_visao}>
                    <div className={s.div_visao_inner}>

                        {/*Frente*/}
                        <article className={s.card} style={{
                            borderTop: '5px solid rgb(71, 78, 255)'
                        }}>{lang === 'pt' ? (<p>Visão</p>) : (<p>Vision</p>)}</article>

                        {/*Verso*/}
                        <article className={s.versoCard} style={{
                            borderTop: '5px solid rgb(71, 78, 255)'
                        }}>{lang === 'pt' ? (<p>Ser um gestor de uma grande equipe, passando os meus conhecimentos para todos os meus colaboradore</p>) : (<p>Being a leader of a great team, passing my knoleges to all of my colaborators</p>)}</article>

                    </div>
                </div>

                {/*Carta de valores frente e trás*/}
                <div className={s.div_valores}>
                    <div className={s.div_valores_inner}>

                        {/*Frente*/}
                        <article className={s.card} style={{
                            borderTop: '5px solid rgb(43, 170, 255)'
                        }}>{lang === 'pt' ? (<p>Valores</p>) : (<p>Values</p>)}</article>

                        {/*Verso*/}
                        <article className={s.versoCard} style={{
                            borderTop: '5px solid rgb(43, 170, 255)'
                        }}>{lang === 'pt' ? (<p>Honestidade, disciplina, colaboração, desenvolvimento da equipe e satisfação do consumidor final</p>): (<p>Honesty, discipline, colaboration, team's developinga and final costumer satisfaction</p>)}</article>

                    </div>
                </div>
            </div>
        </section >
    )
}