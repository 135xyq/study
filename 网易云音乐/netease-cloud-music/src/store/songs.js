import { getSongUrl, getSongDetail } from "@/api/song";
export default {
    namespaced: true,
    state: {
        songDetail: {}, //歌曲详情
        songUrl: '', //歌曲播放地址
        playList: [], //播放列表
    },
    mutations: {
        setSongDetail(state, payload) {
            state.songDetail = payload;
        },
        setSongUrl(state, payload) {
            state.songUrl = payload;
        },
        pushPlayList(state, payload) {
            // 新增一个歌曲进入播放列表
            state.playList.push(payload);
        },
        popPlayList(state, payload) {
            // 从播放列表中删除指定的歌曲
            state.playList = state.playList.filter(item => item.id !== payload.id);
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
        },
        pushPlayList({ commit }, song) {
            commit('pushPlayList', song);
        },
        popPlayList({ commit }, song) {
            commit('popPlayList', song);
        }
    }
}