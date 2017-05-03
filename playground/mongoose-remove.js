/**
 * Created by Xavok on 5/2/2017.
 */
"use strict";

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID}= require('mongodb');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '59097bbf120fe0d8128d1804'}).then((result) => {
//     console.log(result);
// });
//
// Todo.findByIdAndRemove('59097bbf120fe0d8128d1804').then((todo) => {
//     console.log(todo);
// });