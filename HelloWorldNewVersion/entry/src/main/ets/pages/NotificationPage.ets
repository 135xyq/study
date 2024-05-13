import {notificationManager} from "@kit.NotificationKit"
import base from '@ohos.base';
@Entry
@Component
struct NotificationDemo {
  @State num:number = 1
  publishNotification() {
    let notificationRequest: notificationManager.NotificationRequest = { // 描述通知的请求
      id: this.num, // 通知ID
      content: { // 通知内容
        notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT, // 普通文本类型通知
        normal: { // 基本类型通知内容
          title: '通知内容标题' + this.num,
          text: '通知内容详情' + this.num
        }
      }
    }

    notificationManager.addSlot(notificationManager.SlotType.SOCIAL_COMMUNICATION).then(() => {
      console.info("addSlot success");
    }).catch((err: base.BusinessError) => {
      console.error(`addSlot fail: ${JSON.stringify(err)}`);
    });

    notificationManager.publish(notificationRequest).then(() => { // 发布通知
      console.info('publish success');
    }).catch((err: Error) => {
      console.error(`publish failed,message is ${err}`);
    });
  }

  build() {
    Column() {
      Button('发送通知' + this.num)
        .onClick(() => {
          this.publishNotification()
          this.num ++
        })
    }
    .width('100%')
  }
}