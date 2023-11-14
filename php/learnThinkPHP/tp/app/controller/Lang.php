<?php

namespace app\controller;
use think\facade\Lang as L;
class Lang
{
    public function index()
    {
        echo L::get('require_name');
    }
}