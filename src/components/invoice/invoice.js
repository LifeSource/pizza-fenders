import React from "react";

class Invoice extends React.Component {

    constructor(props) {
        super(props);
        this.state = { total: 0, gst: 0.1 };
    }

    calculateTotal() {
        return this.state.total * this.state.gst;
    }

    render() {

        return (
            <div className="invoice">
                <div className="invoice-number">
                    
                </div>
                <h3>GST {this.state.gst * 100}%</h3>
                <hr/>
                <h2>Total</h2>
                <hr/>
                <div className="invoice-total"> ${this.state.total} </div>
            </div>
        );
    }
}



export default Invoice;

