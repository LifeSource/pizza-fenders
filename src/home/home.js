import React from "react";
import Menu from "../components/menu/menu";

class Home extends React.Component {

    constructor() {
        super();
        
    }

    render() {

        return (
            <div>
                <h1>Home Component</h1>
                <Menu />    
            </div>
        );
    }
}

export default Home;

