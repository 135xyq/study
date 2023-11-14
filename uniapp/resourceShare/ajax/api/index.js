// 将所有接口函数导出
const requireApi = require.context('.', true, /.js$/);
let module = {};

requireApi.keys().forEach((key, index) => {
	if (key === './index.js') return
	Object.assign(module, requireApi(key))
})

export default module

