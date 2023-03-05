<?php

namespace app\controller;

use think\facade\Cache;
use think\facade\Cookie;
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

    public function cookie()
    {
//        Cookie::set('user','xyq');

//        Cookie::set('value','9999');

//        Cookie::set('user','xyq',3600);

//        dump(Cookie::get('user'));

        dump(Request::cookie());

        dump(Cookie::has('value'));

        Cookie::delete('value');

        dump(Cookie::get('value','默认值'));

    }

    public function redis()
    {
        Cache::set('name','xyq',3600);
        dump(Cache::get('name'));
        Cache::inc('number',3);
        dump(Cache::get('number'));
    }

}