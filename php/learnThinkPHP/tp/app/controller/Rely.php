<?php

namespace app\controller;

use think\Request;

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
        return $this->request->url(true);
    }

}