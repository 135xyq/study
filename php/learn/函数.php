<?php
function fn1(){
    echo '这是一个函数！';
}
fn1();
echo '<br>';

echo '--------------------------------';
echo '<br>';

function sum($a,$b){
    return $a +$b;
}

echo sum(1,2),'<br>';
echo sum(-1,5),'<br>';

