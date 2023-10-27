const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const { fileURLToPath } = require("url");
const cors=require('cors');
const passport = require('passport');
const googleAuth = require("./routes/authentication");
// const { router, sharedToken } = require("./routes/authentication");

const jwt = require('jsonwebtoken');

const app = express();
const port = 8000; 

require("./controllers/controller.tokenJWT");
require("dotenv/config");

app.use(bodyParser.json());
app.use(cors());


app.use(bodyParser.urlencoded({extended: true}));

app.use("/auth", googleAuth);


const customDirectory = path.join(__dirname, '../client/src/pages/'); 


app.post('/api/submit', (req, res) => {
  const formData = req.body;
  console.log(formData);
  res.json({ message: 'Form data received and logged' });
});

app.post('/api/admin/submit', (req, res) => {
  const formAdminData = req.body;
  console.log(formAdminData);
  res.json({ message: 'Form data received and logged' });
});

// app.post('/api/logout', (req, res) => {
//   // Perform the logout action here, such as invalidating the user's session or token.
//   // For example, you can clear the session or remove the user's token from the server.

//   // After successfully logging out, you can send a response to the client.
//   res.status(200).json({ message: 'User logged out' });
// });
// app.get('/api/auth/check', (req, res) => {
//   // Check the user's authentication status here
//   // This can involve verifying the user's token or session.

//   // Example: Check if the user is authenticated based on a token
//   const token = req.header('Authorization'); // Assuming you send the token in the Authorization header

//   // Verify the token (you should have your own token verification logic)
//   if (tokenVerificationLogic(token)) {
//     // If the token is valid, the user is authenticated
//     res.status(200).json({ isAuthenticated: true });
//   } else {
//     // If the token is invalid or missing, the user is not authenticated
//     res.status(401).json({ isAuthenticated: false });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
