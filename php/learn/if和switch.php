<?php
$str1 = 2;
if($str1 > 2){
    echo '$str1大于2';
}else{
    echo '$str1不大于2';
}
echo "<br>";
switch ($str1){
    case 1:
        echo "1";
        break;
    case 2:
        echo "2";
        break;
    default:
        echo "default";
}