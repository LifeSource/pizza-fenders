"use strict";

module.exports = function (config) {
    
var mongoose = require('mongoose'),
    seedData = require('./models/seedData');

var Pizza = require("./models/pizza/pizza.model");

var connectionString;

switch (config.env) {
    case "production":
        connectionString = "mongodb://pizza-fenders:fenders@ds039185.mongolab.com:39185/pizza-fenders";
        break;
    default:
        connectionString = "mongodb://localhost/pizza-fenders";
        break;
}

var db = mongoose.connect(connectionString);

db.connection.on('connected', function() {
    console.log('Mongoose connected to ' + connectionString);
    seedDatabase(seedData);
});

db.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

db.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

var database = mongoose.connection;

function seedDatabase(seedData) {

    Pizza.find()
        .exec(function (err, pizzas) {
            if (pizzas.length === 0) {
                database.collection("Pizzas").insert(seedData.pizzas);
            } else {
                console.log("Database already seeded!");
            }
        });
    
    console.log("Seeding database ...");
}

function gracefulShutdown (msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
}

// For nodemon restarts
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function() {
        process.exit(0);
    });
});

};
