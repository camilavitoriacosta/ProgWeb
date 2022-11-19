<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Exercicio 04</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <main class="container">

  </main>
  <?php
  // criando ou abrindo o arquivo csv
  $arquivo = fopen('file.csv', 'r');

  while (($data = fgetcsv($arquivo)) !== FALSE) {
    $array[] = $data;
  }

  //fechar arquivo
  fclose($arquivo);

  // criar tabela para exibir dados
  echo "<div class='container'>";
  echo "<table>";
  foreach ($array as $linha) {
    echo "<tr>";
    foreach ($linha as $valor) {
      echo "<td>";
      print_r(htmlspecialchars($valor));
      echo "</td>";
    }
    echo "</tr>";
  }
  echo "</table>";
  echo "</div>";

  ?>
</body>

</html>