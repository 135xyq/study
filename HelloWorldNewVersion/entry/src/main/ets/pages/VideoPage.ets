@Entry
@Component
struct VideoPage {
  @State videoSrc: Resource = $rawfile('videoTest.mp4')
  @State previewUri: Resource = $r('app.media.preview')
  @State curRate: PlaybackSpeed = PlaybackSpeed.Speed_Forward_1_00_X
  @State isAutoPlay: boolean = false
  @State showControls: boolean = true
  @State sliderStartTime: string = '';
  @State currentTime: number = 0;
  @State durationTime: number = 0;
  @State durationStringTime: string ='';
  controller: VideoController = new VideoController()

  build() {
    Row() {
      Column() {
        Video({
          src: this.videoSrc,
          previewUri: this.previewUri,
          currentProgressRate: this.curRate,
          controller: this.controller
        }).controls(true).autoPlay(true)
          .onPrepared((event)=>{
            if(event){
              this.durationTime = event.duration
            }
          })
          .onUpdate((event)=>{
            if(event){
              this.currentTime =event.time
            }
          })
        Row() {
          Text(JSON.stringify(this.currentTime) + 's')
          Slider({
            value: this.currentTime,
            min: 0,
            max: this.durationTime
          })
            .onChange((value: number, mode: SliderChangeMode) => {
              this.controller.setCurrentTime(value);
            }).width("80%")
          Text(JSON.stringify(this.durationTime) + 's')
        }
        .opacity(0.8)
        .width("100%")
      }
      .width('100%')
    }
    .height('40%')
  }
}