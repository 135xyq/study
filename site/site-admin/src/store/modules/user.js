import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import { MessageBox, Message } from 'element-ui'
import { myBaseUrl } from '@/config/url'; //服务器路径

const getDefaultState = () => {
    return {
        token: getToken(),
        name: '',
        avatar: ''
    }
}

const state = getDefaultState()

const mutations = {
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    }
}

const actions = {
    // user login
    login({ commit }, userInfo) {
        const { userName, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ userName: userName.trim(), password: password }).then(response => {
                if (response.code == 404) {
                    Message({
                        message: response.msg,
                        type: 'error',
                        duration: 2 * 1000
                    })
                    resolve();
                } else {
                    Message({
                        message: '登录成功！',
                        type: 'success',
                        duration: 2 * 1000
                    })
                    const token = getToken();
                    commit('SET_TOKEN', token);
                    setToken(token);
                    resolve();
                }

            }).catch(error => {
                reject(error)
            })
        })
    },

    // get user info
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(response => {
                const { data } = response
                if (!data) {
                    return reject('Verification failed, please Login again.')
                }
                const { userName, avatar } = data
                commit('SET_NAME', userName)
                commit('SET_AVATAR', myBaseUrl + avatar)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // user logout
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                removeToken() // must remove  token  first
                resetRouter()
                commit('RESET_STATE')
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            removeToken() // must remove  token  first
            commit('RESET_STATE')
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
