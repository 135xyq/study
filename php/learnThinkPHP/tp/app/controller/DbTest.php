<?php

namespace app\controller;


use think\facade\Db;

class DbTest
{
    public function insert()
    {
        $data = [
            'id' => 79,
            'username' => '光头强',
            'password' => '123',
            'gender' => '男',
            'email' => 'huiye@163.com',
            'price' => 90,
            'details' => '123'
        ];
        return Db::name('user')->save($data);
    }
}