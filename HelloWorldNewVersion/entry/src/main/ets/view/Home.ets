/**
 * @Author: xieyq26
 * @Date: 2024/05/06 11:34:34
 * @FilePath: src\main\ets\view\Home.ets
 * @description 首页
 */

import router from '@ohos.router';
@Entry
@Component
export default struct Index {
  @State message: string = '首页';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .fontColor(Color.Red)
          .padding({
            bottom: 10
          })
        Button('读书排行榜')
          .onClick(()=>{
            router.pushUrl({
              url: 'pages/ReadPage'
            })
          })
        Button('待办列表')
          .margin({
            top: 20
          })
          .onClick(()=>{
            router.pushUrl({
              url: 'pages/TodoList'
            })
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}