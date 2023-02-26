<?php
$arr = array(
    array('one',1,12),
    array('two',2,22),
    array('three',3,32),
);

echo $arr[2][1],'<br>';


$sites = array
(
    "runoob"=>array
    (
        "菜鸟教程",
        "http://www.runoob.com"
    ),
    "google"=>array
    (
        "Google 搜索",
        "http://www.google.com"
    ),
    "taobao"=>array
    (
        "淘宝",
        "http://www.taobao.com"
    )
);
print("<pre>"); // 格式化输出数组
print_r($sites);
print("</pre>");
print $sites['taobao'][0];