'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const {classify} = event;
	let matchObj = {};
	if(classify !== '全部'){
		matchObj = {classify}
	}
	//event为客户端上传的参数
	const collection =await db.collection('article')
	.aggregate()
	.match(matchObj)
	.project({
		content:0 
	})
	.end()
	
	//返回数据给客户端
	return{
		code:0,
		msg:'数据获取成功！',
		data:collection.data
	}
};
