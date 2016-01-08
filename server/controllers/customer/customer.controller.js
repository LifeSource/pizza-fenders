module.exports = function () {

    var Customer = require("../../models/customer/customer.model");

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
        Customer.find(req.params.id, function (err, customer) {
            if (err) {
                req.status(500).send(err);
            } else if (customer) {
                req.customer = customer;
                next();
            } else {
                res.status(404).send("Customer not found!");
            }
        });
    }

    function get(req, res) {
        res.json(req.customer); 
    }

    function post(req, res) {
        var customer = new Customer(req.body);

        customer.save(function (err, customer) {
            (err) ? res.status(500).send(err) : res.status(201).send(customer);
        });
    }

    function patch(req, res) {

        if (req.params.id) {
            delete req.params.id;
        }

        for (var prop in req.customer) {
            req.customer[prop] = req.body[prop];
        }

        req.customer.save(function (err, customer) {
            (err) ? res.status(500).send(err) : res.status(201).send(customer);
        });
    }

    function remove(req, res) {
        req.customer.delete(function (err, customer) {
            (err) ? res.status(500).send(err) : res.status(204).send("Customer deleted successfully.");
        });
    }

    function query(req, res) {
        Customer.find().exec(function (err, customers) {
            (err) ? res.status(500).send(err) : res.json(customers);
        });
    }

};
