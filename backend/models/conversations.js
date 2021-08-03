let mongoose = require('mongoose');

let conversationSchema = mongoose.Schema({
	senderId : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	receiverId : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	messagesList : [{ type: mongoose.Schema.Types.ObjectId, ref: 'messages' }]
});

let conversationModel = mongoose.model('conversations', conversationSchema);

module.exports = conversationModel;