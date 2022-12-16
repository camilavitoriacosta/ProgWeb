const projetos = [
    {
        "titulo": "Atividade 01",
        "descricao": "Nesta atividade você deverá criar uma página HTML simples com o plano de ensino da disciplina.",
        "git": "https://github.com/camilavitoriacosta/ProgWeb/tree/master/Atividades/Atividade01",
        "video": "src/videos/atividade01.gif",
        "badges": [
            "html", "css"
        ]
    },
    {
        "titulo": "Atividade 02",
        "descricao": "Nesta atividade, você deverá tratar o evento de saída do mouse do quadrado de forma a restaurar a cor original usando JavaScript",
        "git": "https://github.com/camilavitoriacosta/ProgWeb/tree/master/Atividades/Atividade02",
        "video": "src/videos/atividade02.gif",
        "badges": [
            "html", "css"
        ]
    },
    {
        "titulo": "Atividade 03",
        "descricao": "Nesta atividade devesse implementar um paint com base no código dado. Ferramentas que devem ser adicionadas: circulo, balde de tinta e texto.",
        "git": "https://github.com/camilavitoriacosta/ProgWeb/tree/master/Atividades/Atividade03",
        "video": "src/videos/atividade03.gif",
        "badges": [
            "html", "css","js"
        ]
    },
    {
        "titulo": "Atividade 04",
        "descricao": "Nesta atividade você deverá modificar o arquivo modelo disponibilizado para atualizá-lo com seus dados. Além de colocar seus dados, você deverá inserir a informação de quando a página foi gerada pelo servidor, fazendo uso de PHP para isso.",
        "git": "https://github.com/camilavitoriacosta/ProgWeb/tree/master/Atividades/Atividade04",
        "video": "src/videos/atividade04.gif",
        "badges": [
            "html", "css", "php"
        ]
    },
    {
        "titulo": "Atividade 05",
        "descricao": "Nesta atividade vocês deverão ordernar um conjunto de palavras provido pelo usuário. Para isso já está pronta uma base e vocês devem simplesmente implementar a lógica de ordenação das palavras.",
        "git": "https://github.com/camilavitoriacosta/ProgWeb/tree/master/Atividades/Atividade05",
        "video": "src/videos/atividade05.gif",
        "badges": [
            "html", "css", "php"
        ]
    },
    {
        "titulo": "Prova 01 - Exercicio 01",
        "descricao": "Crie um pequena página usando javascript e html que converte Real para Dólar.",
        "git": "https://github.com/camilavitoriacosta/ProgWeb/tree/master/prova01/exercicio01",
        "video": "src/videos/prova01_exercicio01.gif",
        "badges": [
            "html", "css", "js"
        ]
    },
    {
        "titulo": "Prova 01 - Exercicio 02",
        "descricao": "Crie uma página e com um retângulo e usando javascript faça que a cada click do mouse o quadrado mude de cor, na seguinte ordem vermelho, azul, verde, rosa, amarelo e então volte para vermelho.",
        "git": "https://github.com/camilavitoriacosta/ProgWeb/tree/master/prova01/exercicio02",
        "video": "src/videos/prova01_exercicio02.gif",
        "badges": [
            "html", "css", "js"
        ]
    },
    {
        "titulo": "Prova 01 - Exercicio 03",
        "descricao": "Sua página deve ter um botão calcular que deve exibir a lista ordenada de maneira decrescente pela data, exibir o produto mais vendido, o produto mais caro, o produto com maior faturamento.",
        "git": "https://github.com/camilavitoriacosta/ProgWeb/tree/master/prova01/exercicio03",
        "video": "src/videos/prova01_exercicio03.gif",
        "badges": [
            "html", "css", "js"
        ]
    },
    {
        "titulo": "Prova 01 - Exercicio 04",
        "descricao": "Crie uma calculadora usando javascript, sua calculadora deve ser capaz de realizar as seguintes operações: multiplicação, divisão, soma, subtração, fatorial, raiz quadrada e exponenciação.",
        "git": "https://github.com/camilavitoriacosta/ProgWeb/tree/master/prova01/exercicio04",
        "video": "src/videos/prova01_exercicio04.gif",
        "badges": [
            "html", "css", "js"
        ]
    },
    {
        "titulo": "Prova 02 - Exercicio 01",
        "descricao": "Crie uma API rest usando php, sua api deve entregar as cotações de cada uma das moedas listadas no arquivo disponibilizado, baixe o arquivo e o use no seu projeto para as consultas da API.",
        "git": "https://github.com/camilavitoriacosta/ProgWeb/tree/master/prova02/exercicio01",
        "video": "src/videos/prova02_exercicio01.gif",
        "badges": [
            "html", "css", "php"
        ]
    },
    {
        "titulo": "Prova 02 - Exercicio 02",
        "descricao": "Crie uma calculadora usando javascript e php, sua calculadora deve ser capaz de realizar as seguintes operações: multiplicação, divisão, soma, subtração, fatorial, raiz quadrada e exponenciação. As operações devem ser computadas do lado do servidor.",
        "git": "https://github.com/camilavitoriacosta/ProgWeb/tree/master/prova02/exercicio02",
        "video": "src/videos/prova02_exercicio02.gif",
        "badges": [
            "html", "css", "js", "php"
        ]
    },
    {
        "titulo": "Prova 02 - Exercicio 03",
        "descricao": "Crie uma página em php que tenha um formulário com os seguintes campos: nome, sobrenome, cep, telefone, data de nascimento. Seu programa deve guardar esses dados em um arquivo .csv.",
        "git": "https://github.com/camilavitoriacosta/ProgWeb/tree/master/prova02/exercicio03",
        "video": "src/videos/prova02_exercicio03.gif",
        "badges": [
            "html", "css", "php"
        ]
    },
    {
        "titulo": "Prova 02 - Exercicio 04",
        "descricao": "Crie um programa em PHP que exibe os dados guardados em um arquivo .csv (exercicio 03).",
        "git": "https://github.com/camilavitoriacosta/ProgWeb/tree/master/prova02/exercicio04",
        "video": "src/videos/prova02_exercicio04.gif",
        "badges": [
            "html", "css", "php"
        ]
    },
]


const secaoProjetos = document.querySelector(".projetos");

projetos.forEach(projeto => {
    secaoProjetos.innerHTML = secaoProjetos.innerHTML  + criarCard(projeto);
});


function criarCard(projeto) {
    let card = "<div class='card-projeto'>"
    let video = "<img  alt='video projeto' src='" + projeto.video + "' class='card-projeto__video'></img>"
    let tecnologias = "<ul class='card-projeto__tecnologias'>"

    projeto.badges.forEach(badge => {
        tecnologias += "<li class='card-projeto__tecnologia'> <img src='src/icons/badge-" + badge + ".png' alt=''>"
    });

    let titulo = "<p class='card-projeto__titulo'>" + projeto.titulo + "</p>"
    let descricao = "<p class='card-projeto__descricao'>" + projeto.descricao + "</p>"
    let button = "<a href='" + projeto.git + "' class='btn btn-icon btn-roxo'> <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-github' viewBox='0 0 16 16'> <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' /> </svg> Acessar </a>"

    return card + video + tecnologias + "</ul>" + titulo + descricao + button + "</div>";
}