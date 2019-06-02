<?php

$file = "vote.csv";

$current = file_get_contents($file);

$val = $_POST["val"];
$clicked = $_POST["clicked"];

$current .= $val.";".$clicked."\n";
file_put_contents($file, $current);
?>