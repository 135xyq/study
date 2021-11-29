const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    // token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    user: state => state.user.user
}
export default getters
