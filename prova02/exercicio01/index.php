<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 01</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php $urlBase = "http://localhost/202119040599-CamilaCosta/exercicio01/"; ?>
    <main class="container">
        <h1> API: </h1>
        <span>Modo de uso: trocar no arquivo a variavel $urlBase para o seu caso no arquivo index.php </span>

        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=ARS'> GET </a>
            <p class="url"> /moedas?moeda=ARS </p>
            <span class="descricao"> Cotação: Peso Argentino/Real Brasileiro </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=AUD'> GET </a>
            <p class="url"> /moedas?moeda=AUD </p>
            <span class="descricao"> Cotação: Dólar Australiano/Real Brasileiro </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=BTC'> GET </a>
            <p class="url"> /moedas?moeda=BTC </p>
            <span class="descricao"> Cotação: Bitcoin/Real Brasileiro </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=CAD'> GET </a>
            <p class="url"> /moedas?moeda=CAD </p>
            <span class="descricao"> Cotação: Dólar Canadense/Real Brasileiro </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=CHF'> GET </a>
            <p class="url"> /moedas?moeda=CHF </p>
            <span class="descricao"> Cotação: Franco Suíço/Real Brasileiro </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=CNY'> GET </a>
            <p class="url"> /moedas?moeda=CNY </p>
            <span class="descricao"> Cotação: Yuan Chinês/Real Brasileiro </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=DOGE'> GET </a>
            <p class="url"> /moedas?moeda=DOGE </p>
            <span class="descricao"> Cotação: Dogecoin/Real Brasileiro </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=ETH'> GET </a>
            <p class="url"> /moedas?moeda=ETH </p>
            <span class="descricao"> Cotação: Ethereum/Real Brasileiro </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=EUR'> GET </a>
            <p class="url"> /moedas?moeda=EUR </p>
            <span class="descricao"> Cotação: Euro/Real Brasileiro </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=GBP'> GET </a>
            <p class="url"> /moedas?moeda=GBP </p>
            <span class="descricao"> Cotação: Libra Esterlina/Real Brasileiro </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=ILS'> GET </a>
            <p class="url"> /moedas?moeda=ILS </p>
            <span class="descricao"> Cotação: Novo Shekel Israelense/Real Brasileiro </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=JPY'> GET </a>
            <p class="url"> /moedas?moeda=JPY </p>
            <span class="descricao"> Cotação: Iene Japonês/Real Brasileiro </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=LTC'> GET </a>
            <p class="url"> /moedas?moeda=LTC </p>
            <span class="descricao"> Cotação: Litecoin/Real Brasileiro </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=USD'> GET </a>
            <p class="url"> /moedas?moeda=USD </p>
            <span class="descricao"> Cotação: Dólar Americano/Real Brasileiro </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=USDT'> GET </a>
            <p class="url"> /moedas?moeda=USDT </p>
            <span class="descricao"> Cotação: Dólar Americano/Real Brasileiro Turismo </span>
        </div>
        <div class="container-link">
            <a class="link" href='<?php $urlBase ?>buscar.php?moeda=XRP'> GET </a>
            <p class="url"> /moedas?moeda=XRP </p>
            <span class="descricao"> Cotação: XRP/Real Brasileiro </span>
        </div>
    </main>
</body>

</html>