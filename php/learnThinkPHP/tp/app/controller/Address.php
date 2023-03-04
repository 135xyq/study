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
}