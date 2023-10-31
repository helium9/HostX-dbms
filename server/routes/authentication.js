const jwt = require('jsonwebtoken');
const express = require('express');
// const router = express.Router();
require('../controllers/controller.auth');
require('dotenv/config');
const passport = require('passport');

const router = express.Router();
let sharedToken; // Declare a shared variable

const oAuth2Client = process.env.GOOGLE_CLIENT_ID;


router.get("/google", passport.authenticate('google', {scope: ['email', 'profile']}));
const baseFrontendUrl = process.env.FRONTEND_URL;

router.get('/google/callback',
  passport.authenticate("google", {
    failureRedirect: "/failedLogin",
    session:false
  }),
  function (req, res) {
    const payload = {
    userId: 123,
    username: 'exampleUser',
  };

  const expirationTime = 3600;
  

    // const token = jwt.sign(payload, expiresIn: expirationTime {user:{"email":req.user.email,name: req.user.displayName,avatar: req.user.picture}, id:req.user._id}, process.env.jwt_secret_key);
    // res.redirect(`${baseFrontendUrl}/OAuthRedirecting?token=${token}`);
    const token = jwt.sign(
      {
        user: {
          email: req.user.email,
          name: req.user.displayName,
          avatar: req.user.picture,
          id: req.user._id,
        },
        ...payload, // Include additional payload data
      },
      process.env.jwt_secret_key,
      {
        expiresIn: expirationTime,
      }
    );
    res.redirect(`${baseFrontendUrl}/form`);
    console.log('Email:', req.user.email);
    console.log('ID:', req.user._id);
    console.log('Name:', req.user.displayName);
    console.log('Avatar:', req.user.picture);
    console.log('token: ',token);
    sharedToken = token;
  }
);


// Define a route for logging out
router.get('/logout', (req, res) => {
  // Get the user's access token from the session or wherever it's stored
  const token = jwt.sign({user:{"email":req.user.email,name: req.user.displayName,avatar: req.user.picture}, id:req.user._id}, process.env.jwt_secret_key);
  const accessToken = token; // Replace with your session data access method
  console.log('token: ',token);console.log('token: ',token);console.log('token: ',token);

  if (!accessToken) {
    return res.status(400).json({ message: 'User is not authenticated.' });
  }

  // Revoke the access token
  async function revokeToken() {
    try {
      await oAuth2Client.revokeToken(accessToken);
      req.session.destroy(); 
      res.status(200).json({ message: 'User is logged out.' });
    } catch (error) {
      console.error('Error revoking access token:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  revokeToken();
});

module.exports = router;
// module.exports = { router, sharedToken };