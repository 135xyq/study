@Entry
@Component
struct DialogPage {
  @State select: number | number[] = 2;
  private fruits: string[] = ['苹果', '橘子', '香蕉', '猕猴桃', '西瓜'];

  build() {
    Column(){
      Button('点击显示弹窗')
        .onClick(() => {
          AlertDialog.show(
            {
              title: '删除联系人', // 标题
              message: '是否需要删除所选联系人?', // 内容
              autoCancel: false, // 点击遮障层时，是否关闭弹窗。
              alignment: DialogAlignment.Bottom, // 弹窗在竖直方向的对齐方式
              offset: { dx: 0, dy: -20 }, // 弹窗相对alignment位置的偏移量
              primaryButton: {
                value: '取消',
                action: () => {
                  console.info('点击取消按钮');
                }
              },
              secondaryButton: {
                value: '删除',
                fontColor: '#D94838',
                action: () => {
                  console.info('点击删除按钮');
                }
              },
              cancel: () => { // 点击遮障层关闭dialog时的回调
                console.info('点击遮障层关闭dialog');
              }
            }
          )
        })
      Button('文本选择弹窗')
        .margin(20)
        .onClick(() => {
          TextPickerDialog.show({
            range: this.fruits, // 设置文本选择器的选择范围
            selected: this.select, // 设置初始选中项的索引值。
            onAccept: (value: TextPickerResult) => { // 点击弹窗中的“确定”按钮时触发该回调。
              // 设置select为按下确定按钮时候的选中项index，这样当弹窗再次弹出时显示选中的是上一次确定的选项
              this.select = value.index;
              console.info("TextPickerDialog:onAccept()" + JSON.stringify(value));
            },
            onCancel: () => { // 点击弹窗中的“取消”按钮时触发该回调。
              console.info("TextPickerDialog:onCancel()");
            },
            onChange: (value: TextPickerResult) => { // 滑动弹窗中的选择器使当前选中项改变时触发该回调。
              console.info('TextPickerDialog:onChange()' + JSON.stringify(value));
            }
          })
        })
    }
    .justifyContent(FlexAlign.Center)
    .width('100%')
    .height('100%')
  }
}