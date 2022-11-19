<?php

$url = $_SERVER["REQUEST_URI"];
$components = parse_url($url);
parse_str($components['query'], $results);
$moedaCode = $results["moeda"];

$json = file_get_contents("bd.json");
$data = json_decode($json, true);

$moeda = $data[$moedaCode];

// echo $data[$moeda]["name"];
// echo $data[$moeda]["name"];

echo "{";
echo "ask: " . $moeda["ask"];
echo " bid: " . $moeda["bid"];
echo " code: " . $moeda["code"];
echo " codein: " . $moeda["codein"];
echo " create_date: " . $moeda["create_date"];
echo " high: " . $moeda["high"];
echo " low: " . $moeda["low"];
echo " name: " . $moeda["name"];
echo " pctChange: " . $moeda["pctChange"];
echo " timestamp: " . $moeda["timestamp"];
echo " varBid: " . $moeda["varBid"];
echo "}";
