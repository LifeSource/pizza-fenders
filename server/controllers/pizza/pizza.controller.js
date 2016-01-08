module.exports = function () {

    var Pizza = require("../../models/pizza/pizza.model");

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
        Pizza.find(req.params.id, function (err, pizza) {
            if (err) {
                req.status(500).send(err);
            } else if (pizza) {
                req.pizza = pizza;
                next();
            } else {
                res.status(404).send("Pizza not found!");
            }
        });
    }

    function get(req, res) {
        res.json(req.pizza); 
    }

    function post(req, res) {
        var pizza = new Pizza(req.body);

        pizza.save(function (err, pizza) {
            (err) ? res.status(500).send(err) : res.status(201).send(pizza);
        });
    }

    function patch(req, res) {

        if (req.params.id) {
            delete req.params.id;
        }

        for (var prop in req.pizza) {
            req.pizza[prop] = req.body[prop];
        }

        req.pizza.save(function (err, pizza) {
            (err) ? res.status(500).send(err) : res.status(201).send(pizza);
        });
    }

    function remove(req, res) {
        req.pizza.delete(function (err, pizza) {
            (err) ? res.status(500).send(err) : res.status(204).send("Pizza deleted successfully.");
        });
    }

    function query(req, res) {
        Pizza.find().exec(function (err, pizzas) {
            (err) ? res.status(500).send(err) : res.json(pizzas);
        });
    }

};
