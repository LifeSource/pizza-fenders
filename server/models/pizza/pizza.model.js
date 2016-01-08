var mongoose = require("mongoose");

var pizzaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, min: 0 },
    category: { type: String },
    content: String,
    isVeg: { type: Boolean },
    thumbnail: { type: String }
});

module.exports = mongoose.model("Pizza", pizzaSchema, "Pizzas");
