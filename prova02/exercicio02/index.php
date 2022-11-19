<!-- Crie uma calculadora usando javascript e php, sua calculadora deve ser capaz de
realizar as seguintes operações : multiplicação, divisão, soma, subtração, fatorial, raiz
quadrada e exponenciação. Além disso, sua calculadora deve ter a interface com botões
com os números de 0 a 9, um botão para cada operação e um botão com o símbolo = que
mostra os resultados. Sua calculadora deve ter o comportamento parecido com essa :
https://www.calculadora-online.xyz/ . As operações devem ser computadas do lado do
servidor ou seja cada operação deve enviar os dados para um script php e esse script deve
fazer o cálculo e retornar para o programa em javascript. -->

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Exercicio 02 - Calculadora</title>
  <link rel="stylesheet" href="exercicio02.css" />
  <script src="exercicio02.js" defer></script>
</head>

<body>
  <form method="post">
    <div class="calculadora">
      <?php
      if ($_POST) {
        $resultado = resolverCalculo($_POST["operacao"]);
        echo '<input class="visor" name="operacao" value="' . $resultado . '"/>';
      } else {
        echo "<input class='visor' name='operacao'></input>";
      }
      ?>

      <div class="teclado">
        <table>
          <tr>
            <td colspan="2"><button type="button" onclick="limpar()">CE</button></td>
            <td><button type="button" onclick="inserir('+')">+</button></td>
            <td><button type="button" onclick="inserir('-')">-</button></td>
            <td><button type="button" onclick="inserir('/')">/</button></td>
          </tr>
          <tr>
            <td>
              <button type="button" onclick="inserir('7')">7</button>
            </td>
            <td>
              <button type="button" onclick="inserir('8')">8</button>
            </td>
            <td>
              <button type="button" onclick="inserir('9')">9</button>
            </td>
            <td><button type="button" onclick="inserir('*')">*</button></td>
            <td><button type="button" onclick="inserir('^')">^</button></td>
          </tr>
          <tr>
            <td><button type="button" onclick="inserir('4')">4</button></td>
            <td>
              <button type="button" onclick="inserir('5')">5</button>
            </td>
            <td>
              <button type="button" onclick="inserir('6')">6</button>
            </td>
            <td><button type="button" onclick="inserir('!')">!</button></td>
            <td><button type="button" onclick="inserir('√')">√</button></td>
          </tr>
          <tr>
            <td>
              <button type="button" onclick="inserir('1')">1</button>
            </td>
            <td>
              <button type="button" onclick="inserir('2')">2</button>
            </td>
            <td>
              <button type="button" onclick="inserir('3')">3</button>
            </td>
            <td>
              <button type="button" onclick="inserir('0')">0</button>
            </td>
            <td><button type="submit" onclick="calcular()">=</button></td>
          </tr>
        </table>
      </div>
    </div>
  </form>
  <?php
  function calcularFatorial($num)
  {
    $resultado = 1;
    for ($i = $num; $i > 1; $i--) {
      $resultado *= $i;
    }
    return $resultado;
  }

  function resolverCalculo($operacao)
  {
    //binarias
    if (strpos($operacao, "+") != false) {
      $operandos = explode("+", $operacao);
      $resultado = $operandos[0] + $operandos[1];
      return strval($resultado);
    } else if (strpos($operacao, "-") != false) {
      $operandos = explode("-", $operacao);
      $resultado = $operandos[0] - $operandos[1];
      return strval($resultado);
    } else if (strpos($operacao, "/") != false) {
      $operandos = explode("/", $operacao);
      $resultado = $operandos[0] / $operandos[1];
      return strval($resultado);
    } else if (strpos($operacao, "*") != false) {
      $operandos = explode("*", $operacao);
      $resultado = $operandos[0] * $operandos[1];
      return strval($resultado);
    } else if (strpos($operacao, "^") != false) {
      $operandos = explode("^", $operacao);
      $resultado = pow($operandos[0], $operandos[1]);
      return strval($resultado);
      // unarias
    } else if (strpos($operacao, "!") != false) {
      $operador = substr($operacao, 0, -1);
      return  calcularFatorial($operador);
    } else {
      $operandos = explode("√", $operacao);
      return  sqrt(floatval($operandos[1]));
    };
  }
  ?>
</body>

</html>