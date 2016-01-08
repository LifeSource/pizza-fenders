var express = require("express");

module.exports = function () {
    
    var customerRouter = express.Router();

    var customerController = require("../../controllers/customer/customer.controller")();


    customerRouter.route("/")
        .get(customerController.query)
        .post(customerController.post);

    customerRouter.use("/:id", customerController.use);

    customerRouter.route("/:id")
        .get(customerController.get)
        .patch(customerController.update)
        .delete(customerController.delete);
    
    return customerRouter;
};
