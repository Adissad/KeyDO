let express = require('express');
let request = require('sync-request');
let router = express.Router();

// let userModel = require('../models/user');
let messageModel = require('../models/messages');

/**
* * POST NEW MESSAGE
*/
router.post('/add-message', async function(req, res, next) {

  let newMessage = new messageModel({
		type: req.body.type,
		content: req.body.content,
		senderId : req.body.senderId,
		receiverId : req.body.receiverId,
		sendingDate : req.body.date,
		read : req.body.read
  })

  let messageSave = await newMessage.save()

  let result = false
  if(messageSave.content){
    result = true
  }

  res.json({result})
});



module.exports = router;
