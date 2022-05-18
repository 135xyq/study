import React from "react";
import ReactDOM from "react-dom/client";
import HeroList from "./components/HeroList";


const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

async function fetchAllHeros(){
	const heros = await fetch("https://study.duyiedu.com/api/herolist").then(resp=>resp.json()).then(resp=>resp.data);
	return heros;
}

async function render(){
	root.render(<div>获取数据中......</div>)
	const heros = await fetchAllHeros();
	root.render((<HeroList heros={heros}></HeroList>))
}


render();


