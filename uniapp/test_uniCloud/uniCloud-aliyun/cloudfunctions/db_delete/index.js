'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const db = uniCloud.database();
	const demo = db.collection('demo');
	const {id} = event;
	console.log(id)
	const res = demo.doc(id).remove();//删除一个用户
	
	//返回数据给客户端
	return {
		code:0,
		msg:res
	}
};
