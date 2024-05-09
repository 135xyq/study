import { MapComponent, mapCommon, map } from '@kit.MapKit';
import { AsyncCallback } from '@kit.BasicServicesKit';

/**
 * A page that allows the user to add a marker to Huawei Map using the MapKit API.
 *
 * If you are using this template to create a custom page, you will need to sign into the
 * AppGallery Connect Console, create a new project, and enable the Map API Permission.
 */
@Entry
@Component
struct Index {
  private mapOptions?: mapCommon.MapOptions;
  private callback?: AsyncCallback<map.MapComponentController>;
  private mapController?: map.MapComponentController;

  aboutToAppear(): void {
    let target: mapCommon.LatLng = {
      latitude: 39.9181,
      longitude: 116.3970193
    };
    let cameraPosition: mapCommon.CameraPosition = {
      target: target,
      zoom: 15
    };
    this.mapOptions = {
      position: cameraPosition
    };
    this.callback = async (err, mapController) => {
      if (!err) {
        this.mapController = mapController;
        let markerOptions: mapCommon.MarkerOptions = {
          position: {
            latitude: 39.9181,
            longitude: 116.3970193
          }
        };
        await this.mapController?.addMarker(markerOptions);
      }
    };
  }

  build() {
    Column() {
      MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback })
        .width('100%')
        .height('100%')
    }
    .width('100%')
    .height('100%')
  }
}