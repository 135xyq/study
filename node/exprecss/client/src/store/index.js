import Vue from 'vue';
import Vuex from 'vuex';
import userLogin from './userLogin';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        userLogin,
    }
})