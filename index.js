var express = require('express')
var app = express()
var path = require('path')

var port = process.env.PORT || 8000

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port)