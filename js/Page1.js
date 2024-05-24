const express = require('express')
const app = express()
const http = require('http');
const jquery = require('jquery')
const cheerio = require('cheerio');

app.get('/Home', function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');

    set.forEach(value => {
        console.log(`Value: ${value}`);
      });
})


// ตัวอย่าง HTML
const html = `
  <ul id="fruits">
    <li class="apple">Apple</li>
    <li class="orange">Orange</li>
    <li class="pear">Pear</li>
  </ul>
`;

// โหลด HTML ด้วย Cheerio
const $ = cheerio.load(html);

// ใช้ API คล้ายกับ jQuery
const fruits = [];
$('#fruits').find('li').each((index, element) => {
  fruits.push($(element).text());
});

console.log(fruits); // ['Apple', 'Orange', 'Pear']

app.listen(3000)