import ajax from '../../http.js';

// 获取标签分类
export const get_lable_list = data =>ajax({
	name:'db_label_get'
})