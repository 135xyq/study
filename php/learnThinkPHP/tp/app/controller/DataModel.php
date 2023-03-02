<?php

namespace app\controller;

use app\model\User;

class DataModel
{
    public function index()
    {
//        查找所有
        return json(User::select());
    }
}