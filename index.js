var express = require('express');
var app = express();
const PORT = 8080;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
  console.log((new Date()).toString()+' Message served to the client');
})

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!');;
});