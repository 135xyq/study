<?php

namespace app\index\controller;

use app\common\BaseServer;
use app\index\model\AppletConfig;
use app\index\model\Test;
use Curl\Curl;
use think\Request;

class Login extends BaseServer
{
    protected $TestModel;

    public function __construct()
    {
        $this->TestModel = new Test();
    }

    public function index(Request $request)
    {
        // 获取前端传回的code
        $code = $request->param('code');

        $res = AppletConfig::find(1);
        return json($res);
        $info=curl_init();
        $url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx656b4dde73487a50&secret=5ecdf06b918abc3e0e80651953cd8d8a&js_code=003AJy0w3F9kf033Zl2w3EmISW2AJy0D&grant_type=authorization_code';
        curl_setopt($info,CURLOPT_RETURNTRANSFER,true);
        curl_setopt($info,CURLOPT_HEADER,0);
        curl_setopt($info,CURLOPT_NOBODY,0);
        curl_setopt($info,CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($info,CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($info,CURLOPT_URL,$url);
        $output= curl_exec($info);
        curl_close($info);
        dump($output);
        $this->result=$output->response;
        return $this->success();

        // 对响应进行处理
        if ($curl->error === false) {
            // 处理cURL错误
            $this->result = '获取信息错误！';
            return $this->error();
        } else {
            // 处理响应数据
            $this->result=$curl->response;
            return $this->success();

        }

    }
}