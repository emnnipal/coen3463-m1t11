// var express = require('express')
// var app = express()
// var path = require('path')

// //set static path middleware
// //app.use(express.static(path.join(__dirname,'public')))

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// })

// // app.get('/home', function (req, res) {
// //   res.send('Home page');
// // })

// // app.get('/about', function (req, res) {
// // 	//read -- search -- ask
// //   res.sendFile('about.html',{"root":__dirname});
// // })

// // app.get('/rude', function (req, res) {
// //   res.send('<h1>pogi</h1><p>this is a fal se statement</p>');
// // })

// // app.listen(3000, function () {
// //   console.log('Example app listening on port 3000!')
// // })	
var express = require("express");
var app = express();

app.get('/', function(req, res) {
  res.sendFile('index.html',{"root":__dirname});
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});