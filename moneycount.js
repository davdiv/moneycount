var express = require("express");
var path = require("path");

var startServer = function () {
    var app = express();
    app.use(express.static(path.join(__dirname, "build", "client")));

    var server = app.listen(8000);
    server.on("listening", function () {
        console.log("Web server started on http://localhost:%d", server.address().port);
    });

};

startServer();