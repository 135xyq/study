<?php

namespace app\controller;

use app\model\User as UserModel;

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


        $return = UserModel::create([
            'username' => '李白1',
            'password' => '123',
            'gender' => '男',
            'email' => 'libai@163.com',
            'price' => 100,
            'details' => '123',
            'uid' => 1011
        ],['username','email','password','details'],false);
        return json($return->username);
    }

    public function delete()
    {
//        $user = UserModel::find(309);
//        dump($user->delete());


//        UserModel::destroy(311);

        UserModel::where('id','>',310)->delete();
    }


    public function update()
    {
//        $user = UserModel::find(308);
//        $user->username = '李黑';
//        $user->save();

        UserModel::update([
            'username'=>'哪吒',
            'email' =>'neza@163.com'
        ],['id'=>310]);
    }

    public function select()
    {
//        $user = UserModel::find(19);//find查询
//        return json($user);

//        $user = UserModel::findOrEmpty(34);
//        return json($user);

//        $user = UserModel::select([19,20,21]);
//        return json($user);

        $user = UserModel::where('price','>=',100)
            ->limit(2)
            ->order('price','desc')
            ->select();
        return json($user);
    }
}