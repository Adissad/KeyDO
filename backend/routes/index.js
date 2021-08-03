let express = require('express');
let router = express.Router();

let userModel	= require('../models/users');
let conversationModel = require('../models/conversations');
let messageModel = require('../models/messages');

/**
* * POST NEW USER
*/
router.post('/user', async function(req, res, next) {

  let newUser = new userModel({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		birthdayDate: req.body.birthdayDate,
		gender: req.body.gender,
		city: req.body.city,
		avatar: req.body.avatar,
		picture: req.body.picture,
		token: req.body.token,
		inscriptionDate: req.body.inscriptionDate
  });

  let userSaved = await newUser.save()
  let result = false;

  if(userSaved.name) {
    result = true
  }
  res.json({result, userSaved});
});

/**
* * POST NEW CONVERSATION
*/
router.post('/conversation', async function(req, res, next) {

  let newConversation = new conversationModel({
		senderId : userSaved.id,
		receiverId : userSaved.id,
		messagesList : messageSaved.id
  });

  let conversationSaved = await newConversation.save()
  let result = false;

  if(conversationSaved.name) {
    result = true
  }
  res.json({result, conversationSaved});
});

/**
* * POST NEW MESSAGE
*/
router.post('/message', async function(req, res, next) {

  let newMessage = new messageModel({
		type: req.body.type,
		content: req.body.content,
		senderId: userSaved.id,
		receiverId: userSaved.id,
		sendingDate: req.body.date,
		read: req.body.read
  });

  let messageSaved = await newMessage.save()
  let result = false;

  if(messageSaved.content) {
    result = true
  }
	console.log('[BACKEND] NEW CONVERSATION SAVED IN DB :', messageSaved);
  res.json({result});
});

/**
* * GET SAVED MESSAGES FROM DB
*/
router.get('/message', async function(req,res,next){

  let messages = await messageModel.find();

	console.log('[BACKEND] MESSAGES FROM DB :', messages);
  res.json(messages);
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