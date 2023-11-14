import { getBanner } from '@/api/banner';
export default {
    namespaced: true,
    state: {
        loading: false,
        data: []
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        },
    },
    actions: {
        async fetchBanner(ctx) {
            // 如果已经取过数据，直接返回，不用重复获取数据
            if (ctx.state.data.length) {
                return;
            }
            ctx.commit("setLoading", true);
            const resp = await getBanner();
            ctx.commit('setData', resp);
            ctx.commit('setLoading', false);
        },
    },
};