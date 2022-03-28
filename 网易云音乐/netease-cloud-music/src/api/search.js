// 关于搜索的api

import ins from './request';

export async function searchSuggest(keywords) {
    try {
        const result = await ins.get('/search/suggest', {
            params: {
                keywords,
            }
        })
        return result.data.result;
    } catch {
        return null;
    }
}