import s from "./ExperienciaProf.module.css";
import frubana from '../images/logo.svg'

export default function ExperienciaProf({lang}) {
  return (
    <section id='3' style={{backgroundColor: '#383838', padding: '80px 0'}}>
  
        <div class={s.item1}>
          {lang === 'pt' ? (
            <>
              Experiências profissionais 
            </>
            ) : (
              <>
                Professional Experiences
              </>
            )
          }
        </div>
        <hr style={{width: '80%', margin: '0 auto', color: 'white'}} ></hr>
        <br></br>
        <br></br>
    <section className={s.experiencias}>
        <div class={s.item2}>
            <main>
              <a href="https://www.linkedin.com/company/frubana/mycompany/" target="_blank" rel='noreferrer' title="Conheça a empresa">
                <img alt='logo frubana' src={frubana}/>
              </a>
              <hr style={{width: '80%', color: 'white'}}></hr>
              <h4>
                <b style={{color: 'orange'}}>
                  {lang === 'pt' ? (
                    <>Jovem </>
                  ) : (
                    <>Young </>
                  )}
                </b>
                <b style={{color: 'lightgreen'}}>
                {lang === 'pt' ? (
                    <>Aprendiz </>
                  ) : (
                    <>administrative  </>
                  )}
                </b>
                <b style={{color: 'green'}}>
                {lang === 'pt' ? (
                    <>Administrativo </>
                  ) : (
                    <>apprentice  </>
                  )}
                </b>
              </h4>
              <p>Março/2023 &#8226; {/*&#9830;*/} Maio/2024 
              {lang === 'pt' ? (
                <> (emprego atual)</>) : (<> (actual job)</>)
              }
              </p>
            </main>
        </div>
        <div class={s.item3}>
            <main>
              <p>
                {lang === 'pt' ? (
                  <>
                    Frubana é uma start-up de tecnologia de distribuição de alimentos para bares, restaurantes, mercados, entre outros.
                <br></br> <br></br>
                Esta foi a minha primeira experiência profissional, desempenhei minhas funções no departamento de RH, na área de admissões.
                <br></br><br></br>
                <strong>Principais atividades:</strong> Conferência e validação de documentos, criação e manutenção de planilhas de controle e planilhas automatizadas, incluindo criação de APIs para conectar sistemas de gerenciamento com planilhas do google. Constante comunicação com as equipes de RH para alinhamento e resolução de eventuais contratempos, identificação de melhorias dentro do processo e apresentação de projetos em reuniões gerais.
                  </>
                ) : (
                  <>
                Frubana is a food distribution technology start-up for bars, restaurants, markets, among others.
                <br></br> <br></br>
                This was my first professional experience, I did my functions in the HR department, in the admissions area.
                <br></br> <br></br>
                <strong>Main Activities:</strong> Conference and validation of documents, creation and maintenance of control and automated spreadsheets, including creation of APIs to connect management systems with Google spreadsheets. Constant communication with HR teams to align and solve any problems, improvements identification within the process and present projects at general meetings.
                  </>
                )}
                
              </p>
              <br></br>
              <p style={{fontSize: '13px'}}>
                {lang === 'pt' ? (
                  <>
                    Google Sheets &#8226; Comunicação &#8226; Resolução de problemas
                  </>
                ) : (
                  <>
                    Google Sheets &#8226; Communication &#8226; Problems solving
                  </>
                )}
              </p>
            </main>
        </div>
    </section>
    </section>
  );
}
