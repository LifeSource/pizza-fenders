import React from "react";
let numeral = require("numeral");

export default class OrderItem extends React.Component {

    constructor(pros) {
        super(pros);
    }

    render() {

        let price = numeral(this.props.order.price).format("$0,0.00");
        return (
            <div className="orderItem">
                {this.props.order.name} - {price} 
                <hr />
            </div>
        );
    }
}
