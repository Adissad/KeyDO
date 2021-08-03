let mongoose = require('mongoose');

<<<<<<< HEAD
let userSchema = mongoose.Schema({
	// username: String,
	name: String,
	email: String,
	password: String,
	birthdayDate: Date,
	gender: String,
	city: String,
	avatar: String,
	picture: String,
	token: String,
	inscriptionDate: Date
});
=======
var userSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    age: String,
    gender : String,
    city : String,
    avatar : String,
    picture : String,
    token : String,
    inscriptionDate : Date
})
>>>>>>> ef09c9fe910b43963ccf0fb8857cf3a030e66fda

let userModel = mongoose.model('users', userSchema);

module.exports = userModel;