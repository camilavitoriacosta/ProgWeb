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

const divOrdenado = document.querySelector(".ordenado");
const divProdutoMaisCaro = document.querySelector(".maisCaro");
const divProdutoMaisVendido = document.querySelector(".maisVendido");
const divProdutoMaiorFaturamento = document.querySelector(".maiorFaturamento");

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
            "nome": texto[index].trim(),
            "data": texto[index + 1],
            "valor": texto[index + 2],
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

    divProdutoMaisCaro.innerHTML = "Produto mais caro: " + produtoMaisCaro.nome + ", " + produtoMaisCaro.valor;
    divProdutoMaiorFaturamento.innerHTML = "Produto com maior faturamento: " + produtoMaiorFaturamento.nome + ", " + produtoMaiorFaturamento.valor;
    divProdutoMaisVendido.innerHTML = "Produto mais vendido: " + produtoMaisVendido.nome + ", " + produtoMaisVendido.valor;

}

function resetarResultados() {
    texto = "";
    produtoMaisCaro = null;
    produtoMaisVendido = null;
    produtoMaiorFaturamento = null;
    produtos = [];
    produtosVendidos = [];

    divOrdenado.innerHTML = "";
    divProdutoMaisCaro.innerHTML = "";
    divProdutoMaisVendido.innerHTML = "";
    divProdutoMaiorFaturamento.innerHTML = "";
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
    produtos.sort(compare);
    for (let index = 0; index < produtos.length; index++) {
        divOrdenado.innerHTML += produtos[index].nome + ", " + produtos[index].data + ", " + produtos[index].valor + " | ";
    }
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
