import ReadListItem from '../view/ReadListItem'
import ReadData from '../viewModel/ReadListData'
import { ReadViewModel } from '../viewModel/ReadListDataModel'
import ReadListHeader from '../view/ReadListHeader'
import ReadListTitle from '../view/ReadListTitle'

let readModel: ReadViewModel = new ReadViewModel()

@Entry
@Component
struct ReadPage {
  @State dataSource: ReadData[] = [];
  @State dataSource1: ReadData[] = [];
  @State isRefreshData: boolean = false

  aboutToAppear(): void {
    this.dataSource = readModel.loadDataSource()
    this.dataSource1 = readModel.loadDataSource1()
  }

  build() {
    Column() {
      ReadListTitle({isRefreshData: this.isRefreshData})
      ReadListHeader()
      this.ReadList()
    }
    .height('100%')
  }

  @Builder
  ReadList() {
    Column() {
      List() {
        ForEach(this.isRefreshData ? this.dataSource: this.dataSource1, (item: ReadData, index: number) => {
          ListItem() {
            ReadListItem({ index: (Number(index) + 1), name: item.name, vote: item.vote })
          }
        })
      }
      .width('100%')
      .height('100%')
      .divider({ strokeWidth: 2 })
    }
  }
}