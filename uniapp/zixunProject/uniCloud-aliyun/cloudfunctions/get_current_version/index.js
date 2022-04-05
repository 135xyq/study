'use strict';
const db = uniCloud.database()

exports.main = async (event, context) => {

  const version = await db.collection('version').get()

  //返回数据给客户端
  return {
    code: 0,
    data: {
      version: version.data[0].current_version,
      downLoadLinkUrl: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-36906871-4a1f-4582-8f16-bc09f2a6fa1f/7842e539-b14c-4413-9173-d153d7469796.apk'
  }
};
