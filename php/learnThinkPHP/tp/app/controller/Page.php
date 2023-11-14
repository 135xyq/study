<?php

namespace app\controller;

use app\model\Book;

class Page
{
    public function index()
    {
        echo Book::paginate(2);
    }
}