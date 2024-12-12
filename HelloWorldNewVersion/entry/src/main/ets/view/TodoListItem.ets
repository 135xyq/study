/**
 * @Author: xieyq26
 * @Date: 2024/05/06 09:44:58
 * @FilePath: src\main\ets\view\TodoListItem.ets
 * @description 待办列表每一项的组件
 */
@Component
export default struct TodoListItem{
  @Prop content: string
  @State isComplete: boolean = false

  @Builder ListIcon(Icon:Resource) {
    Image(Icon)
      .objectFit(ImageFit.Contain)
      .width(20)
      .height(20)
      .margin(20)
  }
  build() {
    Row(){
      if(this.isComplete) {
        this.ListIcon($r('app.media.ic_ok'))
      }else{
        this.ListIcon($r('app.media.ic_default'))
      }

      Text(this.content)
        .fontSize(16)
        .lineHeight(20)
        .opacity(this.isComplete ? 0.4: 1)
        .decoration({ type: this.isComplete ? TextDecorationType.LineThrough : TextDecorationType.None })
    }
    .height(40)
    .width('93.3%')
    .borderRadius(24)
    .backgroundColor(Color.White)
    .onClick(()=>{
      this.isComplete = !this.isComplete
    })
  }
}