import HelloComponent  from './HelloComponent'
class ItemData{
  title: string
  desc: string

  constructor(title:string,desc: string) {
    this.title = title
    this.desc = desc
  }
}
let iconList = []

for(let i = 0; i < 10;i++) {
  iconList.push(new ItemData('列表标题' + i,'列表内容' + i))
}

@Entry
@Component
struct Index {
  @State count: number = 0
  @State message:string = '点我呀'
  @State iconList:ItemData[] = iconList


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
        TextInput({placeholder:'请输入密码'})
          .type(InputType.Password)
          .fontColor(Color.Green)
          .fontSize(20)
          .fontStyle(FontStyle.Italic)
          .fontWeight(FontWeight.Bold)
          .fontFamily('Arial')
        LoadingProgress()
          .color(Color.Blue)
          .height(160)
          .width(160)
        Grid() {
          ForEach(this.iconList,(item:ItemData)=>{
            GridItem(){
              Column(){
                Row(){
                  Text(item.title)
                  Text(item.desc)
                }
              }
            }
          })
        }
        .rowsTemplate('1fr 1fr')
        .columnsTemplate('1fr 1fr 1fr 1fr')
        .rowsGap(12)
        .columnsGap(8)
      }
      
      Column(){
        Text('哈哈哈')
          .fontColor(Color.Red)
      }
    }
  }
}