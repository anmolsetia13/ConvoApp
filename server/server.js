var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {myModel} = require('./models/myModel');
var {User}  =  require('./models/User');

var app = express();

app.use(bodyParser.json());



app.post('/todos',(req,res) => {
    var todo = new myModel({
        text : req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
});
    //console.log(req.body);
});

app.listen(1500, () => {
    console.log('Started on port 1500');
});

//var mongoose = require('mongoose');

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/db1');

// model..


//var instanceOfmyModel = new myModel({
   // text : 'Cook Dinner'
//});

//instanceOfmyModel.save().then((doc) => {
//    console.log('saved in users',doc);
//}, (e) =>  {
  //  console.log('unabel to save..');
//});

//var secondInstance = new myModel({
  //  text : "  edit this line  ",
    //completed : true,
    //completedAt :1234
//}) ;

//secondInstance.save().then((doc) =>{
  //  console.log(JSON.stringify(doc,undefined,2));

//}, (e) => {
  //      console.log('unable to save',e);
//});



//var user = new User({
  //  email : 'myemail'

//});

//user.save().then((doc) =>{
  //  console.log('user saved',doc);
//},(e) => {
  //  console.log('unable to save user',e);
//});