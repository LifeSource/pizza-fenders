var mongoose = require("mongoose");

var pizzaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, min: 0 },
    category: { type: String },
    content: [String],
    isVeg: { type: Boolean }

});

module.exports = mongoose.model("Pizza", pizzaSchema, "Pizzas");
