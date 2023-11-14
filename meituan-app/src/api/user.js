import request from "./request.js";
import store from "@/store";

const appkey = store.state.appkey;


/**
 * 注册
 * @param {Object} option 注册信息
 */
export async function register(option) {
    return await request.get("/api/meituan/register", {
        params: {
            appkey,
            ...option,
        },
    });
}


/**
 * 登录
 * @param {Object} option 登录的用户名和密码
 * @returns 
 */

export async function login(option) {
    return await request.get('/api/meituan/login', {
        params: {
            appkey,
            ...option
        }
    })
}