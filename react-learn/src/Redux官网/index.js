// import { applyMiddleware, legacy_createStore as createStore } from "redux"
import reducer from "./reducer"
// import logger from "redux-logger"
import { configureStore } from '@reduxjs/toolkit'


// const store = createStore(reducer,applyMiddleware(logger));
const store= configureStore({reducer})

export default store;