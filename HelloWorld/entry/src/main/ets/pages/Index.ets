@Entry
@Component
struct ColumnRow {
  build() {
    Row(){
      Text('12')
        .fontColor(Color.Red)
        .backgroundColor(Color.Black)
        .fontSize(50)
        .padding(20)
      Text('22')
        .fontColor(Color.Blue)
        .backgroundColor(Color.Green)
        .fontSize(20)
        .padding(20)
    }
    .width('100%')
    .height(500)
    .alignItems(VerticalAlign.Bottom)
    .justifyContent(FlexAlign.SpaceAround)
  }
}