<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MEU_NOME - Perfil</title>
  <link rel="stylesheet" href="estilos.css">
</head>

<body>
  <div class="conteudo">
    <div class="foto"><img src="foto.png" alt=""></div>
    <div class="apresentacao">
      <span class="nome"><?= "Camila" ?></span>
      <span class="curso"><?= "Ciência da Computação" ?></span>
      <span class="email"><?= "camila.vitoria@ufms.br" ?></span>
    </div>
  </div>
  <footer>
    Página gerada 
    <?php
      date_default_timezone_set("America/Campo_Grande");
      echo date("d-m-y");
      echo " as ";
      echo date("h:i:s");
    ?>
    <!-- Insira aqui o texto abaixo substituindo pelo conteudo correto -->
    
    <!-- Texto: Página gerada em dia/mes/ano as hora:minuto:segundo -->
    <!-- Você deverá usar PHP e configurar para o timezone de Campo Grande/MS -->
  </footer>
</body>

</html>