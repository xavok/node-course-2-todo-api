/**
 * Created by Xavok on 5/1/2017.
 */
"use strict";
// const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    } else {
        console.log('Connected to MongoDB server');
    }



    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false,
    // },(err,result) => {
    //     if(err) {
    //         console.log('Unable to insert Todo',err);
    //     } else {
    //         console.log(JSON.stringify(result.ops,undefined,2));
    //     }
    // });
    // db.collection('Users').insertOne({
    //     name: 'Max',
    //     age: 21,
    //     location: 'Sacramento'
    // },(err,result) => {
    //     if(err) {
    //         console.log('Unable to insert User',err);
    //     } else {
    //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    //     }
    // });
    db.close();
});