@Entry
@Component
struct CustomAnimationExample {
  @State widthSize: number = 80
  @State heightSize: number = 40
  @State flag: boolean = true
  @State widthSize1: number = 80
  @State heightSize1: number = 40
  @State flag1: boolean = true
  // 自定义动画函数
  computeSize() {
    let duration = 2000
    // 设定循环周期
    let period = 1
    let widthSizeEnd = 0
    let heightSizeEnd = 0
    if (this.flag) {
      widthSizeEnd = 50
      heightSizeEnd = 25
    } else {
      widthSizeEnd = 80
      heightSizeEnd = 40
    }
    // 计算循环次数
    let doTimes = duration / period
    // 计算每次循环变化量
    let deltaHeight = (heightSizeEnd - this.heightSize) / doTimes
    let deltaWeight = (widthSizeEnd - this.widthSize) / doTimes
    // 循环，组件每个周期增加一部分宽高
    for (let i = 1; i <= doTimes; i++) {
      let t = period * (i);
      setTimeout(() => {
        this.heightSize = this.heightSize + deltaHeight
        this.widthSize = this.widthSize + deltaWeight
      }, t)
    }
    this.flag = !this.flag
  }

  build() {
    Column() {
      Text()
        .width(this.widthSize)
        .height(this.heightSize)
        .backgroundColor(Color.Pink)
      Button('开启动画')
        .margin({
          top: 20
        })
        .onClick(() => {
          let delay = 500
          // 调用自定义函数
          setTimeout(() => {
            this.computeSize()
          }, delay)
        })
      Text()
        .width(this.widthSize1)
        .height(this.heightSize1)
        .backgroundColor(Color.Brown)
        .margin({
          top: 20
        })
      Button('开启动画')
        .margin({
          top: 20
        })
        .onClick((event?: ClickEvent | undefined) => {
          // 对Button组件的宽高属性进行动画配置
          if (this.flag1) {
            animateTo({
              duration: 2000, // 动画时长
              curve: Curve.Linear, // 动画曲线
              delay: 500, // 动画延迟
              iterations: 1, // 播放次数
              playMode: PlayMode.Normal // 动画模式
            }, () => {
              this.widthSize1 = 50;
              this.heightSize1 = 25;
            })
          } else {
            animateTo({
              duration: 2000, // 动画时长
              curve: Curve.Linear, // 动画曲线
              delay: 500, // 动画延迟
              iterations: 1, // 播放次数
              playMode: PlayMode.Normal // 动画模式
            }, () => {
              this.widthSize1 = 80;
              this.heightSize1 = 40;
            })
          }
          this.flag1 = !this.flag1;
        })
    }.width('100%').margin({ top: 5 })
  }
}