var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.json({'\nmsg': 'myservice is up and running correctly!\n'});
});

var port = process.env.port || 3000;

app.listen(port, function () {
    console.log('Server Started at ' + port);
});
