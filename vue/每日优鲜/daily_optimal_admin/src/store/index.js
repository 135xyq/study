import Vue from 'vue'
import Vuex from 'vuex'
import * as myLocalStorage from '@/utils/userStorage';
import router from '@/router';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // user: myLocalStorage.getStorage(), // 用户信息
        user: myLocalStorage.getStorage() ? myLocalStorage.getStorage() : {
            username: '',
            appkey: '',
            role: '',
            email: '',
        },
        routerMenus: [], // 用户路由
        isAdded: false, // 路由是否已经添加过
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.user = userInfo;
        },
        logout(state) {
            state.user = {
                username: '',
                email: '',
                appkey: '',
                role: '',
            }
        },
        changeRouterMenus(state, routes) {
            state.routerMenus = routes;

        },
        routesNoAdded(state) {
            state.isAdded = false;
        },
        routesAdded(state) {
            state.isAdded = true;
        },

    },
    actions: {
        setUserInfo({ commit }, userInfo) {
            commit('setUserInfo', userInfo);
            myLocalStorage.setStorage(userInfo)
        },
        logout({ commit }, routes) {
            commit('logout');
            myLocalStorage.removeStorage(); // 删除存储信息
            commit('changeRouterMenus', routes); //更改路由信息
            router.options.routes = routes;
            // commit('routesNoAdded'); // 更改路由更改状态
        },
        changeRouterMenus({ commit }, routes) {
            commit('changeRouterMenus', routes);
        },
        routesAdded({ commit }) {
            commit('routesAdded');
        }
    },
    modules: {}
})