import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import loadable from "./loadable.js"
import Home from './components/home';
class RouterView extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/edior" component={loadable(() => import("./components/Edior"))}></Route>
                        <Route path="/*" component={loadable(() => import("./components/home"))}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default RouterView