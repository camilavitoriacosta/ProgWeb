// Crie uma página em javaScript que recebe um campo text( use a tag textarea) que
// recebe um csv no seguinte formato(o texto é digitado pelo usuário nesse formato) :
// data,valor,produto
// onde:
// data é a data no seguinte formato dia/mês/ano
// valor é o valor em reais no com centavos separados por , ou por . (escolher um
// padrão e informar na página) +
// e o produto é um texto com o nome do produto.
// sua página deve ter um botão calcular que deve exibir a lista ordenada de maneira
// decrescente pela data, exibir o produto mais vendido, o produto mais caro, o produto com
// maior faturamento.

const secaoProdutosOrdenados = document.querySelector(".ordenado");
const secaoOutrosParametros = document.querySelector(".outrosParametros");
// const divProdutoMaisVendido = document.querySelector(".maisVendido");
// const divProdutoMaiorFaturamento = document.querySelector(".maiorFaturamento");

let texto;
let produtoMaisCaro;
let produtoMaisVendido;
let produtoMaiorFaturamento;
let produtos = [];
let produtosVendidos = [];


function calcular() {
    resetarResultados(); //resetar variaveis e html
    texto = document.querySelector("#csv").value.split(",");
    for (let index = 0, i = 0; index < texto.length; index += 3, i++) {
        produtos[i] = {
            "data": texto[index],
            "valor": texto[index + 1],
            "nome": texto[index + 2].trim(),
        }

        if (produtoMaisCaro == null || produtos[i].valor > produtoMaisCaro.valor) {
            produtoMaisCaro = produtos[i];
        }

        // procurar elemento na lista de produtosVendidos
        indexProduto = encontrarProduto(produtos[i]);

        if (indexProduto == -1) {
            produtosVendidos[produtosVendidos.length] = {
                "nome": produtos[i].nome,
                "quantidade": 1,
                "valor": produtos[i].valor
            }
        }
        else {
            produtosVendidos[indexProduto].quantidade++;
        }
    }
    encontrarProdutoMaisVendidoEMaiorFaturamento();
    ordernarPorDataDecrescente();


    let { thead, table, tbody } = criarTabela();

    let heading = document.createElement('tr');
    let heading_1 = criarColunaCabecalho("Categoria");
    let heading_2 = criarColunaCabecalho("Produto");
    let heading_3 = criarColunaCabecalho("Valor");

    heading.appendChild(heading_1);
    heading.appendChild(heading_2);
    heading.appendChild(heading_3);
    thead.appendChild(heading);


    secaoOutrosParametros.appendChild(table);

    criarLinhaCategoria("Mais vendido", produtoMaisVendido);
    criarLinhaCategoria("Mais caro", produtoMaisCaro);
    criarLinhaCategoria("Maior Faturamento", produtoMaiorFaturamento);


    function criarLinhaCategoria(tituloCategoria, produtoCategoria) {
        let row = document.createElement('tr');
        row.appendChild(criarColunaTabela(tituloCategoria));
        row.appendChild(criarColunaTabela(produtoCategoria.nome));
        row.appendChild(criarColunaTabela(produtoCategoria.valor));
        tbody.appendChild(row);
    }
}

function criarColunaCabecalho(texto) {
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = texto;
    return heading_1;
}

function criarTabela() {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    return { thead, table, tbody };
}

function resetarResultados() {
    texto = "";
    produtoMaisCaro = null;
    produtoMaisVendido = null;
    produtoMaiorFaturamento = null;
    produtos = [];
    produtosVendidos = [];

    secaoProdutosOrdenados.innerHTML = "";
    secaoOutrosParametros.innerHTML = "";
}


function encontrarProdutoMaisVendidoEMaiorFaturamento() {
    produtoMaisVendido = produtosVendidos[0];
    produtoMaiorFaturamento = produtosVendidos[0];
    let maiorFaturamento = obterFaturamento(produtosVendidos[0]);

    for (let i = 0; i < produtosVendidos.length; i++) {
        if (produtosVendidos[i].quantidade > produtoMaisVendido.quantidade) {
            produtoMaisVendido = produtosVendidos[i];
        }

        if (obterFaturamento(produtosVendidos[i]) > maiorFaturamento) {
            produtoMaiorFaturamento = produtosVendidos[i];
        }
    }
}

function ordernarPorDataDecrescente() {
    let { thead, table, tbody } = criarTabela();

    let heading = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Data";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Produto";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Valor";
    heading.appendChild(heading_1);
    heading.appendChild(heading_2);
    heading.appendChild(heading_3);
    thead.appendChild(heading);

    secaoProdutosOrdenados.appendChild(table);

    produtos.sort(compare);
    for (let index = 0; index < produtos.length; index++) {
        let row = document.createElement('tr');
        row.appendChild(criarColunaTabela(produtos[index].data));
        row.appendChild(criarColunaTabela(produtos[index].nome));
        row.appendChild(criarColunaTabela(produtos[index].valor));
        tbody.appendChild(row);
    }
}

function criarColunaTabela(texto) {
    let td = document.createElement('td');
    td.innerHTML = texto;
    return td;
}

function obterFaturamento(produto) {
    return produto.valor * produto.quantidade;
}

function encontrarProduto(produto) {
    for (let j = 0; j < produtosVendidos.length; j++) {
        if (produto.nome == produtosVendidos[j].nome) {
            return j;
        }
    }
    return -1
}

function compare(a, b) {
    dataFormatada1 = transformarParaData(a.data);
    dataFormatada2 = transformarParaData(b.data)

    return dataFormatada1.getTime() - dataFormatada2.getTime();
}

function transformarParaData(dataEmString) {
    var data = dataEmString.split('/');
    var stringFormatada = data[1] + '-' + data[0] + '-' + data[2];
    return new Date(stringFormatada);
}
