import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger"

import count from "./count";

const store = createStore(count,applyMiddleware(logger));

export default store;