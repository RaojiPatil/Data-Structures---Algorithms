var express = require("express");
var app = express();

app.get("/", log, hello);

function log(req, res, next) {
    console.log("log");
    next();
}
function hello (req, res, next) {
    console.log("hello user");
    next();
}

app.listen(1234, function(){
 console.log("server started in port 1234");
})

