import React, { createContext, Component } from "react";
const themeContext = createContext({
    theme:{
        color:'#000',
    },
    changeTheme:()=>{}
});

export default class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            theme:{
                color:"#f00"
            },
            changeTheme:this.toggleTheme
        }
    }

    toggleTheme = () => {
        this.setState(state => ({
          theme:state.theme.color === "#000" ? {color:"#f00"} : {color:"#000"}
        }));
      };
  render() {
    return (
      <themeContext.Provider value={this.state}>
        <ThemeUser></ThemeUser>
      </themeContext.Provider>
    )
  }
}


function ThemeUser(){
    return <themeContext.Consumer>
        {(val)=>(<button onClick={val.changeTheme} style={val.theme}>测试</button>)}
    </themeContext.Consumer>
}
