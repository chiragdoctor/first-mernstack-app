var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
const connectDB = require('./db');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
connectDB();

app.use('/', indexRouter);

module.exports = app;
