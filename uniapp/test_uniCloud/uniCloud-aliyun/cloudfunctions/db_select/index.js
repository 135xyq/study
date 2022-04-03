'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const db = uniCloud.database();//使用数据库
	const demo = db.collection('demo');//获取demo表
	const res = await demo.get();
	
	//返回数据给客户端
	return{
		code:0,
		msg:res
	}
};
