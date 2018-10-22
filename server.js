//Install express server
var express = require('express');
var path = require('path');

var app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/game-social-network'));

app.get('/*', function (req, res) {
  console.log('getting app');
  res.sendFile(path.join(__dirname + '/dist/game-social-network/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(4200);
console.log('listening on port');

