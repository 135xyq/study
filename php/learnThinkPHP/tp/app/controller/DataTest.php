<?php

namespace app\controller;

use think\facade\Db;
use app\model\User;

class DataTest
{
    public function index(){
        $users = Db::table('tp_user')->select();
        return json($users);
    }

    public function getUser(){
        $user  = User::select();
        return $user;
    }
}