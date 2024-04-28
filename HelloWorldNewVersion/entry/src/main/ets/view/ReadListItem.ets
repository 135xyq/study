@Entry
@Component
export default  struct ReadListItem {
  @Prop index: number
  @Prop name: string
  @Prop vote: string = '0'
  // 是否点击当前数据
  @State isChange: boolean = false
  build() {
    Row() {
      if (this.isRenderCircle()) {
        this.CircleText(this.index)
      }else{
        Text(this.index?.toString())
          .lineHeight(24)
          .textAlign(TextAlign.Center)
          .fontWeight(FontWeight.Bold)
          .fontSize(16)
      }
      Text(this.name)
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .fontColor(this.isChange ? Color.Blue: Color.Black)
      Text(this.vote)
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .fontColor(this.isChange ? Color.Blue: Color.Black)
    }
    .width('100%')
    .height(48)
    .padding({
      left: 20,
      right: 20
    })
    .justifyContent(FlexAlign.SpaceBetween)
    .onClick(()=>{
      this.isChange = !this.isChange
    })
  }

  @Builder CircleText(index:number) {
    Row() {
      Text(this.index?.toString())
        .fontWeight(FontWeight.Bold)
        .fontSize(16)
        .fontColor(Color.White)
    }
    .justifyContent(FlexAlign.Center)
    .size({
      width:24,
      height:24
    })
    .borderRadius(12)
    .backgroundColor(Color.Blue)
  }

  isRenderCircle(): boolean {
    return this.index <= 3
  }
}