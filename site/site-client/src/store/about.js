import { getAbout } from "@/api/about";
import controlTitle from '@/utils/controlTitle';
import avatar from "@/assets/avatar.jpeg"
export default {
    namespaced: true,
    state: {
        data: {}, //个人数据
    },
    mutations: {
        getData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async getData({ commit }) {
            const res = await getAbout();
            commit('getData', res[0]);
            controlTitle.setSiteTitle('谢永强的个人空间');
        }
    }
}