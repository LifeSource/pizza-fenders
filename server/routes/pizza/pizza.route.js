var express = require("express");

module.exports = function () {
    
    var pizzaRouter = express.Router();

    var pizzaController = require("../../controllers/pizza/pizza.controller")();

    pizzaRouter.route("/")
        .get(pizzaController.query)
        .post(pizzaController.post);

    pizzaRouter.use("/:id", pizzaController.use);

    pizzaRouter.route("/:id")
        .get(pizzaController.get)
        .patch(pizzaController.patch)
        .delete(pizzaController.delete);
    
    return pizzaRouter;
};
