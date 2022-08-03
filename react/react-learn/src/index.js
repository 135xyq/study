import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import dva from "dva"
import countModle from "./dva/models/counter"

const app = new dva();
app.model(countModle)

app.router(()=><App/>)
app.start("#root")


