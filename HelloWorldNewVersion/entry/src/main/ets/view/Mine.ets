/**
 * @Author: xieyq26
 * @Date: 2024/05/06 11:39:49
 * @FilePath: src\main\ets\view\Mine.ets
 * @description 我的
 */



@Component
export default struct Index {
  @State message: string = '我的';

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
      }
      .width('100%')
    }
    .height('100%')
  }
}