import ins from "./request";

/**
 * 分页获取项目
 * @param {*} page 
 * @param {*} limit 
 * @returns 
 */
export async function getProject(page = 1, limit = 10) {
    const res = await ins.get("/api/project", {
        params: {
            page,
            limit
        }
    });
    return res;
}