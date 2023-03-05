<?php

namespace app\controller;

//use think\Request;

use think\facade\Request;

class Rely
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }
    public function index()
    {
        return $this->request->param('user');
    }

    public function get($name = '谢永强')
    {
//        return request()->param('sex');
//        return $this->request->url(true);
//        dump(Request::has('sex','post'));
//        return json(Request::param('user'));
//        return json(Request::param('user','默认姓名'));
//        dump(input('param.user'));


//        dump(Request::isGet());
//        dump(Request::isPost());
//        dump(Request::method());
//        dump(Request::header());

//        return response($name)->code(200);

//        return redirect('https://www.baidu.com');

//        return redirect(url('address/index'));

//        return redirect(url('address/index'))->with('name', 'xyq');


    }


}