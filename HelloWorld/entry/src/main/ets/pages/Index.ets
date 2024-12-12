import router from '@ohos.router';
@Entry
@Component
struct ColumnRow {
  @State message:string = '你好'
  build() {
    Column(){
      Button('去列表页')
        .onClick(()=>{
          router.pushUrl({
            url:'pages/List'
          })
        })
        .fontColor(Color.Red)
        .backgroundColor(Color.Black)
        .fontSize(40)
        .padding(10)
        .margin(50)
      Button('去布局页')
        .onClick(()=>{
          router.pushUrl({
            url:'pages/ColumnRow'
          })
        })
        .fontColor(Color.Blue)
        .backgroundColor(Color.Green)
        .fontSize(20)
        .padding(20)
    }
    .width('100%')
    .height(500)
  }
}