import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import songs from './songs'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        login,
        songs
    }
})