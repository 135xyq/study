class User {
  readonly id: string
  private nickName: string
  age: number
  des?: string = "描述信息"

  constructor(id: string, name: string, age: number) {
    this.id = id;
    this.nickName = name;
    this.age = age;
  }
}

const user1 = new User('123', 'test', 22);

console.log(user1.age);