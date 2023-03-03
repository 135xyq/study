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

}