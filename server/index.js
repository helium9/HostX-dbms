const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
const { fileURLToPath } = require("url");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const passport = require("passport");
const googleAuth = require("./routes/authentication");
const jwt = require("jsonwebtoken");
require("./controllers/controller.tokenJWT");
require("dotenv").config({ path: ".db_env" });
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/auth", googleAuth);
app.use("/api", googleAuth);


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@mysql271314',
  database: 'hostx-dbms',
});
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});



// const customDirectory = path.join(__dirname, "../client/src/pages/");

// const connection = mysql.createConnection({
  
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

passport.use(new LocalStrategy(
  {
    usernameField: 'email', // Your login field (e.g., email)
    passwordField: 'password', // Your password field
  },
  (username, password, done) => {
    // Validate the user's credentials
    // Replace this with your database query for user authentication
    b=[username];
    try{
    const li=connection.query(`select * from admin where Email=?`,b,(err,results)=>{if(err){throw err;}
            
            if(results.length==0){
                console.log("username dne")
              return done(null,false);
                
                
            }
            else if(results[0].Password!==password){
              
              return done(null,false);
            } 
            // localStorage.setItem('adminID', results[0].AdminID);
            return done(null,results[0].AdminID);})}
            catch(error){
              return done(error,false);
          }
  
          
    // const user ="123";
    
    // if (!user || !comparePasswords(password, user.password)) {
    //   return done(null, false, { message: 'Invalid username or password' });
    // }

    // // Generate a unique admin ID
    // const adminID = uuid.v4();

    // // Store the admin ID in the user's session
    // done(null, { adminID });
  }
));

// Serialize user (store the admin ID in the session)
passport.serializeUser((user, done) => {
  done(null, user.adminID);
});

// Deserialize user (retrieve the admin ID from the session)
passport.deserializeUser((adminID, done) => {
  done(null, { adminID });});

app.use(session({ secret: 'yourSecretKey', resave: false, saveUninitialized: false }));
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());  

// app.post("/register",async (req,res)=>{
//   const user=await User.findOne({username:req.body.username});
//   if(user) return res.status(400).send("User already exists");
//   const newuser=await User.create(req.body);
//   res.status(201).send(newuser);


// })
app.get("/failed",(rq,res)=>{
  res.send("Login failed")
})
app.post("/login",passport.authenticate("local",{failureRedirect:"/failed"}),async (req,res)=>{
  // return res.json({ success: true });



  if (req.isAuthenticated() && req.user) {
    const adminID = req.user;
    return res.json({ success: true, adminID });
  }
  // Handle cases where the user is not authenticated or the adminID is not available
  return res.json({ success: false, adminID: null });
})

app.post("/register",(req,res)=>{
  
  b=[req.body.email];
  let y;
    const li=connection.query(`select * from admin where Email=(?)`,b,(err,results)=>{if(err){throw err;}
            
                if(results.length==0){
                  const adminid=uuidv4();
                  connection.query(`insert into admin value (?,?,?,?,?,?)`,[adminid,req.body.name,req.body.email,req.body.contact,req.body.isti,req.body.password],(err,results)=>{if(err){throw err;} console.log("registered"); res.send("Succesfully registered")});
                }
                else{
                  res.send("username already exist");
                }});
  
 
})
app.post("/api/submit", (req, res) => {
  const formData = req.body;
  console.log(formData);
  res.json({ message: "Form data received and logged for form page" }); //form page
});



app.get("/getcred",(req,res)=>{
  connection.query(`select * from admin where AdminID=(?)`,[req.body.admin_ID],(err,results)=>{if(err){throw err;}  console.log(results[0]); res.send(results[0])});


})
//plus modal, register hostel
app.post("/api/admin/submit", async (req, res) => {
  const hostelInfo = req.body;
  console.log(hostelInfo);
  res.json({
    message: "Form data received and logged for admin page, register hostel",
  });
  try {
    connection.query(
      `INSERT INTO registeredhostels VALUES ("${hostelInfo.admin_ID}", 
      "${hostelInfo.hostelName}", 
      "${uuidv4()}", 
      ${Number(hostelInfo.floors)});`,
      (err, results) => {
        if (err) throw err;
        console.log(results);
      }
    );
  } catch {
    res.status(500).send();
  }
});

app.get("/", (req, res) => {
  res.send("Onto the backend");
});

// let index = 2;

// app.post("/api/admin/hostels", async (req, res) => {
//   const id = uuidv4();
//   const val = [
//     id,
//     req.body.hostelName,
//     req.body.floors,
//     "http://localhost:4000",
//   ];
//   index = index + 1;
//   const insertQuery = "INSERT INTO hostels VALUE (?,?, ?, ?);";

//   connection.query(insertQuery, val, (err, results) => {
//     if (err) {
//       console.error("Error inserting data:", err);
//       res.status(500).json({ error: "Internal Server Error" });
//     } else {
//       console.log("successfully created hostel ");
//       res.status(201).send();
//     }
//   });

// });

// app.get("/api/admin/gethostelname", (req, res) => {
//   const getQuery = "Select HostelName from hostels ;";
//   const li = connection.query(getQuery, (err, results) => {
//     if (err) {
//       throw err;
//     }
//     res.send(results);
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
