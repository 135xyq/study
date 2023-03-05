<?php

namespace app\controller;

use app\model\One;

class Inject
{
    protected $one;
    public function __construct(One $one)
    {
        $this->one = $one;
    }

    public function index()
    {
        return $this->one->username;
    }
}