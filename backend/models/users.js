var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    birthdayDate : Date,
    gender : String,
    city : String,
    avatar : String,
    picture : String,
    token : String,
    inscriptionDate : Date
})

var userModel = mongoose.model('users', userSchema)

module.exports = userModel;
