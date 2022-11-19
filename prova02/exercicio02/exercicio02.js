const visor = document.querySelector(".visor");

function inserir(texto) {
    visor.value += texto;
}

function limpar() {
    visor.value = "";
}


// let conta = "";
// let numero = "";
// let posicaoUltimaOperacao = -1;

// function calcular() {
//     let operacao = visor.innerHTML;
//     let raiz = false;

//     for (let index = 0; index < operacao.length; index++) {
//         // operacoes com dois numeros
//         if (operacao[index] == "+" || operacao[index] == '-' || operacao[index] == '*' || operacao[index] == "/") {
//             if (raiz) {
//                 calcularRaizQuadrada(numero);
//                 raiz = false;
//             } else {
//                 conta += numero;
//             }
//             numero = "";

//             conta += operacao[index];
//         }
//         else if (operacao[index] == "^") {
//             if (raiz) {
//                 calcularRaizQuadrada(numero);
//                 raiz = false;
//             } else {
//                 conta += numero;
//             }
//             numero = "";
//             conta += "**";
//         }
//         // operacoes unarias: fatorial e raiz quadrada
//         else if (operacao[index] == "!") {
//             if (raiz) {
//                 calcularRaizQuadrada(numero);
//                 raiz = false;
//             } else {
//                 conta += fatorial(parseInt(numero)) + "";
//             }
//             numero = "";
//         }
//         else if (operacao[index] == '√') {
//             raiz = true;
//         }
//         else { //numero
//             numero += operacao[index];
//         }
//     }

//     if (raiz) {
//         calcularRaizQuadrada(numero);
//         raiz = false;
//         numero = "";
//     }

//     if (numero != "") {
//         conta += numero;
//         numero = "";
//     }

//     console.log(conta);
//     resolverCalculo();
// }

// function resolverCalculo() {
//     visor.innerHTML = eval(conta);

//     // limpar variaveis
//     conta = "";
//     numero = "";
//     posicaoUltimaOperacao = -1;
// }

// function calcularRaizQuadrada(numero) {
//     conta += Math.sqrt(parseInt(numero)) + "";
// }

// function fatorial(fatorial) {
//     let resultado = 1;
//     for (var i = fatorial; i > 1; i--) {
//         resultado *= i;
//     }
//     return resultado;
// }