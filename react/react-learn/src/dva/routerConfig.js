import {routerRedux,Route,Link,Switch} from "dva/router"
import Count from "./components/Count"
import React from "react";
export default function({history}){
    return(<routerRedux.ConnectedRouter history={history}>
        <div>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/count">计数器</Link>
                </li>
            </ul>
            <div>
                <Switch>
                    <Route path="/count" component={Count}>计数器</Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
            </div>
        </div>
    </routerRedux.ConnectedRouter>)
}

function Home(){
    return <p>首页</p>
}