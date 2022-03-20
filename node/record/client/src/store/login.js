import * as loginApi from '@/api/login';

export default {
    namespaced: true,
    state: {
        userData: localStorage.getItem('my_record'),
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
            if (result.data) {
                localStorage.setItem('my_record', JSON.stringify(result.data));
            }
            commit('setIsLoading', false);
            return result.msg;
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
            loginApi.logout();
            localStorage.removeItem('my_record')
        }
    }
}