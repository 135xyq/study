@Entry
@Component
struct ListDemo {
  private arr: number[] = [0, 1, 2, 3, 4, 5, 6]

  build() {
    Column() {
      List({ space: 10 }) {
        ForEach(this.arr, (item: number) => {
          ListItem() {
            Text(`${item}`)
              .width('100%')
              .height(100)
              .fontSize(20)
              .fontSize(30)
              .fontColor(Color.Green)
              .textAlign(TextAlign.Center)
              .borderRadius(10)
              .backgroundColor(0x00FFFF)
          }
          .onClick(()=>{
            console.log('item')
          })
        }, item => item)
      }
    }
    .padding(12)
    .height('100%')
    .backgroundColor(0xF1F3F5)
  }
}