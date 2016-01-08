module.exports = function () {

    var Order = require("../../models/order/order.model");

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
        Order.find(req.params.id, function (err, order) {
            if (err) {
                req.status(500).send(err);
            } else if (order) {
                req.order = order;
                next();
            } else {
                res.status(404).send("Order not found!");
            }
        });
    }

    function get(req, res) {
        res.json(req.order); 
    }

    function post(req, res) {
        var order = new Order(req.body);

        order.save(function (err, order) {
            (err) ? res.status(500).send(err) : res.status(201).send(order);
        });
    }

    function patch(req, res) {

        if (req.params.id) {
            delete req.params.id;
        }

        for (var prop in req.order) {
            req.order[prop] = req.body[prop];
        }

        req.order.save(function (err, order) {
            (err) ? res.status(500).send(err) : res.status(201).send(order);
        });
    }

    function remove(req, res) {
        req.order.delete(function (err, order) {
            (err) ? res.status(500).send(err) : res.status(204).send("Order deleted successfully.");
        });
    }

    function query(req, res) {
        Order.find().exec(function (err, orders) {
            (err) ? res.status(500).send(err) : res.json(orders);
        });
    }

};
