const express = require('express')
const app = express()
const http = require('http');

app.get('/Home', function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
})

app.listen(3000)