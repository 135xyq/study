<?php

namespace app\controller;

use think\facade\Request;
use think\facade\Session;

class Store
{
    public function session()
    {
        Session::set('name', 'xyq');
        Session::set('count', '9999');
//        return Session::get('name');
        dump(Session::all());

//        读取单个
        dump(Request::session('name'));
//        读取所有
        dump(Request::session());

        session('value',1000);

        dump(session());
        dump(session('name'));

    }

}