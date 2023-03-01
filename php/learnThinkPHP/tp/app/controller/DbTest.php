<?php

namespace app\controller;


use think\facade\Db;

class DbTest
{
//    插入
    public function insert()
    {
        $data = [
            'username' => '光头强',
            'password' => '123',
            'gender' => '男',
            'email' => 'huiye@163.com',
            'price' => 90,
            'details' => '123'
        ];
        return Db::name('user')->save($data);
    }

//    修改
    public function update()
    {
        $data = [
            'username' => '黑小虎'
        ];
//        return Db::name('user')->where('id',301)->update($data);
//        return Db::name('user')->where('id',301)->exp('email','UPPER(email)')->update();
//        return Db::name('user')->where('id',301)
//            ->inc('price',5)
//            ->dec('status')
//            ->update();
        Db::name('user')->where('id', 302)
            ->update([
                'email' => Db::raw('UPPER(email)'), 'price' => Db::raw('price + 1'), 'status' => Db::raw('status - 2')]);
    }

    public function delete()
    {
//        return Db::name('user')->delete(304);
        return Db::name('user')->where('id',305)->delete();
    }
}