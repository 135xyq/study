/**
 * @Author: xieyq26
 * @Date: 2024/04/29 10:17:00
 * @FilePath: src\main\ets\pages\Index.ets
 * @description 
 */
import Home from "../view/Home"
import Mine from "../view/Mine"
@Entry
@Component
struct Index {
  private controller: TabsController = new TabsController();
  @State currentIndex: number = 0;

  build() {
    Column(){
      Tabs({barPosition: BarPosition.End,controller: this.controller}){
        TabContent(){
          Home()
        }
        .tabBar(this.TabBuilder('首页', 0,
          $r('app.media.home_selected'), $r('app.media.home_normal')))
        TabContent(){
          Mine()
        }
        .tabBar(this.TabBuilder('我的', 1,
          $r('app.media.mine_selected'), $r('app.media.mine_normal')))
      }
      .barMode(BarMode.Fixed)
      .onChange((index: number) => {
        this.currentIndex = index;
      })
    }
  }

  @Builder TabBuilder(title: string, index: number, selectedImg: Resource, normalImg: Resource) {
    Column() {
      Image(this.currentIndex === index ? selectedImg : normalImg)
        .width(25)
        .height(25)
      Text(title)
        .margin({ top: 10 })
        .fontSize(14)
        .fontColor(this.currentIndex === index ? '#1698CE' : "#6B6B6B")
    }
    .justifyContent(FlexAlign.Center)
    .height(56)
    .width('100%')
    .onClick(() => {
      this.currentIndex = index;
      this.controller.changeIndex(this.currentIndex);
    })
  }
}