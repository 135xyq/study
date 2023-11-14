<?php

namespace app\controller;

use app\model\User;
use app\model\User as UserModel;
use think\facade\Db;

class DataModel
{
    public function index()
    {
//        查找所有
        return json(UserModel::select());
    }

    public function insert()
    {
//        $user = new UserModel();
//        $user->username = '李白';
//        $user->password = '123';
//        $user->gender = '男';
//        $user->email = 'libai@163.com';
//        $user->price = 100;
//        $user->details = '123';
//        $user->uid = 1011;
//        return json($user->save());


//        $user = new UserModel();
//        $user->save([
//            'username' => '李白',
//            'password' => '123',
//            'gender' => '男',
//            'email' => 'libai@163.com',
//            'price' => 100,
//            'details' => '123',
//            'uid' => 1011
//        ]);


//        $return = UserModel::create([
//            'username' => '李白1',
//            'password' => '123',
//            'gender' => '男',
//            'email' => 'libai@163.com',
//            'price' => 100,
//            'details' => '123',
//            'uid' => 1011
//        ],['username','email','password','details'],false);
//        return json($return->username);


        $user = new UserModel();
        $user->username = '张飞';
        $user->password = '123';
        $user->gender = '男';
        $user->email = 'libai@163.com';
        $user->price = 100;
        $user->uid = 1011;
        $user->status = 1;
        $user->details = 123;
        $user->list = ['username' => '张翼德', 'gender' => '男', 'email' => 'zhangfei@163.com'];
        $user->save();
    }

    public function delete()
    {
//        $user = UserModel::find(309);
//        dump($user->delete());


//        UserModel::destroy(311);

        UserModel::where('id', '>', 310)->delete();
    }


    public function update()
    {
//        $user = UserModel::find(308);
//        $user->username = '李黑';
//        $user->save();

        UserModel::update([
            'username' => '哪吒',
            'email' => 'neza@163.com'
        ], ['id' => 310]);
    }

    public function select()
    {
//        $user = UserModel::find(19);//find查询
//        return json($user);

//        $user = UserModel::findOrEmpty(34);
//        return json($user);

//        $user = UserModel::select([19,20,21]);
//        return json($user);

//        $user = UserModel::where('price', '>=', 100)
//            ->limit(2)
//            ->order('price', 'desc')
//            ->select();
//        return json($user);


        $user = UserModel::where('list->username','张翼德')->find();
        return json($user);
    }


    public function field()
    {
        $model = new UserModel();
        $username = $model->getUserName(21);
        return $username;
    }


    public function getAttr()
    {
        $user = UserModel::find(310);
        echo $user->status;
    }

    public function setAttr()
    {
        $user = UserModel::find(310);
        $user->price = $user->price + 20;
        $user->save();
    }


    public function scope()
    {
//        $user = UserModel::scope('price')->select();
//        return json($user);

        $user = UserModel::price(60)->email('xiao')->select();
//        return Db::getLastSql();
        return json($user);
    }

    public function typec()
    {
        $user = UserModel::find(20);
        return json($user);
    }


    public function softDelete()
    {
//        UserModel::destroy(306);

//        $user = UserModel::withTrashed()->select();
//        return json($user);

//        $user = UserModel::onlyTrashed()->select();
//        return json($user);


        $user = UserModel::onlyTrashed()->find(306);
        $user->restore();
        UserModel::destroy(306,true);




    }
}