const express = require('express')
const app = express()
const http = require('http');
const jquery = require('jquery')

app.get('/Home', function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');

    set.forEach(value => {
        console.log(`Value: ${value}`);
      });
})

app.listen(3000)