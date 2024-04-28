export default class ReadListData{
  name:string
  id:number
  vote: string

  constructor(name:string, id:number, vote:string) {
    this.name = name;
    this.id = id;
    this.vote = vote;
  }
}