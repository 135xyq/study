import request from '@/utils/request';

/**
 * 获取所有每日一句
 * @returns
 */
export async function getDaily() {
    const res = await request.get('/api/daily');
    return res.data;
}


/**
 * 修改
 * @param {*} id
 * @param {*} obj
 * @returns
 */
export async function editDaily(id, obj) {
    const res = await request.put("/api/daily/" + id, obj);
    return res.data;
}

/**
 * 删除
 * @param {*} id
 * @returns
 */
export async function deleteDaily(id) {
    const res = await request.delete('/api/daily/' + id);
    return res.data;
}

/**
 * 新增
 * @param {*} obj
 * @returns
 */
export async function addDaily(obj) {
    const res = await request.post('/api/daily', obj);
    return res.data;
}