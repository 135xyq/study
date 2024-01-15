@Component
export default struct HelloComponent{
  @State message:string = 'hello'
  build(){
    Row(){
      Text(this.message)
    }
  }
}
