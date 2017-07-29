const express = require('express');
const router = express.Router();
const config = require('../config/database');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/register',(req,res,next)=>{

let newUser = User({
  first_name: req.body.first_name,
  last_name: req.body.last_name,
  email: req.body.email,
  username: req.body.username,
  avatar:req.body.avatar,
  description:req.body.description,
  password: req.body.password,
  access: req.body.access

});

  User.addUser(newUser,(err,user)=>{
    if(err){
      res.json({success:false,message:'Error while Registering User'});
    }else{
      res.json({success:true,message:'New User Added Successifully!'});
    }
  });
});

router.post('/auth',(req,res,next)=>{
  //res.send('Authentication route');
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username,(err,user)=>{
    //if(err) throw err;
    if(!user){
      res.json({success:false,message:'User Not Found'});

      
    }
    else{
      User.comparePassword(password,user.password,(err,isMatch)=>{
      //if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user,config.secret,{
           expiresIn:6004800
        });
        res.json({success:true,
          token:token,
          user:{
            id:user._id,
            firstname:user.first_name,
            lastname:user.last_name,
            email:user.email,
            user:user.username
          }

        });
      }else{
        res.json({success:false,message:'Wrong password!'});
      }

    });
    }
    
  });
});

router.get('/user/:username',(req,res,next)=>{
   User.findOne({username:req.params.username},function(err,user){
      if(err)
        res.send(err);
      res.json(user);
  });
})

router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
  res.send('Profile route');
});


module.exports = router;
