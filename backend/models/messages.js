let mongoose = require('mongoose');

let messageSchema = mongoose.Schema({
	// username: String,
	type: String,
	content: String,
	senderId : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	receiverId : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	sendingDate : Date,
	read : Boolean
});

let messageModel = mongoose.model('messages', messageSchema);

module.exports = messageModel;