// const jwt = require('jsonwebtoken');
// const express = require('express');
// const mysql = require("mysql2");
// const { v4: uuidv4 } = require("uuid");
// // const router = express.Router();
// require('../controllers/controller.auth');
// require('dotenv/config');
// const passport = require('passport');
// const { authPlugins } = require('mysql2');
// require("dotenv").config({ path: ".db_env" });

// // const router = express.Router();
// const router = express.Router();
// let sharedToken; // Declare a shared variable

// const oAuth2Client = process.env.GOOGLE_CLIENT_ID;


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


//     b = [req.user.email];
//     let y;
//     const li = connection.query(
//       `select * from admin where Email=(?)`,
//       b,
//       (err, results) => {
//         if (err) {
//           throw err;
//         }
//         // console.log('Results:', results);
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
//           console.log("username already exist");
//           res.redirect(`${baseFrontendUrl}`);
//           // res.send("username already exist");
//         }
//       }
//     );

//     // res.redirect(`${baseFrontendUrl}/form`);
//   }
//   );
// // router.get("/google", passport.authenticate('google', {scope: ['email', 'profile']}));
// // const baseFrontendUrl = process.env.FRONTEND_URL;

// // router.get('/google/callback',
// //   passport.authenticate("google", {
// //     failureRedirect: "/failedLogin",
// //     session:false
// //   }),
// //   function (req, res) {
// //     const payload = {
// //     userId: 123,
// //     username: 'exampleUser',
// //   };

// //   const expirationTime = 3600;
  

// //     // const token = jwt.sign(payload, expiresIn: expirationTime {user:{"email":req.user.email,name: req.user.displayName,avatar: req.user.picture}, id:req.user._id}, process.env.jwt_secret_key);
// //     // res.redirect(`${baseFrontendUrl}/OAuthRedirecting?token=${token}`);
// //     const token = jwt.sign(
// //       {
// //         user: {
// //           email: req.user.email,
// //           name: req.user.displayName,
// //           avatar: req.user.picture,
// //           id: req.user._id,
// //         },
// //         ...payload, // Include additional payload data
// //       },
// //       process.env.jwt_secret_key,
// //       {
// //         expiresIn: expirationTime,
// //       }
// //     );

// //     sharedToken = token;
// //     console.log('Email:', req.user.email);
// //     console.log('ID:', req.user._id);
// //     console.log('Name:', req.user.displayName);
// //     console.log('Avatar:', req.user.picture);
// //     console.log('token: ',token);
// //     // auth_email=req.user.email;
// //     // res.send(auth_email);
// //     // f(auth_email);  

// //     const connection = mysql.createConnection({
// //       host: process.env.DB_HOST,
// //       user: process.env.DB_USER,
// //       password: process.env.DB_PASSWORD,
// //       database: process.env.DB_NAME,
// //     });


// //     b = [req.body.email];
// //     let y;
// //     const li = connection.query(
// //       `select * from admin where Email=(?)`,
// //       b,
// //       (err, results) => {
// //         if (err) {
// //           throw err;
// //         }
  
// //         if (results.length == 0) {
// //           const adminid = uuidv4();
// //           connection.query(
// //             // `insert into admin value (?,?,?,?,?,?)`,
// //             `insert into admin value (?,?,?,NULL,NULL,NULL)`,
// //             [
// //               adminid,
// //               req.user.displayName,
// //               req.user.email,
              
// //               // req.body.contact,
// //               // req.body.isti,
// //               // req.body.password,
// //             ],
// //             (err, results) => {
// //               if (err) {
// //                 throw err;
// //               }
// //               console.log("registered");
// //               // res.send("Succesfully registered");
// //               res.redirect(`${baseFrontendUrl}`);
// //             }
// //           );
// //         } else {
// //           res.send("username already exist");
// //         }
// //       }
// //     );

// //     // res.redirect(`${baseFrontendUrl}/form`);
// //   }
// //   );
 






// // Server-Side Route for Logging Out
// router.get('/logout', (req, res) => {
//   // Typically, you don't need to do much on the server-side for JWT logout
//   // You might clear the token from a blacklist (if you're implementing server-side token revocation)

//   // Send a response to the client
//   res.status(200).json({ message: 'Logged out successfully' });
// });

// // Client-Side Handling (e.g., in your React application)
// function handleLogout() {
//   // Clear the JWT token stored in client-side storage (e.g., local storage)
//   localStorage.removeItem('jwtToken');

//   // Redirect to the login or home page
//   window.location.href = '/'; // or any desired destination
// }


// // // Define a route for logging out
// // router.get('/logout', (req, res) => {
// //   // Get the user's access token from the session or wherever it's stored
// //   const token = jwt.sign({user:{"email":req.user.email,name: req.user.displayName,avatar: req.user.picture}, id:req.user._id}, process.env.jwt_secret_key);
// //   const accessToken = token; // Replace with your session data access method
// //   console.log('token: ',token);console.log('token: ',token);console.log('token: ',token);

// //   if (!accessToken) {
// //     return res.status(400).json({ message: 'User is not authenticated.' });
// //   }

// //   // Revoke the access token
// //   async function revokeToken() {
// //     try {
// //       await oAuth2Client.revokeToken(accessToken);
// //       req.session.destroy(); 
// //       res.status(200).json({ message: 'User is logged out.' });
// //     } catch (error) {
// //       console.error('Error revoking access token:', error);
// //       res.status(500).json({ message: 'Internal server error' });
// //     }
// //   }

// //   revokeToken();
// // });

// // module.exports = { router, sharedToken };
// // module.exports =sharedToken;
// module.exports = router;
// // module.exports.auth_email = auth_email;



const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router