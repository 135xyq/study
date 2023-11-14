<?php
declare (strict_types = 1);

namespace app\middleware;

class Check
{
    /**
     * 处理请求
     *
     * @param \think\Request $request
     * @param \Closure       $next
     * @return Response
     */
    public function handle($request, \Closure $next)
    {
        //处理http请求，中间件代码
        if ($request->param('name') == 'index') {
            return redirect('../');
        }

        return $next($request);
    }
}
