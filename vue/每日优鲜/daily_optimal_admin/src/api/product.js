import store from '@/store';
import request from './request';

const appkey = store.state.user.appkey;


/**
 * 获取商品类目列表
 * @returns 
 */

export async function categoryList() {
    return await request.get('/category/all', {
        params: {
            appkey,
        }
    })
}

/**
 * 获取所有的商品
 * @param {Object} option 请求参数
 * @returns 
 */

export async function productList(option) {
    return await request.get('/products/all', {
        params: {
            appkey,
            ...option
        }
    })
}

/**
 * 删除商品
 * @param {String} id 商品的id
 */
export async function productDelete(id) {
    return await request.delete(`/products/${id}`, {
        params: {
            appkey,
        }
    })
}

/**
 * 获取商品的具体信息
 * @param {Number} id 商品的id
 * @returns 
 */
export async function productDetail(id) {
    return await request.get(`/products/${id}`, {
        params: {
            appkey,
        }
    })
}

/**
 * 编辑商品
 * @param {Object} option 商品信息
 * @returns 
 */
export async function productEdit(option) {
    return await request.put('/products/edit', {
        appkey,
        ...option
    })
}

/**
 * 新增商品
 * @param {Object} option 商品信息
 * @returns 
 */

export async function productAdd(option) {
    return await request.post('/products/add', {
        appkey,
        ...option
    })
}

/**
 * 类目新增
 * @param {Object} option 
 * @returns 
 */

export async function categoryAdd(option) {
    return await request.post('/category/add', {
        appkey,
        ...option
    })
}

/**
 * 类目编辑
 * @param {*} option 
 * @returns 
 */

export async function categoryEdit(option) {
    return await request.put('/category/edit', {
        appkey,
        ...option
    })
}
/**
 * 删除类目
 * @param {String} id 
 * @returns 
 */

export async function categoryDelete(id) {
    return await request.delete(`/category/${id}`, {
        params: {
            appkey,
        }
    })
}