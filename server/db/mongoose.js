/**
 * Created by Xavok on 5/2/2017.
 */
"use strict";
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};