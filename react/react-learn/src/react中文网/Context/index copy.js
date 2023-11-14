import React, { createContext, Component } from "react";
const themeContext = createContext("dark");

export default function ThemeProvider() {
	return (
		<themeContext.Provider value="light">
			<ThemeSecond></ThemeSecond>
		</themeContext.Provider>
	);
}

function ThemeSecond() {
	return (
		<>
			<ThemeThird></ThemeThird>
			<ThemeThird1></ThemeThird1>
		</>
	);
}

function ThemeThird() {
	return (
		<themeContext.Consumer>
			{(value) => <button>{value}</button>}
		</themeContext.Consumer>
	);
}

class ThemeThird1 extends Component {
    render(){
        return <p>{this.context}</p>
    }
}

ThemeThird1.contextType = themeContext;