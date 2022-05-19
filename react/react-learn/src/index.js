import React from "react";
import ReactDOM from "react-dom/client";
import Tick from "./components/Tick";


const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render((<Tick number={10}></Tick>))


