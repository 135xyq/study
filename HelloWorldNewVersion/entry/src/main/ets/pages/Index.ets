/**
 * @Author: xieyq26
 * @Date: 2024/04/29 10:17:00
 * @FilePath: src\main\ets\pages\Index.ets
 * @description 
 */

import router from '@ohos.router';
@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

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