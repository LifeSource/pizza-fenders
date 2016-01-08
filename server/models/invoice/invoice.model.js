var mongoose = require("mongoose");

var invoiceSchema = new mongoose.Schema({

    invoiceId: { type: String },
    customerName: { type: String },
    total: { type: Number, min: 0 },
    dateProcessed: { type: Date, default: new Date() }

});

module.exports = mongoose.model("Invoice", invoiceSchema);
