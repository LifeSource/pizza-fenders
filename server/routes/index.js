"use strict";

module.exports = function (app) {
    var pizzaRouter = require("./pizza/pizza.route")();
    app.use("/api/pizzas", pizzaRouter); 
};

