// var express = require('express');
// var app = express();

// app.get('/', (req, res) => {
//     res.json({'msg': 'Hello World'});
// });

// var port = process.env.port || 3000;

// app.listen(port, () => {
//     console.log('Server Started at ' + port);
// });

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.json({'msg': 'Hello World'});
});

var port = process.env.port || 3000;

app.listen(port, function () {
    console.log('Server Started at ' + port);
});
