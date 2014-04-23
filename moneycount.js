var express = require("express");
var path = require("path");

var startServer = function () {
    var app = express();
    app.use(express.static(path.join(__dirname, "build", "client")));

    var server = app.listen(parseInt(process.env.PORT, 10) || 8080);
    server.on("listening", function () {
        console.log("Web server started at http://localhost:%d", server.address().port);
    });

};

startServer();
