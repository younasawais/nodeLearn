var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');  
  res.end();
}).listen(3000);

// var http = require('http');
// var test  = require('./export').age;
// console.log(test);
// http.createServer((req, res)=>{
//     res.writeHead(200,{'Content-Type' : 'text/html'})
//     //res.write(test);
//     res.end();
// }).listen(3000);

