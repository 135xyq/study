/**
 * @Author: xieyq26
 * @Date: 2024/05/13 17:04:32
 * @FilePath: src\main\ets\pages\NotificationPage.ets
 * @description 通知和后台提醒
 */

import { notificationManager } from "@kit.NotificationKit"
import reminderAgentManager from '@ohos.reminderAgentManager';
import base from '@ohos.base';

@Entry
@Component
struct NotificationDemo {
  @State num: number = 1
  targetReminderAgent: reminderAgentManager.ReminderRequestAlarm = {
    reminderType: reminderAgentManager.ReminderType.REMINDER_TYPE_ALARM, // 提醒类型为闹钟类型
    hour: 17, // 指明提醒的目标时刻
    minute: 29, // 指明提醒的目标分钟
    daysOfWeek: [1, 2, 3, 4, 5, 6, 7], // 指明每周哪几天需要重复提醒
    actionButton: [// 设置弹出的提醒通知信息上显示的按钮类型和标题
      {
        title: '关闭',
        type: reminderAgentManager.ActionButtonType.ACTION_BUTTON_TYPE_CLOSE
      },
      {
        title: '推迟',
        type: reminderAgentManager.ActionButtonType.ACTION_BUTTON_TYPE_SNOOZE
      },
    ],
    wantAgent: {
      // 点击提醒通知后跳转的目标UIAbility信息
      pkgName: 'com.example.helloworldnewversion',
      abilityName: 'EntryAbility'
    },
    maxScreenWantAgent: {
      // 全屏显示提醒到达时自动拉起的目标UIAbility信息
      pkgName: 'com.example.helloworldnewversion',
      abilityName: 'EntryAbility'
    },
    ringDuration: 5, // 指明响铃时长（单位：秒）
    snoozeTimes: 2, // 指明延迟提醒次数
    timeInterval: 5, // 执行延迟提醒间隔（单位：秒）
    title: '测试后台提醒标题', // 指明提醒标题
    content: '测试后台提醒内容', // 指明提醒内容
    expiredContent: '提醒过期了', // 指明提醒过期后需要显示的内容
    snoozeContent: '延迟显示了', // 指明延迟提醒时需要显示的内容
    notificationId: 99, // 指明提醒使用的通知的ID号，相同ID号的提醒会覆盖
    slotType: notificationManager.SlotType.SOCIAL_COMMUNICATION // 指明提醒的Slot类型
  }

  // 设置通知内容
  publishNotification() {
    let notificationRequest: notificationManager.NotificationRequest = {
      // 描述通知的请求
      id: this.num, // 通知ID
      content: {
        // 通知内容
        notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT, // 普通文本类型通知
        normal: {
          // 基本类型通知内容
          title: '通知内容标题' + this.num,
          text: '通知内容详情' + this.num
        }
      }
    }

    // 设置通知通道
    notificationManager.addSlot(notificationManager.SlotType.SOCIAL_COMMUNICATION).then(() => {
      console.info("addSlot success");
    }).catch((err: base.BusinessError) => {
      console.error(`addSlot fail: ${JSON.stringify(err)}`);
    });

    // 发布通知
    notificationManager.publish(notificationRequest).then(() => { // 发布通知
      console.info('publish success');
    }).catch((err: Error) => {
      console.error(`publish failed,message is ${err}`);
    });
  }

  // 发布后台消息提醒
  publishReminder() {
    reminderAgentManager.publishReminder(this.targetReminderAgent).then((res: number) => {
      console.info('Succeeded in publishing reminder. ');
      let reminderId: number = res; // 发布的提醒ID
    }).catch((err: base.BusinessError) => {
      console.error(`Failed to publish reminder. Code: ${err.code}, message: ${err.message}`);
    })
  }

  build() {
    Column() {
      Button('发送通知' + this.num)
        .margin({
          top: 20
        })
        .onClick(() => {
          this.publishNotification()
          this.num++
        })
      Button('后台代理提醒')
        .margin({
          top: 20
        })
        .onClick(() => {
          this.publishReminder()
        })
    }
    .width('100%')
  }
}