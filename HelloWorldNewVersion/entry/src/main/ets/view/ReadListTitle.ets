import router from '@ohos.router';
@Component
export default struct ReadListTitle {
  @Link isRefreshData:boolean
  build() {
    Row() {
      Row() {
        Image($r('app.media.back'))
          .width(20)
          .height(20)
          .onClick(()=>{
            router.back()
          })
        Text('排行榜')
          .padding({
            left: 20
          })
          .fontSize(16)
          .fontColor(Color.Brown)
      }

      Row() {
        Image($r('app.media.loading'))
          .width(20)
          .height(20)
          .onClick(()=>{
            this.isRefreshData = !this.isRefreshData
          })
      }
    }
    .width('100%')
    .justifyContent(FlexAlign.SpaceBetween)
    .padding({
      left: 20,
      right: 20,
      bottom: 10
    })
    .margin({
      top: 20
    })
  }
}