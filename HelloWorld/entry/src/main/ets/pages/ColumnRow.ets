import HelloComponent  from './HelloComponent'

@Entry
@Component
struct Index {
  @State count: number = 0
  @State message:string = '点我呀'

  build() {
    Row() {
      Column() {
        Button(this.message,{ type: ButtonType.Capsule, stateEffect: true })
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
        TextInput({placeholder:'请输入密码'})
          .type(InputType.Password)
          .fontColor(Color.Red)
          .fontSize(20)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily('Arial')
        LoadingProgress()
          .color(Color.Blue)
          .height(160)
          .width(160)
      }
      Column(){
        Text('哈哈哈')
          .fontColor(Color.Red)
      }
    }
  }
}