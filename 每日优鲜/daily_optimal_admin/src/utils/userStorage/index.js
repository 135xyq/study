// 用户本地存储的信息


// 存储
export function setStorage(params) {
    localStorage.setItem('$daily_optimal_admin_userInfo', JSON.stringify(params))
}



// 获取

export function getStorage() {
    return JSON.parse(localStorage.getItem('$daily_optimal_admin_userInfo'))
}


// 移出(退出登录)

export function removeStorage() {
    localStorage.removeItem('$daily_optimal_admin_userInfo');
}