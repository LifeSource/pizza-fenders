var express = require("express");

module.exports = function () {
    
    var orderRouter = express.Router();

    var orderController = require("../../controllers/order/order.controller")();


    orderRouter.route("/")
        .get(orderController.query)
        .post(orderController.post);

    orderRouter.use("/:id", orderController.use);

    orderRouter.route("/:id")
        .get(orderController.get)
        .patch(orderController.update)
        .delete(orderController.delete);
    
    return orderRouter;
};
