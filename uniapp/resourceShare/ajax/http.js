export default({name,data={}})=>{
	// 返回一个Promise对象
	return new Promise((resolve,reject)=>{
		uni.showLoading({});//加载的效果
		// 调用云函数
		uniCloud.callFunction({
			name,
			data,
			success({result}){
				if(result.code === 0){
					// 成功
					resolve(result.data)
				}else{
					// 结果有误
					uni.showToast({
						icon:"none",
						title:result.msg
					})
				}
			},
			fail(err) {
				// 失败
				reject(err)
			},
			complete(){
				// 请求完成后
				uni.hideLoading();//关闭loading效果
			}
		});
		
	})
}