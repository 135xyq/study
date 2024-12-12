@Entry
@Component
struct Login {

  build() {
    Row() {
      Column() {
        Image($r('app.media.avatar'))
          .width(78)
          .height(78)
        Text($r('app.string.login_name'))
          .margin({
            top:20,
          })
          .fontColor(Color.Green)
          .fontSize(20)
          .fontWeight(FontWeight.Bolder)
        Image('https://v2.cn.vuejs.org/images/logo.svg')
          .width(100)
          .height(100)
      }
      .width('100%')
    }
    .height('100%')
  }
}