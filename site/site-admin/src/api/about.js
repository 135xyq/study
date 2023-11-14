import request from '@/utils/request'

/**
 * 获取关于我的信息
 * @returns
 */
export async function getAbout() {
    const res = await request.get('/api/about');
    return res.data;
}

/**
 * 修改关于我的信息
 * @param {*} id
 * @param {*} aboutObj
 * @returns
 */

export async function editAbout(id, aboutObj) {
    const res = await request.put('/api/about/' + id, aboutObj);
    return res.data;
}

/**
 * 新增
 * @param {*} aboutObj
 * @returns
 */
export async function addAbout(aboutObj) {
    const res = await request.post('/api/about', aboutObj);
    return res.data;
}