/**
 * Created by Xavok on 5/2/2017.
 */
"use strict";

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID}= require('mongodb');

// var _id = '5908a5c3955ff2f03368311e';
//
// if(!ObjectID.isValid(_id)) {
//     console.log('ID not valid');
// }

// Todo.find({_id}).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({_id}).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(_id).then((todo) => {
//     if(!todo) {
//         return console.log("Id not found");
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var _id = '5908334ed00712103b156e5c';
User.findById(_id).then((user) => {
    if(!user) {
        return console.log("Unable to found user");
    }
    console.log(JSON.stringify(user, undefined,2));
}).catch((e) => console.log(e));