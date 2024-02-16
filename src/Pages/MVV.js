import s from "./MVV.module.css"


export default function MVV({ lang }) {
    return (
        <section className={s.sessaoMVV} id='1'>
            {lang === 'pt' ? (<h1>Missão, visão e valores</h1>) : (<h1>Mission, Vision and Values</h1>)}
            <br></br>
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
                        }} className={s.versoCard}>{lang === "pt" ? (<p>Aplicar os meus conhecimentos e meu talento na prática dentro de uma empresa, em projetos nos quais eu possa resolver problemas reais e criar soluções criativas e produtivas. Desenvolver excelentes aplicações, visando a melhor experiência e satisfação do cliente. E manter uma boa união e produtividade com as equipes e áreas por meio de uma boa comunicação e habilidades interpessoais</p>) : (<p>Apply my knowledge and talent in practice within a company, in projects in which I can solve real problems and create creative and productive solutions. Develop excellent applications, aiming for the best customer experience and satisfaction. And keep a good unity and productivity with the teams and areas through a good communication and interpersonal skills</p>)}</article>

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
                        }}>{lang === 'pt' ? (<p>Ser um desenvolvedor com um grande portifólio e líder de uma equipe, na qual eu irei incentivar, engajar e liderar os projetos que tivermos, com o objetivo de entregar as melhores experiências para os clientes a partir de sistemas bons e bem desenvolvidos. Além de, como um líder, incentivar e contribuir para o crescimento profissional dos colaboradores do time, os guiando e ensinando para que possam atingir suas metas e crescerem cada vez mais </p>) : (<p>Being a developer with a great portfolio and leader of a team, in which I will encourage, engage and lead the projects thet we may have, with the objective of delivering the best experiences for customers with good and well-developed systems. In addition to, as a leader, encouraging and contributing to the professional growth of team employees, guiding and teaching them so that they can reach their goals and grow even more</p>)}</article>

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
                        }}>{lang === 'pt' ? (<p>Honestidade<br/><br/>Disciplina<br/><br/>Colaboração<br/><br/>Crescimento e aprendizado<br/><br/>Ou eu faço um trabalho bem feito, ou eu não faço</p>) : (<p>Honesty<br/><br/>Discipline<br/><br/>Colaboration<br/><br/>Growing and learning<br/><br/>I'd rather don't do a job then do it badly</p>)}</article>
                    </div>
                </div>
            </div>
        </section >
    )
}