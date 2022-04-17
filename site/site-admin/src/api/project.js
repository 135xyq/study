import request from '@/utils/request';

/**
 * 分页获取项目
 * @param {*} page 第几页
 * @param {*} limit 每页多少个
 * @returns
 */
export async function getProject(page, limit) {
    const res = await request.get('/api/project', {
        params: {
            page,
            limit
        }
    })

    return res.data;
}

/**
 * 根据ID删除项目
 * @param {*} id 项目ID
 * @returns
 */
export async function deleteProject(id) {
    const res = await request.delete('/api/project/' + id);
    return res.data;
}