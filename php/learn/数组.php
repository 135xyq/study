<?php

// 数值数组
// count()获取数组的长度
$color = array('red','yellow','blue','black');
for($i = 0; $i < count($color);$i++){
    echo $color[$i],'<br>';
}

// 关联数组
$person = array('jack'=>23,'ben'=>18,'xyq'=>21);
echo $person['xyq'],'<br>';

foreach ($person as $name=>$age){
    echo 'name: '.$name.'   '.'age: '.$age,'<br>';
}
echo count($person);