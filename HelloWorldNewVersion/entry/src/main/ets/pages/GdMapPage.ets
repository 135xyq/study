import { AMap, MapsInitializer, MapView, MapViewComponent, MapViewManager } from '@amap/amap_lbs_map3d';

MapsInitializer.setApiKey("e8e460454fa68401c9341955f336728a");
MapViewManager.getInstance().getMapView((mapview?: MapView) => {
  if (!mapview) return;
  let mapView: MapView = mapview;
  mapView.onCreate();
  mapView.getMapAsync((map) => {
    let aMap: AMap = map;
  })
})

@Entry
@Component
struct Index {
  build() {
    Row() {
      MapViewComponent()
        .width('100%')
        .height('100%')
    }
  }
}