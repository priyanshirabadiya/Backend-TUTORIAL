// let mongoose = require('mongoose');

// const userSchema = mongoose.Schema({
//     firstName : String, // Shorthand property
//     lastName : {        // Try to use long property more
//         type : String ,
//     },
//     email : {
//         type : String,
//         unique : true,
//         required: true
//     },
//     age:{
//         type : Number
//     },
//     hobbies : [{type:String}],
//     address : {
//         line1 : String,
//         line2 : String,
//         pincode : Number
//     }
// });

// module.exports = mongoose.model('users', userSchema);

// ---------------------------- new practice ---------------------------------------------


const mongoose = require('mongoose');

const sschema = mongoose.Schema({
    firstName : String,
    lastName : {
        type : String
    },
    id : {
        type : Number,
        // unique : true
    }
}) 

module.exports = mongoose.model("sschemaUser" , sschema);




















