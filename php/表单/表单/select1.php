<?php

$value = isset($_GET['site']) ? htmlspecialchars($_GET['site']):'';
if($value){
    if($value === '淘宝'){
        echo '淘宝网';
    }else if($value === '百度'){
        echo '百度网';
    }else if($value === '腾讯'){
        echo '腾讯网';
    }
} else {
    ?>
    <form action="" method="get">
        <label>
            <select name="site">
                <option value="">选择一个站点:</option>
                <option value="淘宝">淘宝</option>
                <option value="百度">百度</option>
                <option value="腾讯">腾讯</option>
            </select>
        </label>
        <input type="submit" value="提交">
    </form>
    <?php
}
?>