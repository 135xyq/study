import { getSongUrl, getSongDetail, getLyric } from "@/api/song";
import { changeToTimeStamp } from "@/utils/formateSongTime";
export default {
    namespaced: true,
    state: {
        songDetail: {}, //歌曲详情
        songUrl: '', //歌曲播放地址
        playList: [], //播放列表
        songLrc: [], //歌曲的歌词
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
            let flag = false; //是否存在相同歌曲
            state.playList.forEach(item => {
                if (item.id === payload.id) {
                    flag = true;
                }
            })
            if (flag) {
                return;
            }
            state.playList.push(payload);
        },
        popPlayList(state, payload) {
            // 从播放列表中删除指定的歌曲
            state.playList = state.playList.filter(item => item.id !== payload.id);
        },
        setSongLrc(state, payload) {
            state.songLrc = payload;
        },
        deletePlayList(state, payload) {
            state.playList = payload;
        }
    },
    actions: {
        async setSongDetail(ctx, id) {
            const res = await getSongDetail(id);
            ctx.commit('setSongDetail', res);
            const result = await getLyric(id);
            let arr = result.split('\n'); //将字符串截取为数组
            arr = arr.map(item => {
                const temp = item.split(']');
                return {
                    time: changeToTimeStamp(temp[0] ? temp[0].slice(1) : ''),
                    content: temp[1] ? temp[1] : ''
                }
            })
            ctx.commit('setSongLrc', arr)
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
        },
        deletePlayList({ commit }) {
            commit('deletePlayList', []);
        }
    }
}