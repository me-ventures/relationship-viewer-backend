var config = require('config');

var express = require('express');
var app = express();

app.listen(config.get('port'));
app.use('/', require('./src/routes'));
