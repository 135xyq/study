import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userName: localStorage.getItem('$mei_tuan_app_user_name'),
        appkey: "XYQ__1628040258622",
    },
    mutations: {
        setUserName(state, info) {
            // console.log(info)
            // 修改信息
            state.userName = info;
        },
    },
    actions: {
        setUserName({ commit }, info) {
            commit('setUserName', info);
        }
    },
    modules: {},
});