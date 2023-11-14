<?php
$x = 1;
$y = 2;
function test($z){
    global $x,$y;
    $y = $y + 10;
    echo $z;
    echo PHP_EOL;
}

test(6);
echo $y;