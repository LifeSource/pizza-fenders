var path = require("path");

module.exports = function() {

        "use strict";

        var port = process.env.PORT || 3000,
            env = process.env.NODE_ENV || "dev";

        var root = path.resolve(__dirname, "./"),
            src = path.resolve(__dirname, "src"),
            dist = path.resolve(__dirname, "dist"),
            tests = path.resolve(__dirname, "tests"),
            nodeModules = path.resolve(__dirname, "node_modules");

        var config = {
            env: env,
            port: port,
            // Paths
            root: root,
            src: src,
            dist: dist,
            fonts: [],
            tests: tests,
            // Files
            index: root + "index.html",
            nodeModules: nodeModules,
            packages: ["./package.json"],
            // Karma
            karma: {
                files: tests + "/index.js",
                exclude: [ nodeModules ],
                preprocessors: {
                    "tests/index.js": ["webpack", "sourcemap"]
                }
            }

        };

        return config;
};
