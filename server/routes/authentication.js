const jwt = require('jsonwebtoken');
const express = require('express');
const mysql = require("mysql2");
const { v4: uuidv4 } = require("uuid");
// const router = express.Router();
require('../controllers/controller.auth');
require('dotenv/config');
const passport = require('passport');
const { authPlugins } = require('mysql2');
require("dotenv").config({ path: ".db_env" });

// const router = express.Router();
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

    sharedToken = token;
    console.log('Email:', req.user.email);
    console.log('ID:', req.user._id);
    console.log('Name:', req.user.displayName);
    console.log('Avatar:', req.user.picture);
    console.log('token: ',token);
    // auth_email=req.user.email;
    // res.send(auth_email);
    // f(auth_email);  

    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });


    b = [req.user.email];
    let y;
    const li = connection.query(
      `select * from admin where Email=(?)`,
      b,
      (err, results) => {
        if (err) {
          throw err;
        }
        // console.log('Results:', results);
        if (results.length == 0) {
          const adminid = uuidv4();
          connection.query(
            // `insert into admin value (?,?,?,?,?,?)`,
            `insert into admin value (?,?,?,NULL,NULL,NULL)`,
            [
              adminid,
              req.user.displayName,
              req.user.email,
              
              // req.body.contact,
              // req.body.isti,
              // req.body.password,
            ],
            (err, results) => {
              if (err) {
                throw err;
              }
              console.log("registered");
              // res.send("Succesfully registered");
              res.redirect(`${baseFrontendUrl}`);
            }
          );
        } else {
          res.send("username already exist");
        }
      }
    );

    // res.redirect(`${baseFrontendUrl}/form`);
  }
  );
// router.get("/google", passport.authenticate('google', {scope: ['email', 'profile']}));
// const baseFrontendUrl = process.env.FRONTEND_URL;

// router.get('/google/callback',
//   passport.authenticate("google", {
//     failureRedirect: "/failedLogin",
//     session:false
//   }),
//   function (req, res) {
//     const payload = {
//     userId: 123,
//     username: 'exampleUser',
//   };

//   const expirationTime = 3600;
  

//     // const token = jwt.sign(payload, expiresIn: expirationTime {user:{"email":req.user.email,name: req.user.displayName,avatar: req.user.picture}, id:req.user._id}, process.env.jwt_secret_key);
//     // res.redirect(`${baseFrontendUrl}/OAuthRedirecting?token=${token}`);
//     const token = jwt.sign(
//       {
//         user: {
//           email: req.user.email,
//           name: req.user.displayName,
//           avatar: req.user.picture,
//           id: req.user._id,
//         },
//         ...payload, // Include additional payload data
//       },
//       process.env.jwt_secret_key,
//       {
//         expiresIn: expirationTime,
//       }
//     );

//     sharedToken = token;
//     console.log('Email:', req.user.email);
//     console.log('ID:', req.user._id);
//     console.log('Name:', req.user.displayName);
//     console.log('Avatar:', req.user.picture);
//     console.log('token: ',token);
//     // auth_email=req.user.email;
//     // res.send(auth_email);
//     // f(auth_email);  

//     const connection = mysql.createConnection({
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//     });


//     b = [req.body.email];
//     let y;
//     const li = connection.query(
//       `select * from admin where Email=(?)`,
//       b,
//       (err, results) => {
//         if (err) {
//           throw err;
//         }
  
//         if (results.length == 0) {
//           const adminid = uuidv4();
//           connection.query(
//             // `insert into admin value (?,?,?,?,?,?)`,
//             `insert into admin value (?,?,?,NULL,NULL,NULL)`,
//             [
//               adminid,
//               req.user.displayName,
//               req.user.email,
              
//               // req.body.contact,
//               // req.body.isti,
//               // req.body.password,
//             ],
//             (err, results) => {
//               if (err) {
//                 throw err;
//               }
//               console.log("registered");
//               // res.send("Succesfully registered");
//               res.redirect(`${baseFrontendUrl}`);
//             }
//           );
//         } else {
//           res.send("username already exist");
//         }
//       }
//     );

//     // res.redirect(`${baseFrontendUrl}/form`);
//   }
//   );
 










// // Define a route for logging out
// router.get('/logout', (req, res) => {
//   // Get the user's access token from the session or wherever it's stored
//   const token = jwt.sign({user:{"email":req.user.email,name: req.user.displayName,avatar: req.user.picture}, id:req.user._id}, process.env.jwt_secret_key);
//   const accessToken = token; // Replace with your session data access method
//   console.log('token: ',token);console.log('token: ',token);console.log('token: ',token);

//   if (!accessToken) {
//     return res.status(400).json({ message: 'User is not authenticated.' });
//   }

//   // Revoke the access token
//   async function revokeToken() {
//     try {
//       await oAuth2Client.revokeToken(accessToken);
//       req.session.destroy(); 
//       res.status(200).json({ message: 'User is logged out.' });
//     } catch (error) {
//       console.error('Error revoking access token:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   }

//   revokeToken();
// });

// module.exports = { router, sharedToken };
// module.exports =sharedToken;
module.exports = router;
// module.exports.auth_email = auth_email;