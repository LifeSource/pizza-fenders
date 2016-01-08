import React from "react";
import { render } from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";

import Home from "./home/home.js";
import About from "./about/about.js";

require("../styles/layout.styl");
require("../styles/site.styl");

export default class Index extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <header>
                    <img className="logo" src="images/reactlogo.png" alt="react's logo"/>
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
