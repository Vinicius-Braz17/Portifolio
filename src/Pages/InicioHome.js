import s from './InicioHome.module.css'

function InicioHome({ language }) {
    return (
        <main className={s.m}>
            <div className={s.degrade}>
                <h1><b>VINÍCIUS DO PRADO BRAZ</b></h1>
                {language === "pt" ? (<p>Conheça mais</p>)
                    : (<p>Learn More</p>)}
                <p>👇👇👇</p>
            </div>
        </main>
    )
}

export default InicioHome