<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
use think\facade\Route;

//Route::get('think', function () {
//    return 'hello,ThinkPHP6!';
//});
//
Route::get('hello/:name', 'index/hello');

//Route::rule('ds/:id','address/detail')->pattern(['id'=>'\d+']);

//Route::rule('/','Index/index','GET');

//Route::rule('sc/:id/:uid','address/search')->pattern(['id'=>'\d+','uid'=>'\d+']);

//Route::domain('xyq.hsz.com',function(){
//    Route::rule('ds/:id','address/detail');
//});


//Route::rule('ds/:id','address/detail');

//Route::group(function (){
//    Route::rule('ds/:id','detail');
//    Route::rule('rd/:name','read');
//})->prefix('Address/')
//    ->ext('html');
//
//Route::miss('public/miss');

//Route::resource('ads','Address');

//Route::resource('blog','Blog');

Route::resource('blog.comment', 'Comment');