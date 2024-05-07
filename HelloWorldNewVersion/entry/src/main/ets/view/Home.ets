/**
 * @Author: xieyq26
 * @Date: 2024/05/06 11:34:34
 * @FilePath: src\main\ets\view\Home.ets
 * @description 首页
 */

import router from '@ohos.router';

class ListItemData {
  title: string
  url: string

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}

@Component
export default struct Index {
  @State message: string = '首页';
  @State list: ListItemData[] = [
    new ListItemData('读书排行榜', 'pages/ReadPage'),
    new ListItemData('待办列表', 'pages/TodoList'),
    new ListItemData('State装饰器', 'pages/StatePage'),
    new ListItemData('Video视频播放器', 'pages/VideoPage'),
    new ListItemData('弹窗', 'pages/DialogPage'),
    new ListItemData('首选项-设置字体', 'pages/PreferencesPage'),
  ]

  build() {
    Column() {
      Text(this.message)
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
        .textAlign(TextAlign.Start)
        .padding({
          top: 20,
          left: 30,
          bottom: 10
        })
        .width('100%')
      List() {
        ForEach(this.list, (item: ListItemData) => {
          ListItem() {
            Text(item.title)
              .width('90%')
              .height(48)
              .lineHeight(24)
              .backgroundColor(Color.Gray)
              .borderRadius(24)
              .fontColor(Color.White)
              .fontWeight(FontWeight.Bolder)
              .margin({
                top: 10
              })
              .padding({
                left: 20
              })
              .onClick(() => {
                router.pushUrl({
                  url: item.url
                })
              })
          }
          .width('100%')
        })
      }
    }
    .height('100%')
  }
}