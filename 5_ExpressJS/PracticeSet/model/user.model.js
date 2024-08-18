let mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName : String,
    lastName : {
        type : String
    },
    email : {
        type : String,
        unique : true,
    },
    hobbies : [{type : String}],
    age : {
        type : String
    }
})

module.exports = mongoose.model('user' , userSchema);
