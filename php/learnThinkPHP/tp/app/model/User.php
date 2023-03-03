<?php

namespace app\model;

use think\Model;

class User extends Model
{
    protected $connection = 'mysql';

    public function getUserName($id)
    {
        $user = $this->find($id);
        return $user->getAttr('username');
    }

//    获取器
    public function getStatusAttr($value)
    {
        $status = [-1 => '删除', 0 => '禁用', 1 => '正常', 2 => '待审核'];
        return $status[$value];
    }


//    修改器
    public function setPriceAttr($value)
    {
        return $value + 100;
    }

}