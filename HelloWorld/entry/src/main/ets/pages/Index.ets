import HelloComponent  from './HelloComponent'

@Entry
@Component
struct Index {
  @State count: number = 0
  @State message:string = '点我'

  build() {
    Row() {
      Column() {
        Button(this.message)
          .onClick(()=>{
            this.message = '谁让你点我的！'
          })
          .fontSize(30)
          .padding(20)
          .fontColor('red')
          .fontWeight(FontWeight.Bold)
        Button('返回')
          .onClick(()=>{
            console.log('111')
            this.message = '又回来了！'
          })
          .margin(20)
          .padding(20)
        HelloComponent({message: '测试'})
      }
      .width('100%')
    }
    .height('100%')
  }
}