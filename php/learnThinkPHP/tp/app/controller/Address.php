<?php

namespace app\controller;

class Address
{
    public function index()
    {
        return 'index';
    }

    public function detail($id)
    {
        return '详情id: '.$id;
    }

    public function search($id,$uid)
    {
        return '详情id: '.$id. ' 详情uid:'.$uid;
    }

    public function read($name)
    {
        return '读取名称：'.$name;
    }
}