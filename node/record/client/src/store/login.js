import * as loginApi from '@/api/login';

export default {
    namespaced: true,
    state: {
        userData: null,
        isLoading: false,
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
            const result = await loginApi.login(loginId, loginPwd);
            commit('setUserData', result.data);
            commit('setIsLoading', false);
        },
        async whoAmI({ commit }) {
            commit('setIsLoading', true);
            try {
                const result = await loginApi.whoAmI();
                commit('setUserData', result.data)
            } catch {
                commit('setUserData', null);
            }
            commit('setIsLoading', false);
        },
        logout({ commit }) {
            commit('setUserData', null);
            loginApi.logout()
        }
    }
}