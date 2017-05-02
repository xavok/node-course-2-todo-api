/**
 * Created by Xavok on 5/2/2017.
 */
"use strict";
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};