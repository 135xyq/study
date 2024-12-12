import { MapComponent, mapCommon, map } from '@kit.MapKit';
import { AsyncCallback } from '@kit.BasicServicesKit';

// 需要引入@ohos.geoLocationManager模块
import { geoLocationManager } from '@kit.LocationKit';

// 获取用户位置坐标
let latitude: number = 45;
let longitude: number = 23;
geoLocationManager.getCurrentLocation().then((result) => {
  console.log('current location: ' + JSON.stringify(result));
  latitude = result.latitude;
  longitude = result.longitude;
});

// 设置用户的位置
let position: geoLocationManager.Location = {
  "latitude": latitude,
  "longitude": longitude,
  "altitude": 0,
  "accuracy": 0,
  "speed": 0,
  "timeStamp": 0,
  "direction": 0,
  "timeSinceBoot": 0
};
@Entry
@Component
struct HuaweiMapDemo {
  private TAG = "HuaweiMapDemo";
  private mapOption?: mapCommon.MapOptions;
  private callback?: AsyncCallback<map.MapComponentController>;
  private mapController?: map.MapComponentController;

  aboutToAppear(): void {
    // 地图初始化参数，设置地图中心点坐标及层级
    this.mapOption = {
      position: {
        target: {
          latitude: 39.9,
          longitude: 116.4
        },
        zoom: 10
      },
      // mapType: mapCommon.MapType.TERRAIN,
      myLocationControlsEnabled: true,
      scaleControlsEnabled: true,
    };

    // 地图初始化的回调
    this.callback = async (err, mapController) => {
      if (!err) {
        // 获取地图的控制器类，用来操作地图
        this.mapController = mapController;
        this.mapController.setBuildingEnabled(true);
        // 启用我的位置图层
        this.mapController.setMyLocationEnabled(true);
        // 启用我的位置按钮
        this.mapController.setMyLocationControlsEnabled(true);
        this.mapController.setMyLocation(position);
        this.mapController.on("mapLoad", () => {
          console.info(this.TAG, `on-mapLoad`);
        });
      }
    };
  }

  build() {
    Stack() {
      // 调用MapComponent组件初始化地图
      MapComponent({ mapOptions: this.mapOption, mapCallback: this.callback }).width('100%').height('100%');
    }.height('100%')
  }
}