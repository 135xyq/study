<?php

namespace app\controller;


use think\captcha\facade\Captcha;
use think\facade\Validate;

class Code
{


    public function index()
    {
        $validate = Validate::rule([
            'captcha' => 'require|captcha'
        ]);
//验证码和表单对比
        $result = $validate->check([
            'captcha' => input('post.code')
        ]);
        if (!$result) {
            dump($validate->getError());
        }
    }

    public function verify()
    {
        return Captcha::create();
//        phpinfo();
    }

}