<?php

namespace app\controller;

use app\validate\User;
use think\exception\ValidateException;
use think\facade\Validate;
use think\validate\ValidateRule;

class Verify
{
    public function index()
    {
        try {
            validate(User::class)->batch(true)->scene('edit')->check([
                'name' => '',
                'price' => 910,
                'email' => 'xiaoxin@163com'
            ]);
        } catch (ValidateException $e) {
            dump($e->getError());
        }
    }

    public function rule()
    {
        $validate = Validate::rule([
            'name' => 'require|max:20',
            'price' => 'number|between:1,100',
            'email' => 'email',

//            格式验证
//            'test' => 'require'
//            'test'=>ValidateRule::isRequire()

//            区间长度验证
//            'test'=>'length:4'
            'test' => ValidateRule::length(4)
        ]);
        $result = $validate->batch(true)->check([
            'name' => '蜡笔小新',
            'price' => 10,
            'email' => 'xiaoxin@163.com',

            'test' => 'ss'
        ]);
        if (!$result) {
            dump($validate->getError());
        }
    }

    public function route($id)
    {
        return 'id: ' . $id;
    }
}