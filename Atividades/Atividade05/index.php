<?php
error_reporting(E_ERROR | E_PARSE);
/**
 *             =========================  DESCRIÇÃO DA ATIVIDADE  =========================
 * 
 * - Nesta atividade você deverá ordernar uma lista de palavras fornecida pelo usuário.
 * 
 * - Para isso já foi provida uma apresentação em html+css restando somente a implementação da lógica do problema.
 * 
 * - No trecho PHP abaixo é possível observar a presença de duas variáveis:
 *      $listaOriginal -> variável que irá receber a lista de palavras originais e que pode ser obtida a partir de $_POST
 *      $listaOrdenada -> uma cópia da lista original, mas com as palavras ordenadas
 * 
 * - Portanto, nessa atividade você deve pegar a lista de palavras recebida na requisição e ordená-las.
 * 
 *   DICA: PHP já oferece funções prontas para manipulação de arrays.
 *         https://www.php.net/manual/pt_BR/ref.array.php
 */
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/mvp.css">
    <title>Ordenação de Listas de Palavras</title>
    <link rel="stylesheet" href="estilos.css">
</head>

<body>
    <?php
        function ordenar($a, $b)
        {
            if($a=="" || $b=="") return -1;
            if ($a == $b) return 0;
            return ($a < $b) ? -1 : 1;
        }

        if($_POST['palavra'] != null){
            $listaOrdenada = $_POST['palavra'];
            usort($listaOrdenada, "ordenar");
        }
    ?>
    <form method="post" class="container">
        <div class="panel">
            <h1>Palavras</h1>
            <?php for ($i = 0; $i < 10; $i++) { ?>
                <input type="text" name="palavra[]" value="<?= $listaOriginal[$i] ?>" placeholder="<?= 'Palavra #' . ($i + 1) ?>">
            <?php } ?>
        </div>
        <button type="submit">Ordenar >></button>
        <div class="panel">
            <h1>Palavras Ordenadas</h1>
            <?php for ($i = 0; $i < 10; $i++) { ?>
                <input type="text" value="<?= $listaOrdenada[$i] ?>" placeholder="<?= 'Palavra #' . ($i + 1) ?>" disabled>
            <?php } ?>
        </div>
    </form>


</body>

</html>