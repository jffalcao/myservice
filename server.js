var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.json({'msg': 'myservice is up and running correctly!'});
});

var port = process.env.port || 3000;

app.listen(port, function () {
    console.log('Server Started at ' + port);
});
