/**
 * @Author: xieyq26
 * @Date: 2024/05/07 11:13:45
 * @FilePath: src\main\ets\pages\PreferencesPage.ets
 * @description 首选项，数据本地化
 */

import { preferences } from '@kit.ArkData';

const KEY_APP_FONT_SIZE = 'appFontSize'; // 用户首选项Key字段

@Entry
@Component
struct PreferencesPage {
  @State message: string = '在移动互联网蓬勃发展的今天，移动应用给我们生活带来了极大的便利，这些便利的本质在于数据的互联互通。因此在应用的开发中数据存储占据了非常重要的位置，HarmonyOS应用开发也不例外。';
  @State fontSize: number = 12

  aboutToAppear(): void {
    try {
      let options: preferences.Options = { name: 'myStore' };
      let promise = preferences.getPreferences(getContext(this), options);
      promise.then((object: preferences.Preferences) => {
        object.has(KEY_APP_FONT_SIZE).then(async (isExist: boolean) => {
          if (isExist) {
            object.get(KEY_APP_FONT_SIZE, this.fontSize).then((data) => {
              this.fontSize = Number(data);
            });
          }
        })
      })
    } catch (err) {
      console.error("Failed to get preferences. code =" + err.code + ", message =" + err.message);
    }
  }

  onBackPress(): boolean | void {
    console.log('back')
  }

  build() {
    Column() {
      Slider({
        value: this.fontSize,
        min: 1,
        max: 99
      })
        .showTips(true, this.fontSize + 'px')
        .showSteps(true)
        .onChange((value: number, mode: SliderChangeMode) => {
          this.fontSize = value
        })
      Button('保存字体大小到本地')
        .margin({
          top: 40
        })
        .onClick(() => {
          preferences.getPreferences(getContext(this), 'myStore').then((object: preferences.Preferences) => {
            object.put(KEY_APP_FONT_SIZE, this.fontSize).then((data) => {
              object?.flush();
              AlertDialog.show(
                {
                  title: '提示',
                  message: '保存成功！',
                  autoCancel: true,
                  alignment: DialogAlignment.Center,
                  gridCount: 3
                }
              )
            });
          })
        })
      Button('清空本地保存的字体大小')
        .margin({
          top: 20
        })
        .onClick(() => {
          preferences.getPreferences(getContext(this), 'myStore').then((object: preferences.Preferences) => {
            console.log('1')
            object.delete(KEY_APP_FONT_SIZE).then(() => {
              this.fontSize = 12
              AlertDialog.show(
                {
                  title: '提示',
                  message: '清空成功！',
                  autoCancel: true,
                  alignment: DialogAlignment.Center,
                  gridCount: 3
                }
              )
            }).catch(()=>{
              AlertDialog.show(
                {
                  title: '提示',
                  message: '清空失败！',
                  autoCancel: true,
                  alignment: DialogAlignment.Center,
                  gridCount: 3
                }
              )
            })
          })
        })
      Text(this.message)
        .margin({
          top: 20
        })
        .fontSize(this.fontSize)
        .fontWeight(FontWeight.Bold)
        .width('100%')
        .textOverflow({ overflow: TextOverflow.Ellipsis })
        .maxLines(3)
    }
    .width('100%')
    .height('100%')
  }
}