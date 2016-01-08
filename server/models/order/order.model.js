var mongoose = require("mongoose"),
    Invoice = require("../invoice").Schema,
    Pizza = require("../pizza").Schema;

var orderSchema = new mongoose.Schema({

    orderId: { type: String },
    customer: {
        name: { type: String, rquire: true },
        phone: { type: Number },
        email: { type: String },
        deliveryAddress: {
            streetNo: { type: Number, min: 0 },
            streetName: { type: String },
            suburb: { type: String },
            postcode: { type: Number, min: 0 }
        }
    },
    pizzas: [Pizza],
    invoice: Invoice,
    orderDate: { type: Date, default: new Date() },
    isReady: { type: Boolean }

});

module.exports = mongoose.model("Order", orderSchema);
