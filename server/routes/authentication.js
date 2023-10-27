const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
require('../controllers/controller.auth');
require('dotenv/config');
const passport = require('passport');

router.get("/google", passport.authenticate('google', {scope: ['email', 'profile']}));
const baseFrontendUrl = process.env.FRONTEND_URL;

router.get('/google/callback',
  passport.authenticate("google", {
    failureRedirect: "/failedLogin",
    session:false
  }),
  function (req, res) {
    const token = jwt.sign({user:{"email":req.user.email,name: req.user.displayName,avatar: req.user.picture}, id:req.user._id}, process.env.jwt_secret_key);
    // res.redirect(`${baseFrontendUrl}/OAuthRedirecting?token=${token}`);
    res.redirect(`${baseFrontendUrl}`);
    console.log('Email:', req.user.email);
    console.log('ID:', req.user._id);
    console.log('Name:', req.user.displayName);
    console.log('Avatar:', req.user.picture);
    console.log('token: ',token);
  }
);


module.exports = router;