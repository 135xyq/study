<?php

namespace app\admin\controller;

use app\model\User;

class Test
{
    public function index()
    {
        return User::select();
    }

}