let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
	name: String,
	email: String,
	picture: String
});

let userModel = mongoose.model('users', userSchema);

module.exports = userModel;