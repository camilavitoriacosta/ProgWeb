<?php
$json = file_get_contents("bd.json");
$data = json_decode($json, true);


// var_dump($data);
echo "<pre>";
echo "{"."\n";
foreach ($data as $moeda) {
    echo "\t{"."\n";
    echo "\t\task: ".$moeda["ask"]."\n";
    echo "\t\tbid: ".$moeda["bid"]."\n";
    echo "\t\tcode: ".$moeda["code"]."\n";
    echo "\t\tcodein: ".$moeda["codein"]."\n";
    echo "\t\tcreate_date: ".$moeda["create_date"]."\n";
    echo "\t\thigh: ".$moeda["high"]."\n";
    echo "\t\tlow: ".$moeda["low"]."\n";
    echo "\t\tname: ".$moeda["name"]."\n";
    echo "\t\tpctChange: ".$moeda["pctChange"]."\n";
    echo "\t\ttimestamp: ".$moeda["timestamp"]."\n";
    echo "\t\tvarBid: ".$moeda["varBid"]."\n";
    echo "\t}"."\n";
}

echo "}";
echo "</pre>";

?>


<!-- 
"ARS": {
    "ask": "0.0396",
    "bid": "0.0396",
    "code": "ARS",
    "codein": "BRL",
    "create_date": "2022-05-27 17:59:21",
    "high": "0.04",
    "low": "0.0394",
    "name": "Peso Argentino/Real Brasileiro",
    "pctChange": "-0.75",
    "timestamp": "1653685161",
    "varBid": "-0.0003"
  }, -->