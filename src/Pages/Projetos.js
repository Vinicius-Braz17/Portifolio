import { useState } from 'react'
import s from './Projetos.module.css'

export default function Projetos({ lang }) {

    const [selectedClass, setSelectedClass] = useState(['butao1', 'selectedP', 'nonSelectedP', 'nonSelectedP'])
    var newClasses = []

    function changeB(e) {
        if (selectedClass[0] !== e.target.id) {
            switch (e.target.id) {
                case 'butao1':
                    newClasses = ['butao1', 'selectedP', 'nonSelectedP', 'nonSelectedP'];
                    setSelectedClass(newClasses)
                    break;
                case 'butao2':
                    newClasses = ['butao2', 'nonSelectedP', 'selectedP', 'nonSelectedP'];
                    setSelectedClass(newClasses)
                    break;
                case 'butao3':
                    newClasses = ['butao3', 'nonSelectedP', 'nonSelectedP', 'selectedP'];
                    setSelectedClass(newClasses)
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <section className={s.projetos}>
            <div className={s.tituloProjetos}>
                <h1>Projetos</h1>
                <p>Como um aspirante a desenvolvedor sem experiência profissional, possuo alguns projetos pessoais/acadêmicos que criei para aprender e aperfeiçoar as minhas habilidades</p>
            </div>
            <nav className={s.navegacaoProjetos}>
                <button onClick={changeB} class={selectedClass[1]} id='butao1'>
                    Calculadora
                </button>
                <button onClick={changeB} class={selectedClass[2]} id='butao2'>
                    Java.Bet
                </button>
                <button onClick={changeB} class={selectedClass[3]} id='butao3'>
                    FrubFy
                </button>
            </nav>

        </section>
    )
}