import React from "react";

class Pizza extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h4>{this.props.pizza.name}</h4> 
                <span>{this.props.pizza.content} </span> 
                <br/>
                <span>${this.props.pizza.price}</span> 
                <br/>
                <strong>{this.props.pizza.category}</strong> 
                <br/>
            </div>        
        );
    }
}

export default Pizza;

