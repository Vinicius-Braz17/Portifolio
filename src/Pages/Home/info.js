import react from '../../images/FotoCurriculo.png'
import br from '../../images/br.jpg'
import js from '../../images/js.png'
import java from '../../images/Java-Logo.png'
import UAM from '../../images/CDC.jpg'
import op from '../../images/procurando.png'
import MA from '../../images/metAg.jpg'
import Windows from '../../images/window.jpg'
import git from '../../images/github.jpg'
import aprendizado from '../../images/aprendizado.jpg'
import comunication from '../../images/comunicacao.jpg'
import raciocinio from '../../images/raciocinio.jpg'

export const textos = [
    [ /* Texto sobre mim em PORTUGUES */
        <>
            Sobre mim
        </>,
        <>
            <img alt='imagem react' src={UAM} />

            <h3>Ensino superior</h3>
            <hr></hr>
            <p>
                Cursando bacharelado em <strong>ciência da computação</strong> na Universidade Anhembi Morumbi (UAM)
            </p>
        </>
        ,
        <>
            <img alt='imagem react' src={op} />

            <h3>Buscando oportunidades</h3>
            <hr></hr>
            <p>
                Em busca de oportunidades para entrar no mercado de desenvolvimento Web (front e/ou back-end)
            </p>

        </>
        ,
        <>
            <img alt='imagem react' src={br} />

            <h3>Patriora</h3>
            <hr></hr>

            <p>
                é o trikas e nao tem jeito
            </p>
        </>,
        /* Texto sobre mim em Inglês */
        <>
            About Me
        </>,
        <>
            <img alt='imagem react' src={UAM} />

            <h3>Higher Degree</h3>
            <hr></hr>

            <p>
                Cursin bachareloors in <strong>computer science</strong> at Universidade Anhembi Morumbi (UAM)
            </p>
        </>
        ,
        <>
            <img alt='imagem react' src={op} />

            <h3>Searching for opportunities</h3>
            <hr></hr>

            <p>
                Looking for opportunities to enter in the web development market (front or back-end)
            </p>

        </>
        ,
        <>
            <img alt='imagem react' src={br} />

            <h3>Ingles</h3>
            <hr></hr>

            <p>
                is the trikas and theres no way
            </p>
        </>
    ],
    [/*Texto meus conhecimentos em PORTUGUES */
        <>
            Meus conhecimentos
        </>,
        <>
            <img alt='imagem react' src={MA} />

            <h3>Metodologias Ágeis</h3>
            <hr></hr>

            <p>
                Aplicação e acompanhamento de processos:<br></br>
                - KanBan<br></br>
                - Scrum
            </p>

        </>
        ,
        <>
            <img alt='imagem react' src={Windows} />

            <h3>Windows S.O.</h3>
            <hr></hr>

            <p>
                Conhecimento no sistema operacional Windows, habilidade com CMD (prompt de comando), powerSheel e organização de diretórios
            </p>

        </>,
        <>
            <img alt='imagem react' src={git} />

            <h3>GitHub</h3>
            <hr></hr>

            <p>
                Organização de códigos para desenvolvimento e backup do projeto, aplicação pelo git bash
            </p>
        </>,

        /*Texto meus conhecimentos em INGLES */
        <>
            My Knowlodges
        </>,
        <>
            <img alt='imagem react' src={MA} />

            <h3>Metodologias Ágeis</h3>
            <hr></hr>

            <p>
                skills in KanBan, Scrum, 5S
            </p>

        </>
        ,
        <>
            <img alt='imagem react' src={Windows} />

            <h3>Windows O.S.</h3>
            <hr></hr>

            <p>
                Knowledge of the Windows operating system, knowing CMD, PowerSheel and directory organization
            </p>

        </>,
        <>
            <img alt='imagem react' src={git} />

            <h3>GitHub</h3>
            <hr></hr>

            <p>
                Organization (pushes and commits) of codes for project development and backup, application using git bash
            </p>

        </>
    ],
    [/*Texto Hard Skills em PORTUGUES */
        <>
            Hard Skills
        </>,
        <>
            <img alt='imagem react' src={react} />

            <h3>ReactJS</h3>
            <hr></hr>

            <p>
                Conhecimento na biblioteca framework reactJS, para desenvolvimento de interfaces web, utilizando JavaScript
            </p>
            <i style={{ fontSize: '13px' }}>
                Este site foi desenvolvido com a biblioteca ReactJS
            </i>

        </>
        ,
        <>
            <img alt='imagem react' src={js} />

            <h3>JavaScript</h3>
            <hr></hr>

            <p>
                Linguagem de programação front e back-end, conhecimento em programação orientada a objetos, classes, e habilidade em resolução de problemas e criação de algoritmos funcionais
            </p>

        </>,
        <>
            <img alt='imagem react' src={java} />

            <h3>Java</h3>
            <hr></hr>

            <p>
                Linguagem de programação back-end, orientada a objetos, habilidade em resolução de problemas, classes, objetos e funções. habilidade em criação de interfaces com a biblioteca Swing
            </p>
        </>,

        /*Texto Hard Skills em INGLES */
        <>
            Hard Skills
        </>,
        <>
            <img alt='imagem react' src={react} />

            <h3>ReactJS</h3>
            <hr></hr>

            <p>
                Knowledge of the reactJS framework library for developing web interfaces using JavaScript
            </p>
            <i style={{ fontSize: '13px' }}>
                This website is developed with ReactJS library
            </i>

        </>
        ,
        <>
            <img alt='imagem react' src={js} />

            <h3>JavaScript</h3>
            <hr></hr>

            <p>
                Front and back-end programming language, Knowlodge in object-oriented programming, classes ans skills in problem-solving and creation of functional algorithims
            </p>

        </>,
        <>
            <img alt='imagem react' src={java} />

            <h3>Java</h3>
            <hr></hr>

            <p>
                Back-end programming language, object-oriented, problem-solving skills, classes, objects and functions. Skills in Swing library interface creation
            </p>

        </>
    ],
    [/*Texto Soft Skills em PORTUGUES */
        <>
            Soft Skills
        </>,
        <>
            <img alt='imagem react' src={aprendizado} />

            <h3>Aprendizado</h3>
            <hr></hr>

            <p>
                Facilidade em aprender, aptidão para aprender sozinho, auto-ditada e muito ânimo e engajamento para aprender coisas novas e enfrentar desafios
            </p>
        </>,
        <>
            <img alt='imagem react' src={comunication} />

            <h3>Comunicação e relacionamentos</h3>
            <hr></hr>

            <p>
                Comunicação assertiva, clara e objetiva, bom relacionamento com pessoas, bom trabalho em grupo
            </p>
        </>,
        <>
            <img alt='imagem react' src={raciocinio} />

            <h3>Raciocinio lógico</h3>
            <hr></hr>

            <p>
                Habilidade em lidar com atividades e desafios lógicos, bom raciocinio matemático e aritmético e identificação de padrões
            </p>
        </>,
        
        /*Texto Soft Skills em INGLÊS */
        <>
            Soft Skills
        </>,
        <>
            <img alt='imagem react' src={aprendizado} />

            <h3>Aprendizado</h3>
            <hr></hr>

            <p>
                Facilidade em aprender, aptidão para aprender sozinho, auto-ditada e muito ânimo e engajamento para aprender coisas novas e enfrentar desafios
            </p>
        </>,
        <>
            <img alt='imagem react' src={comunication} />

            <h3>Comunicação e relacionamentos</h3>
            <hr></hr>

            <p>
                Comunicação assertiva, clara e objetiva, bom relacionamento com pessoas, bom trabalho em grupo
            </p>
        </>,
        <>
            <img alt='imagem react' src={raciocinio} />

            <h3>Raciocinio lógico</h3>
            <hr></hr>

            <p>
                Habilidade em lidar com atividades e desafios lógicos, bom raciocinio matemático e aritmético e identificação de padrões
            </p>
        </>

    ]
]