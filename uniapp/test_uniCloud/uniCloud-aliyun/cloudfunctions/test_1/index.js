'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {userName,age} = event;
	
	//返回数据给客户端
	return {
		code:0,
		msg:`请求成功！用户名为${userName},年龄为${age}`
	}
};
