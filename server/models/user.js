/**
 * Created by Xavok on 5/2/2017.
 */
const mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User};