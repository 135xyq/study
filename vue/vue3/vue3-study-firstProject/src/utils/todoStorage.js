const KEY_LOCAL = 'todoThings';

// 生成一个任务的位移ID
export function createId() {
    // 事件戳和随机数的结合
    return Date.now() + Math.random().toString(16).slice(2, 6);
}

// 获取任务列表
export function fetch() {
    let result = localStorage.getItem(KEY_LOCAL);
    if (result) {
        return JSON.parse(result);
    }
    return [];
}


//保存所有任务
export function save(options) {
    localStorage.setItem(KEY_LOCAL, JSON.stringify(options))
}


/**
 * 筛选出指定的任务
 * @param {*} options 总的数据
 * @param {*} type 筛选的类型 all active completed
 */
export function filterTodos(options, type) {
    if (type === 'all') {
        return options;
    } else if (type === 'active') {
        return options.filter(item => !item.completed);
    } else if (type === 'completed') {
        return options.filter(item => item.completed);
    }
    throw new Error('输入筛选类型有误！');
}