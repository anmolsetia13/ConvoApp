var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email : {
        type : String,
        required : true,
        trim : 1,
        minlength : 1
    }
});

module.exports = {User};