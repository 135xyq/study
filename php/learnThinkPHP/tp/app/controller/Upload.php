<?php

namespace app\controller;

use think\facade\Filesystem;
use think\facade\Request;

class Upload
{
//     上传单个文件
    public function index(){
        $file  = Request::file('image');
        $info  = Filesystem::putfile('topic',$file);
        dump($info);
    }

//    上传多个文件  有问题
    public function more()
    {
        $files  = Request::file('image');
        $info = [];
        foreach ($files as $file){
            $info[] = Filesystem::putfile('topic',$file);
        }
        dump($info);
    }
}