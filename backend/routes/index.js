let express = require('express');
let router = express.Router();

let messageModel = require('../models/messages');
let userModel	= require('../models/users');
/**
* * POST USER
*/
router.post('/user', async function(req, res, next) {

  let result = false;
  let userSaved = null;

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

  userSaved = await newUser.save()

  if(userSaved.name) {
    result = true
  }
  res.json({result, userSaved});
});

/**
* * POST NEW MESSAGE
*/
router.post('/messages', async function(req, res, next) {

  let result = false;
  let messageSaved = null;

  let newMessage = new messageModel({
		type: req.body.type,
		content: req.body.content,
		senderId: req.body.senderId,
		receiverId: req.body.receiverId,
		sendingDate: req.body.date,
		read: req.body.read
  });

  messageSaved = await newMessage.save()

  if(messageSaved.content) {
    result = true
  }
	console.log('new message saved to DB :', messageSaved);
  res.json({result});
});

/**
* * GET SAVED MESSAGES FROM DB
*/
router.get('/messages', async function(req,res,next){

  let messages = await messageModel.find();

	console.log('Messages from DB :', messages);
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