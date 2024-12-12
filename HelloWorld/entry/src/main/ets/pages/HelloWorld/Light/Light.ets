@Entry
@Component
struct Light {
  @State isOn: boolean = false

  build() {
    Column({ space: 20 }) {
      if (this.isOn) {
        Image('/pages/HelloWorld/Light/image/img1.png')
          .width(300)
      } else {
        Image('/pages/HelloWorld/Light/image/img2.png')
          .width(300)
      }
      Row({space: 50}) {
        Button('上一个')
          .onClick(() => {
            this.isOn = false
          })
        Button('下一个')
          .onClick(() => {
            this.isOn = true
          })
      }
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}