import React from "react";
let numeral = require("numeral");

export default class OrderItem extends React.Component {

    constructor(pros) {
        super(pros);
    }

    render() {

        let item = this.props.order;
        let totalPizzaPrice= numeral(item.price * item.qty).format("$0,0.00");
        return (
            <div className="orderItem">
                {item.qty} x {item.name} - {totalPizzaPrice}
                <hr/>
            </div>
        );
    }
}
