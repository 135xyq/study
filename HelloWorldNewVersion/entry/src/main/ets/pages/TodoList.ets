import todoListData from '../model/TodoListData'
import TodoListDataModel from '../viewModel/TodoListDataModel'
import TodoListItem from '../view/TodoListItem'
import router from  "@ohos.router"

@Entry
@Component
struct ToDoList {
  @State todoList: TodoListDataModel[] = todoListData

  build() {

    Column({ space: 20 }) {
      Row() {
        Image($r('app.media.back'))
          .width(20)
          .height(20)
          .margin({
            right:10
          })
          .onClick(()=>{
            router.back()
          })
        Text('待办')
          .fontSize(25)
          .fontWeight(FontWeight.Bold)
          .lineHeight(30)
          .width('100%')
          .textAlign(TextAlign.Start)
      }
      .margin({
        top: 20,
        left: 20
      })

      ForEach(this.todoList, (item: TodoListDataModel, index: number) => {
        TodoListItem({ content: item.text })
      }, (item: TodoListDataModel) => JSON.stringify(item))

    }
    .width('100%')
    .height('100%')
    .backgroundColor('#F1F3F5')
  }
}