var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 1234;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port);
console.log('Server on port ' + port);

require('./server/routes.js')(app, express);