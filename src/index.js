import React from "react";
import { render } from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";

import Home from "./components/home/home";
import About from "./components/about/about";

require("../styles/layout.styl");
require("../styles/site.styl");

export default class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <header>
                    <img className="logo" src="/images/reactlogo.png" alt="react's logo"/>
                    <h1> &lt;Pizza-Fenders&gt;</h1>
                    <ul className="nav-list">
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </header>
                <div clasName="main">{this.props.children}</div>
            </div>            
        );
    }
}

const routes = {
    path: "/",
    component: Index,
    indexRoute: { component: Home },
    childRoutes: [
        { path: "home", component: Home },
        { path: "about", component: About}
    ]
};

render(<Router routes={routes} history={browserHistory} />, document.getElementById("container"));
