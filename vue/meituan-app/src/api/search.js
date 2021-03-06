import request from "./request";
import store from "@/store";

const appkey = store.state.appkey;

/**
 * 搜索框列表数据获取
 */

export async function getSearchInfo() {
    return await request.get("/api/meituan/header/search.json", {
        params: {
            appkey,
        },
    });
}

/**
 * 最近热门搜索
 */
export async function getHotWords() {
    return await request.get('/api/meituan/header/searchHotWords.json', {
        params: {
            appkey,
        }
    })
}