import React from "react";
import ReactDOM from "react-dom/client";
import routerConfig from "./dva/routerConfig"
import dva from "dva"
import countModle from "./dva/models/counter"

const app = new dva();
app.model(countModle)

app.router(routerConfig)
app.start("#root")


