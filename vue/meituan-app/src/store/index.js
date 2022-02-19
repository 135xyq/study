import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userName: localStorage.getItem('$mei_tuan_app_user_name'),
        appkey: "XYQ__1628040258622",
        position: {
            name: '',
            nearCity: []
        }, // 当前定位城市
    },
    mutations: {
        setUserName(state, info) {
            // console.log(info)
            // 修改信息
            state.userName = info;
        },
        setPosition(state, data) {
            state.position.name = data.name;
        }
    },
    actions: {
        setUserName({ commit }, info) {
            commit('setUserName', info);
        },
        setPosition({ commit }, data) {
            commit('setPosition', data);
        }
    },
    modules: {},
});