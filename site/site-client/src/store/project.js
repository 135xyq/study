import { getProject } from '@/api/project';

export default {
    namespaced: true,
    state: {
        loading: false,
        data: null,
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
        async fetchProject(ctx) {
            // 如果已经获取到数据不在重复获取
            if (ctx.state.data) {
                return;
            } else {
                ctx.commit('setLoading', true);
                const resp = await getProject(1, 100);
                ctx.commit('setData', resp);
                ctx.commit('setLoading', false);
            }
        }
    }
}