import React from "react";

class Pizza extends React.Component {

    constructor(props) {
        super(props);
    }

    addToOrder() {

    }

    render() {

        return (
            <div className="pizza-item">
                <div className="pizza-info">
                    <strong>{this.props.pizza.category}</strong> 
                    <br/>
                    <span>{this.props.pizza.content}</span> 
                    <div className="add-order-button" onClick={this.addToOrder.bind(this)}>Add to order</div>
                </div>

                <div className="pizza-profile">
                    <h4>{this.props.pizza.name}</h4> 
                    <img className="thumbnail" src={"images/" + this.props.pizza.thumbnail} alt="" />
                </div>

                <div className="price-tag">
                    <span>${this.props.pizza.price}</span>
                </div>
            </div>        
        );
    }
}

export default Pizza;

