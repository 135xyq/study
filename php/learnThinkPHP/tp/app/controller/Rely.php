<?php

namespace app\controller;

//use think\Request;

use think\facade\Request;

class Rely
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }
    public function index()
    {
        return $this->request->param('user');
    }

    public function get()
    {
//        return request()->param('sex');
//        return $this->request->url(true);
//        dump(Request::has('sex','post'));
//        return json(Request::param('user'));
//        return json(Request::param('user','默认姓名'));
        dump(input('param.user'));
    }


}