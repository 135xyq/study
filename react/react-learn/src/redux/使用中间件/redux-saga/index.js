import { createStore ,applyMiddleware} from "redux";
import reducer from "./reducer";
import logger from "redux-logger"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga"
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from '@redux-devtools/extension';

const sagaMid = createSagaMiddleware();
export const history = createBrowserHistory()

const store = createStore(reducer(history),composeWithDevTools(applyMiddleware(routerMiddleware(history),sagaMid,logger)));

sagaMid.run(rootSaga)

export default store;