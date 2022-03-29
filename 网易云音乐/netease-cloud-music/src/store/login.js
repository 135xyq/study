import * as loginApi from "@/api/login";
import * as userApi from "@/api/user";

export default {
    namespaced: true,
    state: {
        userInfo: {}, //登录用户信息
        isLogin: false, //是否已经登录
        userId: "", //用户Id
    },
    mutations: {
        setLogin(state, payload) {
            state.isLogin = payload
        },
        setUserInfo(state, payload) {
            state.userInfo = payload;
        },
        setUserId(state, payload) {
            state.userId = payload;
        }

    },
    actions: {
        async login({ commit }, { phone, password }) {
            const result = await loginApi.loginByPhone(phone, password);
            if (result) {
                commit('setLogin', true);
                return true;
            } else {
                commit('setLogin', false);
                return false; //登录失败
            }
        },
        async logined({ commit }) {
            const resp = await loginApi.loginStatus();
            if (resp) {
                commit('setUserId', resp.id);
                commit('setLogin', true);
            }
        },
        async userId({ commit }) {
            const result = await userApi.userAccount();
            if (result) {
                commit('setUserId', result.id);
            }
        },
        async userInfo({ commit }, { id }) {
            const resp = await userApi.userInfoDetail(id)
            if (resp && resp.code != 400) {
                commit('setUserInfo', resp)
            }
        },
        async logout({ commit }) {
            await loginApi.logout();
            commit('setLogin', false);
            commit('setUserId', '');
            commit('setUserInfo', {});
        }
    }

}