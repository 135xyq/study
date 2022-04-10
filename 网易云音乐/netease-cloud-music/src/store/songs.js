import { getSongUrl, getSongDetail } from "@/api/song";
export default {
    namespaced: true,
    states: {
        songDetail: {}, //歌曲详情
        songUrl: '', //歌曲播放地址
    },
    mutations: {
        setSongDetail(state, payload) {
            state.songDetail = payload;
        },
        setSongUrl(state, payload) {
            state.songUrl = payload;
        }
    },
    actions: {
        async setSongDetail(ctx, id) {
            const res = await getSongDetail(id);
            ctx.commit('setSongDetail', res);
        },
        async setSongUrl(ctx, id) {
            const res = await getSongUrl(id);
            ctx.commit('setSongUrl', res);
        }
    }
}