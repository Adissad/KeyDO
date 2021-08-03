let mongoose = require('mongoose');

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

let userModel = mongoose.model('users', userSchema);

module.exports = userModel;