import React from "react";
import OrderItem from "../order/orderItem";
let numeral = require("numeral");

class Invoice extends React.Component {

    constructor(props) {
        super(props);
        this.state = { total: 0, gst: 0.1 };
    }

    render() {

        var total = numeral(this.props.orders.total).format("$0,0.00");
        return (
            <div className="invoice">
                <div>
                    {this.props.orders.items.map((order, index) => {
                        return (
                            <OrderItem order={order} key={index} />
                        );
                    })}
                </div>

                <h3>GST +{this.state.gst * 100}%</h3>
                <hr/>
                <div className="total">
                    <h2>Total:</h2>
                    <div className="invoice-total"> {total} </div>
                </div>
                <hr/>
            </div>
        );
    }
}



export default Invoice;

