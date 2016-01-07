"use strict";

var express = require("express"),
    bodyParser = require("body-parser");

var config = {
    env: process.env.NODE_ENV || "dev",
    port: process.env.PORT || 3000,
    dist: "./dist/",
    index: "index.html"
};

var app = express();

require("./database.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(config.dist));
app.use("/*", express.static(config.dist + config.index));

if (config.env === "dev") {
    var browserSync = require("browser-sync");
    browserSync.init({ server: config.dist });
    browserSync.watch(config.dist + "**/*.*").on("change", browserSync.reload);
}

app.listen(config.port,function() {
    console.log("Express server started, listening on port: ", config.port);
});
