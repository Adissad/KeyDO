let express = require('express');
let router = express.Router();

let messageModel = require('../models/messages');

/**
* * POST NEW MESSAGE
*/
router.post('/messages', async function(req, res, next) {

  let result = false;
  let message = null;

  let newMessage = new messageModel({
		type: req.body.type,
		content: req.body.content,
		senderId: req.body.senderId,
		receiverId: req.body.receiverId,
		sendingDate: req.body.date,
		read: req.body.read
  })

  message = await newMessage.save()

  if(message.content) {
    result = true
  }
	console.log('new message saved to DB :', message);
  res.json({result, message})
});

/**
* * GET SAVED MESSAGES FROM DB
*/
router.get('/messages', async function(req,res,next){

  let messagesDB = await messageModel.find();

	console.log('saved messages received from DB :', messagesDB);
  res.json(messagesDB);
});

/**
* TODO
UPDATE MESSAGE
*/

/**
* TODO
DELETE MESSAGE
*/

module.exports = router;