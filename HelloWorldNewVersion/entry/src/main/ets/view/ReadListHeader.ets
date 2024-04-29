@Component
export default struct ReadListTitle{
  build() {
    Row(){
      Text('排名')
      Text('书名')
      Text('阅读量')
    }
    .width('100%')
    .height(48)
    .padding({
      left: 20,
      right: 20
    })
    .justifyContent(FlexAlign.SpaceBetween)
  }
}