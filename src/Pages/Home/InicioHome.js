import s from './InicioHome.module.css'
import { useState, useEffect } from 'react';

function InicioHome({ lang }) {

    var particulas = []
    const [clas, setClas] = useState('fade-out');

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

    function digitarNome() {
        const nome = 'VINÍCIUS DO PRADO BRAZ'
        const letrasNome = nome.split('')
        var juncaoLetras = []
        
        console.log(letrasNome.toString());

        for (let i = 0; i < letrasNome.length; i++) {
            setTimeout(() => {
                juncaoLetras.push(letrasNome[i])
                const texto = juncaoLetras.join('')
                document.querySelector("#titulo").innerHTML = texto
            }, i*250)            
        }

        setClas("come")       
             
    }

    useEffect(digitarNome)   
    inciarlizarParticulas()
      
    return (
        <main className={s.m}>
            <div className={s.degrade}>
                    <div class='part' className={s.star}></div>
                    {particulas.map(a => (
                        a
                    ))}
                <h1><b id='titulo'></b></h1>
                {lang === "pt" ? (<p class={clas}>Venha me conheçer!</p>)
                    : (<p class={clas}>Come and know me!</p>)}
                <p class={clas}>👇👇👇</p>
            </div>
        </main>
    )
}

export default InicioHome