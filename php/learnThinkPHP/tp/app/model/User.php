<?php

namespace app\model;

use think\Model;
use think\model\concern\SoftDelete;

class User extends Model
{
//    一对一
//    public function profile()
//    {
//        return $this->hasOne(Profile::class);
//    }

//    一对多
    public function profile()
    {
        return $this->hasMany(Profile::class,'user_id','id');
    }

//    protected $connection = 'mysql';

//    public function getUserName($id)
//    {
//        $user = $this->find($id);
//        return $user->getAttr('username');
//    }

//    获取器
//    public function getStatusAttr($value)
//    {
//        $status = [-1 => '删除', 0 => '禁用', 1 => '正常', 2 => '待审核'];
//        return $status[$value];
//    }


//    修改器
//    public function setPriceAttr($value)
//    {
//        return $value + 100;
//    }


//    public function scopePrice($query,$value)
//    {
//        $query->where('price','>',$value)
//            ->field(['id','username','price'])
//            ->order('price','desc')
//            ->limit(5);
//    }

//    public function scopeEmail($query,$value)
//    {
//        $query->where('email','like','%'.$value.'%');
//    }

//    protected $type = [
//        'status' => 'boolean',
//        'price' => 'float',
//        'create_time' => 'datetime:Y/m/d'
//    ];

//    protected $json = ['list'];
//    use SoftDelete;
//
//    protected static function onAfterRead($query)
//    {
//        echo '执行了查询方法';
//    }

}