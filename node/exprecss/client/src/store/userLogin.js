import * as adminApi from '../api/admin.js';

export default {
    namespaced: true,
    state: {
        userData: null, //用户信息
        isLoading: false, // 是否正在加载
    },
    mutations: {
        setUserData(state, payload) {
            state.userData = payload;
        },
        setIsLoading(state, payload) {
            state.isLoading = payload;
        }

    },
    actions: {
        async login({ commit }, { loginId, loginPwd }) {
            commit('setIsLoading', true);
            const result = await adminApi.login(loginId, loginPwd);
            commit('setUserData', result.data);
            commit('setIsLoading', false);
            return result.data;
        },
        async whoAmI({ commit }) {
            commit('setIsLoading', true);
            try {
                const result = await adminApi.whoAmI();
                commit('setUserData', result.data)
            } catch {
                commit('setUserData', null);
            }
            commit('setIsLoading', false);
        },
        logout({ commit }) {
            commit('setUserData', null);
            adminApi.logout();
        }
    }

}