<?php

namespace app\controller;

use app\validate\User;
use think\exception\ValidateException;
use think\facade\Validate;

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
            'email' => 'email'
        ]);
        $result = $validate->batch(true)->check([
            'name' => '',
            'price' => 910,
            'email' => 'xiaoxin@163.com'
        ]);
        if(!$result){
            dump($validate->getError());
        }
    }

    public function route($id){
        return 'id: '.$id;
    }
}