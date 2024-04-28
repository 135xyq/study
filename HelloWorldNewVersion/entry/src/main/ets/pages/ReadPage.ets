import ReadListItem from '../view/ReadListItem'
import ReadListData from '../viewModel/ReadListData'
@Entry
@Component
struct ReadPage {
  @State dataSource:ReadListData[] = [];

  aboutToAppear(): void {
    this.dataSource =
  }


  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
      }
      .width('100%')
    }
    .height('100%')
  }

  @Builder RankList() {
    Column() {
      List() {
        ForEach(this.dataSource,
          (item: RankData, index?: number) => {
            ListItem() {
              ListItemComponent({ index: (Number(index) + 1), name: item.name, vote: item.vote,
                isSwitchDataSource: this.isSwitchDataSource
              })
            }
          }, (item: RankData) => JSON.stringify(item))
      }
      .width(WEIGHT)
      .height(Style.LIST_HEIGHT)
      .divider({ strokeWidth: Style.STROKE_WIDTH })
    }
    .padding({
      left: Style.RANK_PADDING,
      right: Style.RANK_PADDING
    })
    .borderRadius(Style.BORDER_RADIUS)
    .width(widthValue)
    .alignItems(HorizontalAlign.Center)
    .backgroundColor(Color.White)
  }
}