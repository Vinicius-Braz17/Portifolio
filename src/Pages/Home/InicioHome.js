// import { useState } from 'react';
// import { useEffect } from 'react';
import s from './InicioHome.module.css'

function InicioHome({ lang }) {

    var particulas = []

    function inciarlizarParticulas() {
            for (let i = 0; i < 450; i++) { 
                let star = Math.random() * 10;
                if (star < 4) {
                    const Particle =  (
                        <div
                            className={s.star1}
                            style={{
                            opacity: '0.5',
                            width: '3px',
                            height: '3px',
                            background: 'white',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: Math.random() * 900,
                            left: Math.random() * (-2000),
                        }}
                        />
                      );
                      particulas.push(Particle)
                }
                else if (star < 7) {
                    const Particle =  (
                        <div
                            className={s.star2}
                            style={{
                            opacity: '0.5',
                            width: '3px',
                            height: '3px',
                            background: 'white',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: Math.random() * 900,
                            left: Math.random() * (-2000),
                        }}
                        />
                      );
                      particulas.push(Particle)

                }
                else if (star < 10) {

                    const Particle =  (
                        <div
                            className={s.star3}
                            style={{
                            opacity: '0.5',
                            width: '3px',
                            height: '3px',
                            background: 'white',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: Math.random() * 900,
                            left: Math.random() * (-2000),
                        }}
                        />
                      );
                      particulas.push(Particle)

                }
            }
    }
    
    inciarlizarParticulas()
      
    return (
        <main className={s.m}>
            <div className={s.degrade}>
                    <div class='part' className={s.star}></div>
                    {particulas.map(a => (
                        a
                    ))}
                <h1><b>VINÍCIUS DO PRADO BRAZ</b></h1>
                {lang === "pt" ? (<p>Conheça mais</p>)
                    : (<p>Learn More</p>)}
                <p>👇👇👇</p>
            </div>
        </main>
    )
}

export default InicioHome