<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Exercicio 03</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <main class="container">
    <form method="post" class="formulario">
      <div class="informacoes">
        <label for="nome" class="informacoes__label"> Nome </label>
        <input type="text" name="nome" id="nome" class="informacoes__input" required />
      </div>
      <div class="informacoes">
        <label for="sobrenome" class="informacoes__label"> Sobrenome </label>
        <input type="text" name="sobrenome" id="sobrenome" class="informacoes__input" required />
      </div>
      <div class="informacoes">
        <label for="cep" class="informacoes__label"> CEP </label>
        <input type="text" name="cep" id="cep" class="informacoes__input" required />
      </div>
      <div class="informacoes">
        <label for="telefone" class="informacoes__label"> Telefone </label>
        <input type="tel" name="telefone" id="telefone" class="informacoes__input" required />
      </div>
      <div class="informacoes">
        <label for="dataNascimento" class="informacoes__label"> Data de Nascimento </label>
        <input type="date" name="dataNascimento" id="dataNascimento" class="informacoes__input" required />
      </div>

      <button class="btn"> Enviar </button>
    </form>
  </main>
  <?php
  if ($_POST) {
    // criando ou abrindo o arquivo csv
    $arquivo = fopen('file.csv', 'a+');

    // inserindo cabecalhos
    // fputcsv($arquivo, [
    //   "NOME",
    //   "SOBRENOME",
    //   "CEP",
    //   "TELEFONE",
    //   "DATA DE NASCIMENTO"
    // ]);

    // dados post
    $dados = [
      $_POST["nome"],
      $_POST["sobrenome"],
      $_POST["cep"],
      $_POST["telefone"],
      $_POST["dataNascimento"],
    ];

    // inserindo linha no arquivo
    fputcsv($arquivo, $dados);

    //fechar arquivo
    fclose($arquivo);
  }

  ?>
</body>

</html>