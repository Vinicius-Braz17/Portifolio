# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scipts

No diretório do projeto, rode:
`npm start`

Isso vai rodar o projeto em desenvolvimento no localhost 3000, ou seja, o seguinte link:
`http://localhost:3000`

A página vai recarregar sempre que você fizer uma atualização e salvar o arquivo

### Deploy da aplicação

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Sobre este projeto
Este projeto consiste em um portifólio pessoal para me apresentar para o mundo, servirá como um currículo, porém em um formato diferente do tradicional. Pois, além de conter as informações de um CV convencional, mostrará na prática as minhas habilidades de programação e desenvolvimento web utilizando a biblioteca ReactJS.

Pretendo finalizar este projeto ainda em fevereiro e fazer o deploy dele para a internet, e fazer um post para o linkedin, mostrando as tecnologias utilizadas e disponibilizando o link para todos acessarem

### Módulos

## Estilização: 
Procurei estilizar o site de uma maneira clean e moderna, utilizando as cores branco, preto, azul claro e um tom de violeta, o site possui varias animações, como hovers e actives desenvolvidos com CSS3.

A tela inicial conta com 2 animações principais, as pequenas partículas brancas de fundo que se movem ao abrir o site, foi desenvolvida com JS, e o efeito de digitação do meu nome ao iniciar o site, também feito com CSS.

Eu busquei sempre criar hovers fluidos e animados, mostrando sombras e dando o efeito de distancia ao passar o mouse em cima do botao

Easter-Egg: todos os logos do React presentes na página contém uma animação de "spin" ao clicar neles, clique em um logo 3x seguidas e você vai ver que eles vão girar por um tempo e depois parar


## Conteúdo
O site contém 5 partes principais:

### Navegação:
Barra de navegação, mostrada ao abrir o site na parte superior, contém um logo do react (animado com spin), textos que levam às diferentes partes da página, criadas com o componente "Link", do "react-scroll", e, no lado direito, há duas bandeiras (Brasil e EUA), que servem para mudar a linguagem do site, ferramenta feita utilizando UseState e renderização condicional

### Inicio Home:
página inicial do site, mostrada ao abrir, possui um fundo com um degradê em roxo e preto, possui uma animação de pequenas particulas se movendo, e também um efeito de digitação lenta do meu nome ao iniciar a página

### Sobre Mim:
Segunda parte do site, mostra uma seção dividida em dois, em 32%-68% da tela. Ao lado esquerdo, há botões que mostram tópicos gerais sobre mim, e ao lado direto, há a descrição destes tópicos em 3 cards animados com fade-in e fade-out ao clicar em um dos botões do painel da esquerda. E na divisória destes dois paineis, há uma foto minha.

### Missão, visão e valores:
3ª seção do site, são expostos 3 cards com efeito de hover-flip, o primeiro mostra a minha missão, o meu objetivo como profissional, qual o sentido do meu trabalho. O segundo card mostra minha visão, como me vejo atuando nesta área em algum tempo, qual o meu sonho de realização profissional. E o terceiro mostra os meus valores, meus princípios, o que eu valorizo de comportamentos profissionalmente

### Projetos:
Módulo que mostra os meus projetos pessoais/acadêmicos, tem um menu de navegação vertical com os nomes de cada projeto, e o conteúdo é mostrado em uma section dividido em duas partes, uma de imagens (esquerda), e outra com a descrição e tecnologias utilizadas no projeto (direita)

### Contato:
ultima parte do site, consiste em um elemento Footer extendido, na parte da direita contém um icone do React (animado com spin), meu nome, ano de desenvolvimento do projeto e meus meios de comunicação (Linkedin, WhatsApp e Email). Na parte da esquerda possui uma ferramenta de mensagens via formulário HTML, foi utilizado o site form Submit (https://formsubmit.co), o usuário preenche o formulário com nome, email e mensagem, e estas informações chegam em meu email.

