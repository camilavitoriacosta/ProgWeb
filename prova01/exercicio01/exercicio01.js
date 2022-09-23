function calcular() {
    cotacaoDolar = parseFloat(document.getElementById("cotacaoDolar").value);
    valorReais = parseFloat(document.getElementById("real").value);

    reaisEmDolares = (valorReais / cotacaoDolar).toFixed(2);

    document.querySelector(".resultado").innerHTML = "Resultado: $" + reaisEmDolares;
}