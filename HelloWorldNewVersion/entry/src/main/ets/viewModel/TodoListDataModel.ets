export default class TodoList {
  text: string
  isCompleted: boolean

  constructor(text: string, isCompleted: boolean) {
    this.text = text
    this.isCompleted = isCompleted
  }
}