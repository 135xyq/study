import { getAbout } from '@/api/about';
export default {
    namespaced: true,
    state: {
        data: "",
        loading: false
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchAbout(ctx) {
            if (ctx.state.data) {
                return;
            } else {
                ctx.commit('setLoading', true);
                const resp = await getAbout();
                ctx.commit('setData', resp);
                ctx.commit('setLoading', false);
            }
        }
    }
}