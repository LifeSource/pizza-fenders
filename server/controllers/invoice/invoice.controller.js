module.exports = function () {

    var Invoice = require("../../models/invoice/invoice.model");

    var controller = {
        use: use,
        get: get,
        post: post,
        patch: patch,
        delete: remove,
        query: query
    };

    return controller;

    function use(req, res, next) {
        Invoice.find(req.params.id, function (err, invoice) {
            if (err) {
                req.status(500).send(err);
            } else if (invoice) {
                req.invoice = invoice;
                next();
            } else {
                res.status(404).send("Invoice not found!");
            }
        });
    }

    function get(req, res) {
        res.json(req.invoice); 
    }

    function post(req, res) {
        var invoice = new Invoice(req.body);

        invoice.save(function (err, invoice) {
            (err) ? res.status(500).send(err) : res.status(201).send(invoice);
        });
    }

    function patch(req, res) {

        if (req.params.id) {
            delete req.params.id;
        }

        for (var prop in req.invoice) {
            req.invoice[prop] = req.body[prop];
        }

        req.invoice.save(function (err, invoice) {
            (err) ? res.status(500).send(err) : res.status(201).send(invoice);
        });
    }

    function remove(req, res) {
        req.invoice.delete(function (err, invoice) {
            (err) ? res.status(500).send(err) : res.status(204).send("Invoice deleted successfully.");
        });
    }

    function query(req, res) {
        Invoice.find().exec(function (err, invoices) {
            (err) ? res.status(500).send(err) : res.json(invoices);
        });
    }

};
