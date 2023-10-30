const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path'); 
const { fileURLToPath } = require("url");
const cors=require('cors');
const { v4: uuidv4 } = require('uuid');
const passport = require('passport');
const googleAuth = require("./routes/authentication");
// const { router, sharedToken } = require("./routes/authentication");

const jwt = require('jsonwebtoken');
function con(){const connection = mysql.createConnection({
  host: 'localhost',         
  user: 'root',    
  password: 'admin', 
  database: 'hostel_information2', 
});
return connection;}
const app = express();
const port = 8000; 

require("./controllers/controller.tokenJWT");
require("dotenv/config");

app.use(express.json());
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

app.get("/",(req,res)=>{
  res.send("Onto the backend")
})
let index=2;

app.post("/api/admin/hostels",async (req,res)=>{
  c=con();
  const id = uuidv4();
  const val=[id,req.body.hostelName,req.body.Numberoffloors,"http://localhost:4000"];
  index=index+1;
  const insertQuery = 'INSERT INTO hostels VALUE (?,?, ?, ?);';

  c.query(insertQuery, val, (err, results) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('successfully created hostel ');
        res.status(201).send();
              
      }
    });

  // const password=req.body.Password;
  // const useri=req.body.user;
  // const ph=req.body.phone;
  // console.log(req.body);
  // const insertQuery = 'INSERT INTO mytable VALUE (?, ?, ?);';
  // const selectquery="select count(*) from mytable where userID=?;"
  // const b=[useri];
  // c=con();
  // const li=c.query(selectquery,b,(err,results)=>{if(err){throw err;}
  //         if(results[0]["count(*)"]>0){
              
  //             res.status(202).send();
              
              
  //         }});
  
 
  // const hashedPassword = await bcrypt.hash(password, 10)
  // const user2 = { name: useri, password: hashedPassword }
  // users.push(user2);
  // const values = [useri,ph,hashedPassword];
  // console.log(hashedPassword);
  
  // c.query(insertQuery, values, (err, results) => {
  //     if (err) {
  //       console.error('Error inserting data:', err);
  //       res.status(500).json({ error: 'Internal Server Error' });
  //     } else {
  //       console.log('successfully registered');
  //       res.status(201).send();
              
  //     }
  //   });
})  
app.get("/api/admin/gethostelname",(req,res)=>{
  c=con();
  const getQuery = "Select HostelName from hostels ;";
  const li=c.query(getQuery,(err,results)=>{if(err){throw err;}
         
              
              res.send(results);
              
              
          });


})
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
