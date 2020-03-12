var mongoose = require('mongoose');

var myModel = mongoose.model('myModel',{
    text : {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    },
    completed : {
        type :Boolean
    },
    completedAt : {
        type : Number
    }
});

module.exports = {myModel};
