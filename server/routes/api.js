const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://10.60.163.75:27017/logOfResults', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
  _id:{
  type:Object},
 RunId:{
type:String},
StartTime
:{
type:int64},
TestScript
:{
type:String},
TestCaseID
:
{type:String},
Status
:{type :int64}
,
TimeElapsed
:{
tyoe:int64},
hostname
:{type:
String}
    
};

// Get users
router.get('/data', (req, res) => {
    connection((db) => {
        db.collection('tez')
            .find()
            .toArray()
            .then((data) => {
                
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;