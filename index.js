var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.get('/api', function(req,res){
  res.json(require('./nams.json'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
