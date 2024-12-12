/**
 * @Author: xieyq26
 * @Date: 2024/05/13 11:33:35
 * @FilePath: src\main\ets\pages\WebPage.ets
 * @description WebView的学习
 */

import web_webview from '@ohos.web.webview'

@Entry
@Component
struct WebComponent {
  controller: web_webview.WebviewController = new web_webview.WebviewController()
  build() {
    Column() {
      // 通过$rawfile加载本地资源文件。
      Web({ src: $rawfile("webViewTest.html"), controller: this.controller })
      Text('11')
    }
  }
}