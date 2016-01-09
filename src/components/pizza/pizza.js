import React from "react";
let numeral = require("numeral");

class Pizza extends React.Component {

    constructor(props) {
        super(props);
    }


    addPizza() {
        this.props.addToOrder(this.props.pizza);
    }

    render() {

        return (
            <div className="pizza-item">
                <div className="pizza-info">
                    <strong>{this.props.pizza.category}</strong> 
                    <br/>
                    <span>{this.props.pizza.content}</span> 
                    <div className="add-order-button" onClick={this.addPizza.bind(this)}>Add to order</div>
                </div>

                <div className="pizza-profile">
                    <h4>{this.props.pizza.name}</h4> 
                    <img className="thumbnail" src={"images/" + this.props.pizza.thumbnail} alt="" />
                </div>

                <div className="price-tag">
                    <span>{numeral(this.props.pizza.price).format("$0,0.00")}</span>
                </div>
            </div>        
        );
    }
}

export default Pizza;

