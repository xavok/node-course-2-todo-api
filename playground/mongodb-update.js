/**
 * Created by Xavok on 5/1/2017.
 */
"use strict";
// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    } else {
        console.log('Connected to MongoDB server');
    }

    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('59082bc4654b639eb60edd06')}, {$set: {completed: true}}, {returnOriginal: false}).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('590826fbe604c434389c2440')},
        {
            $set: {name: 'Max'},
            $inc: {age: 1}
        },
        {returnOriginal: false})
        .then((result) => {
            console.log(result);
        });

    //db.close

});