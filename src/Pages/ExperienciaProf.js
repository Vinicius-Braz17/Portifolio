import s from "./ExperienciaProf.module.css";
import frubana from '../images/logo.svg'

export default function ExperienciaProf() {
  return (
    <>
    
        <div class={s.item1}>Experiências profissionais</div>
    <section className={s.experiencias}>
        <div class={s.item2}>
            <main>
              <img alt='logo frubana' src={frubana}/>
              <hr style={{width: '80%'}}></hr>
              <h4>Jovem aprendiz administrativo</h4>
              <p>Março/2023 &#9830; Maio/2024 (o momento)</p>
            </main>
        </div>
        <div class={s.item3}>
            
        </div>
    </section>
    </>
  );
}
