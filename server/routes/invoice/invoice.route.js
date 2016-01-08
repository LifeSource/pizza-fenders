var express = require("express");

module.exports = function () {
    
    var invoiceRouter = express.Router();

    var invoiceController = require("../../controllers/invoice/invoice.controller")();


    invoiceRouter.route("/")
        .get(invoiceController.query)
        .post(invoiceController.post);

    invoiceRouter.use("/:id", invoiceController.use);

    invoiceRouter.route("/:id")
        .get(invoiceController.get)
        .patch(invoiceController.update)
        .delete(invoiceController.delete);
    
    return invoiceRouter;
};
