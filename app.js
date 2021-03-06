var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("./socket")

var app = express();

app.use(logger('dev'));
app.use(express.json());

var indexRouter = require('./routes/index');

// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
