var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = require('./app');






app.listen(process.env.PORT || 3000, function() {

	console.log('server is listening');
});