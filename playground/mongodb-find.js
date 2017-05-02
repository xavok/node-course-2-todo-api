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

    // var _id = new ObjectID('59082826654b639eb60edb6f');
    // db.collection('Todos').find(_id).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs,undefined,2));
    //
    // },(err) => {
    //     console.log('Unable to fetch to dos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log("Todos count: ", count);
    // },(err) => {
    //     console.log('Unable to fetch to dos', err);
    // });
    db.collection('Users').find({name: 'Max'}).toArray().then((docs) => {
        console.log("Users");
        console.log(JSON.stringify(docs,undefined,2));

    },(err) => {
        console.log('Unable to fetch to dos', err);
    });
    //db.close
});