/**
 * Created by Xavok on 5/3/2017.
 */
"use strict";
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10,(err, salt)=> {
    bcrypt.hash(password, salt, (err,hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$HtDaliFLyWFeZOdxIx5HEO5DtfYKF6NgRx0iv96wdJu3Kbtj3p8i.';

bcrypt.compare(password, hashedPassword, (err,res) => {
   console.log(res);
});
// var data = {
//     id: 10
// };
// var token = jwt.sign(data, '123abc');
// console.log(token);
// // jwt.verify
// var decoded = jwt.verify(token, '12123abc');
// console.log('decoded',decoded);
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//     id: 4
// };
//
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
// var resultHash = SHA256(JSON.stringify(token.data) +"somesecret").toString();
//
// if(resultHash == token.hash) {
//     console.log("data was not changed");
// } else {
//     console.log('data was changed. do not trust!');
// }