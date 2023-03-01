<?php

namespace app\controller;

class Test
{
    public function index()
    {
        return 'index';
    }

    public function hello($value='')
    {
        return 'hello '.$value;
    }

    public function array(){
        $array = ['a'=>'1','b'=>2,'c'=>3];
        halt('中断输出！');
        return json($array);
    }
}