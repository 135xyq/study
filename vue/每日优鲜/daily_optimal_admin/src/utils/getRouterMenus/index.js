// 处理不同身份对应的路由按钮


const routerMap = {
    // 普通用户
    customer: [{
        name: 'product'
    }, {
        name: 'productAdd'
    }, {
        name: 'productList'
    }, {
        name: 'productEdit'
    }],
    // 管理员
    admin: [{
        name: 'product'
    }, {
        name: 'productAdd'
    }, {
        name: 'productList'
    }, {
        name: 'productEdit'
    }, {
        name: 'category'
    }]
}

/**
 * 
 * @param {String} role 用户角色
 * @param {Array} routes 路由数组
 */

export default function getResultRouter(role, routes) {
    const roleRouterName = routerMap[role].map(item => item.name);
    const resultRouter = routes.filter(item => {
        if (roleRouterName.indexOf(item.name) !== -1) {
            item.children = item.children.filter(t => roleRouterName.indexOf(t.name) !== -1)
            return true;
        }
        return false;
    })
    return resultRouter;
}