var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var uid2 = require ("uid2");
var mongoose = require ("mongoose");

var userModel = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', async function(req, res, next) {
  const cost = 10;
  const hash = bcrypt.hashSync(req.body.password, cost);

  var alreadyExist = await userModel.findOne(
    { email: req.body.email })
    if(alreadyExist != null){
      res.json({result:false, Message: "Email déjà existant"})
    } else {

  var newUser = new userModel({   
    name: req.body.name,
    email: req.body.email,
    password: hash,
    token: uid2(32)
  }) 

  var userSave = await newUser.save()

  // if(userSave) {
  //   token = userSave.token
  // }

  res.json({result:true, token:userSave.token});
}});

// router.post('/signin', async function(req, res, next) {

//   var searchUser = await userModel.findOne({
//     email: req.body.email
//   }) 
//   console.log("hi", searchUser);
//   if(bcrypt.compareSync(req.body.password, searchUser.password)){
//     res.json({result:true, token:searchUser.token})
//   } else{
//     res.json({result:false, Message: "Utilisateur non trouvé" })

//   }

// });

module.exports = router;

