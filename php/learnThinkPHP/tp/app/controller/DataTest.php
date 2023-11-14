<?php

namespace app\controller;

use think\facade\Db;
use app\model\User;

class DataTest
{
    public function index()
    {
        $users = Db::table('tp_user')->select();
        return json($users);
    }

    public function getUser()
    {
        $user = User::select();
        return $user;
    }

    public function findOne()
    {
//        查询单个数据
//        $user = Db::table('tp_user')->where('id', 27)->find();
//        return Db::getLastSql(); //获取最近一条的SQL语句
//        没有数据会返回空数组
        $user = Db::table('tp_user')->where('id', 257)->findOrEmpty();
        return json($user);
    }

    public function select()
    {
//        $user = Db::table("tp_user")->select()->toArray();
        $user = Db::name("user")->json(['list'])->find(315);
        return json($user);
    }

    public function value()
    {
        $user = Db::name('user')->where('id','19')->value('username');
        return $user;
    }

    public function column()
    {
        $user = Db::name('user')->column('username','id');
        return json($user);
    }

    public function chunk(){
        Db::name('user')->chunk(3,function($users){
            foreach ($users as $user){
                dump($user);
            }
        });
    }


    public function findColumn()
    {
        $user = Db::name('user')->where('id',19)->order('id','desc')->find();
        dump($user);
    }
}