let mongoose = require('mongoose');

let messageSchema = mongoose.Schema({
	type: String,
	content: String,
	senderId : String,
	receiverId : String,
	sendingDate : Date,
	read : Boolean
});

let messageModel = mongoose.model('messages', messageSchema);

module.exports = messageModel;