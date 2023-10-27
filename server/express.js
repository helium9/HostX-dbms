const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const { fileURLToPath } = require("url");
const cors=require('cors');
const passport = require('passport');
const googleAuth = require("./routes/authentication");
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
