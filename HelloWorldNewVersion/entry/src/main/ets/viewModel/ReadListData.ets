export default class ReadListData{
  name:string
  id:string
  vote: string

  constructor( id:string,name:string, vote:string) {
    this.name = name;
    this.id = id;
    this.vote = vote;
  }
}