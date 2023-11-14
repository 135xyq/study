<?php

namespace app\controller;


use think\facade\Session;

class Show
{
    public function index()
    {
//        require '/public/test/1.php';
        dump(Session::get('name'));
        dump(session());

    }
}