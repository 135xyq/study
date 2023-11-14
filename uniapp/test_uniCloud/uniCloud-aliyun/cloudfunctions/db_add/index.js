'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	// 新增一个记录
	const {userName,age} = event;//获取前端数据
	const db = uniCloud.database();//使用数据库
	const demo = db.collection('demo');//获取demo表
	const res =await demo.add({userName,age});
	
	//返回数据给客户端
	return {
		code:0,
		mag:res
	}
};
