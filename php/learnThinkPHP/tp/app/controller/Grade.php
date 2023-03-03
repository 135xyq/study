<?php

namespace app\controller;

use app\model\User;
use app\model\User as UserModel;
use app\model\Profile as ProfileModel;

class Grade
{
    public function index()
    {
//        $user = UserModel::find(19);
//        return json($user->profile);

//        $user = ProfileModel::find(1);
//        return json($user->user);


//        修改
//        $user = UserModel::find(19);
//        $user->profile->save(['hobby'=>'酷爱小姐姐']);

//        新增
//        $user = UserModel::find(317);
//        if($user->profile == null)
//        {
//            $user->profile()->save(['hobby'=>'喜欢大姐姐']);
//        }else{
//            $user->profile->save(['hobby'=>'酷爱小姐姐']);
//        }

//        $user = UserModel::hasWhere('profile', function ($query) {
//            $query->where('profile.id', 2);
//        })->select();
//        return json($user);

    }

    public function oneToMany()
    {
//        $user = UserModel::find(19);
//        return json($user->profile);


//        $user = UserModel::find(19);
//        return json($user->profile()->where('id','>',10)->select());

//        return json(UserModel::has('profile','=',2)->select());

//        $user = UserModel::find(317);
//        $user->profile()->save(['hobby'=>'吃豆芽','status'=>1]);


        $user = UserModel::find(317);
        $user->profile()->saveAll([
            ['hobby'=>'吃豆芽1','status'=>1],
            ['hobby'=>'吃豆芽2','status'=>1]
        ]);
    }

    public function list()
    {
//        $list = UserModel::with(['profile'])->select([19,20,21]);
//        foreach ($list as $user){
//            dump($user->profile->toArray());
//        }

//        $list = UserModel::with(['book','profile'])->select([19,20,21]);
//        foreach ($list as $user){
//            dump($user->profile.$user->book);
//        }


        $list = UserModel::with(['profile'=>function($query){
            $query->field('user_id,hobby');
        }])->field('id,username')->select([19,20,21]);
        foreach ($list as $user){
            dump($user->toArray());
        }
    }

    public function count()
    {
//        $list = UserModel::withCount(['profile'])->select([19,20,21]);
//        foreach($list as $user){
//            echo $user->profile_count.'<br>';
//        }


        $list = UserModel::withSum(['profile'],'status')->select([19,20,21]);
        foreach($list as $user){
            echo $user->profile_sum.'<br>';
        }
    }

    public function many()
    {
        $user = UserModel::find(19);
        $roles  =$user->roles;
        return json($roles);
    }
}