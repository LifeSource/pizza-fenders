import React from "react";

class Invoice extends React.Component {

    constructor(props) {
        super(props);
        this.state = { total: 0, gst: 0.1 };
    }

    render() {

        return (
            <div className="receipt">
                <h3>GST {this.state.gst * 100}%</h3>
                <h2>Total</h2>
                $ {this.state.total}
            </div>
        );
    }
}



export default Invoice;

