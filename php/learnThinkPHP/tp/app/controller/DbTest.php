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

    public function selectWhere()
    {
//        $user= Db::name('user')->where('id','<>','306')->select();
//        $user= Db::name('user')->where('email','like','Xiao%')->select();
        $user = Db::name('user')->where('email','like',['xiao%','wu%'],'or')->select();
        return json($user);
    }

    public function time()
    {
//        $user = Db::name('user')->where('create_time','>','2016-01-01')->select();
//        $user = Db::name('user')->where('create_time','not between',['2016-01-01','2016-12-12'])->select();
        $user = Db::name('user')->whereDay('create_time','last day')->select();
        echo Db::getLastSql();
        return json($user);
    }

    public function poly()
    {
        $user = Db::name('user')->count('uid');
//        return Db::getLastSql();
//        $user = Db::name('user')->max('price');
//        $user = Db::name('user')->min('price');
//        $user = Db::name('user')->fetchSql(true)->select();
//        $user = Db::name('user')->buildSql(true);

//        $subQuery = Db::name('two')->field('uid')->where('gender','男')->buildSql();
//        $result = Db::name('one')->where('id','exp','IN '.$subQuery)->select();
//        return Db::getLastSql();

//        $result = Db::name('one')->where('id','in',function($query){
//            $query->name('two')->field('uid')->where('gender','男');
//        })->select();
//

//        $result = Db::query('select * from tp_one');

        $result = Db::execute('update tp_one  set chinese = 98 where id = 25');
//        $result = Db::query('select * from tp_one');
        return json($result );
    }




}