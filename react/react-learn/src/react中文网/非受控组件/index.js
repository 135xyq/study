import React, { Component } from 'react'

export default class NoControlComponent extends Component {
    constructor(props){
        super(props);
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
        this.input = React.createRef()
        this.file = React.createRef()
    }

    onHandleSubmit (e){
        e.preventDefault();
        console.log("名字： ",this.input.current.value);
        console.log("文件： ",this.file.current.files);
    }
  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <p>
        <label>
            名字：
            <input type="text" defaultValue="谢永强" ref={this.input} />
        </label>
        </p>
        <p>
            <input type="file" ref={this.file}/>
        </p>
        <p>
            <input type="submit" />
        </p>
      </form>
    )
  }
}
