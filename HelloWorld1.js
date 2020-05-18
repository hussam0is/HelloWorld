/*
exports.print_helloWorld = function(){
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World1!');
}).listen(8080);
};*/
function fun() {

    setTimeout(function () {
        console.log("1: hello world!");
        console.log("2: hello world!");
        console.log("3: hello world!");

    }, 3000);

}

fun();
