const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require("bcrypt");
const { fileURLToPath } = require("url");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const passport = require("passport");
const googleAuth = require("./routes/authentication");
const jwt = require("jsonwebtoken");
require("./controllers/controller.tokenJWT");
require("dotenv").config({ path: ".db_env" });
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
// const { sharedToken, router } = require('./routes/authentication.js')

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({"origin":"http://localhost:3000"}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/auth", googleAuth);
app.use("/api", googleAuth);



// console.log('Email in index.js:',googleAuth.auth_email);

// const customDirectory = path.join(__dirname, "../client/src/pages/");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '@mysql271314',
//   database: 'hostx-dbms',
// });
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// const customDirectory = path.join(__dirname, "../client/src/pages/");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email", // Your login field (e.g., email)
      passwordField: "password", // Your password field
    },
    (username, password, done) => {
      // Validate the user's credentials
      // Replace this with your database query for user authentication
      b = [username];
      try {
        const li = connection.query(
          `select * from admin where Email=?`,
          b,
          (err, results) => {
            if (err) {
              throw err;
            }

            if (results.length == 0) {
              console.log("username dne");
              return done(null, false);
            } else if (results[0].Password !== password) {
              return done(null, false);
            }
            // localStorage.setItem('adminID', results[0].AdminID);
            return done(null, results[0].AdminID);
          }
        );
      } catch (error) {
        return done(error, false);
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
  )
);

// Serialize user (store the admin ID in the session)
passport.serializeUser((user, done) => {
  done(null, user.adminID);
});

// Deserialize user (retrieve the admin ID from the session)
passport.deserializeUser((adminID, done) => {
  done(null, { adminID });
});

app.use(
  session({ secret: "yourSecretKey", resave: false, saveUninitialized: false })
);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
function isAuthenticated(req,res,next){

  if(req.user) return next();
  res.redirect("/login");
};
// app.post("/register",async (req,res)=>{
//   const user=await User.findOne({username:req.body.username});
//   if(user) return res.status(400).send("User already exists");
//   const newuser=await User.create(req.body);
//   res.status(201).send(newuser);

// })
app.get("/failed", (rq, res) => {
  res.send("Login failed");
});
app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/failed" }),
  async (req, res) => {
    // return res.json({ success: true });

    if (req.isAuthenticated() && req.user) {
      const adminID = req.user;
      return res.json({ success: true, adminID });
    }
    // Handle cases where the user is not authenticated or the adminID is not available
    return res.json({ success: false, adminID: null });
  }
);




app.post("/register", (req, res) => {
  b = [req.body.email];
  let y;
  const li = connection.query(
    `select * from admin where Email=(?)`,
    b,
    (err, results) => {
      if (err) {
        throw err;
      }

      if (results.length == 0) {
        const adminid = uuidv4();
        connection.query(
          `insert into admin value (?,?,?,?,?,?)`,
          [
            adminid,
            req.body.name,
            req.body.email,
            req.body.contact,
            req.body.insti,
            req.body.password,
          ],
          (err, results) => {
            if (err) {
              throw err;
            }
            console.log("registered");
            res.send("Succesfully registered");
          }
        );
      } else {
        res.send("username already exist");
      }
    }
  );
});

//form page
app.post("/api/submit", (req, res) => {
  const formData = req.body;
  console.log(formData);
  res.json({ message: "Form data received and logged for form page" }); //form page
});

app.get("/getcred", (req, res) => {
  connection.query(
    `select * from admin where AdminID=(?)`,
    [req.query.admin_ID],
    (err, results) => {
      if (err) {
        throw err;
      }
      
      res.send(results[0]);
    }
  );
});

app.get("/getFilledBy", (req, res) => {
  connection.query(
    `select count(*) from preferences where HostelID=(?);`,
    [req.query.email_ID],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results[0]);
    }
  );
});

app.post("/getpref",(req, res) => {
  const v=req.body.params
  
  try {
    for (const key in v.pref) {
      if (key !== 'P1') {
        connection.query(
            `INSERT INTO Preferences (HostelID, EmailID, RollNumber, RoommateRollNumber, TimeOfEntry) VALUES (?, ?, ?, ?, ?);`,
            [v.hostel_ID, v.Email, v.pref["P1"], v.pref[key], v.time],
            (err, results) => {
              if (err) {
                throw err;
              }}
          );}}
  } catch (error) {
    console.error('Error inserting data:', error);
  }
  res.send("Yes");
});

app.get("/getMaxroom", (req, res) => {
  connection.query(
    ` select * from roominfo where HostelID=(?) order by  size desc limit 1;`,
    [req.query.hostel_ID],
    (err, results) => {
      if (err) {
        throw err;
      }
      
      res.send(results[0]); 
    }
  );
});
app.get("/updatecred",(req,res)=>{
  console.log(req.query)
  
  connection.query(
    `update admin set Email=(?),Contact=(?) where AdminID=(?);`,
    [req.query.email,req.query.contact,req.query.admin_ID],
    (err, results) => {
      if (err) {
        throw err;
      }
      
      res.send(results); 
    }
  );
})
app.post("/sendData",(req,res)=>{
  console.log(req.body);
  for (const val in req.body.tableData){
    connection.query(
      `INSERT INTO roominfo VALUES (?, ?, ?, ?, ?);`,
      [req.body.hostel_id, req.body.floor, req.body.tableData[val].Name, req.body.tableData[val].Size,req.body.tableData[val].SNo],
      (err, results) => {
        if (err) {
          throw err;
        }}
    );
    // console.log( [req.body.hostel_id, req.body.floor, req.body.tableData[val].Name, req.body.tableData[val].Size,req.body.tableData[val].SNo])

    // console.log(req.body.tableData[val].key);
  }
  res.send({"success":true});
})
app.get("/getLink", (req, res) => {
  connection.query(
    ` select * from formcontrols where HostelID=(?);`,
    [req.query.email_ID],
    (err, results) => {
      if (err) {
        throw err;
      }
      console.log(results[0]);
      res.send(results[0]); 
    }
  );
});
app.get('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect("http://localhost:3000/")
  });
  // req.logout();
  // res.redirect("http://localhost:3000/")
});
//dashButton edit handling
app.put("/api/admin/edit", async (req, res) => {
  const hostelID = req.query.hostelID;
  if (req.query.type === "H_Info") {
    try { //connection.query("string", func)
      connection.query(
        `UPDATE registeredhostels SET HostelName="${req.body.hostelName}", Floors="${req.body.floors}" WHERE HostelID="${hostelID}";`,
        (err, results) => {
          if (err) throw err;
          res.send("Success, updated Hostel Name and total Floors.");
        }
      );
    } catch {
      res.status(500).send();
    }
  } else if (req.query.type === "F_Info") {
    const floorInfo = req.body; 
    console.log(floorInfo, hostelID);
    try {
      connection.query(
        `DELETE FROM floorinfo WHERE HostelID="${hostelID}";`,
        (err, results) => {
          if (err) throw err;
          try {
            connection.query(
              `SELECT Floors FROM registeredhostels WHERE HostelID="${hostelID}";`,
              (err, results) => {
                if (err) throw err;
                const maxFloors = results[0].Floors;
                let queryString = `INSERT INTO floorinfo (HostelID, Floor, MaxRooms) \nVALUES\n`;
                for (let i = 1; i <= maxFloors; i++) {
                  queryString += `("${hostelID}", ${i}, ${
                    floorInfo[i.toString()]
                  }),\n`;
                }
                queryString = queryString.slice(0, queryString.length - 2) + `;`;
                console.log(queryString);
                try{
                  connection.query(queryString, (err, response) => {
                    if (err) throw err;
                    res.send("Sucessfully updated floorInfo data.");
                  });
                } catch{
                  res.status(500).send();
                }
              }
            );
          } catch {
            res.status(500).send();
          }
        }
      );
    } catch {
      res.status(500).send();
    }
  }
});

app.delete("/api/admin/delete", async(req, res) =>{
  const hostelID = req.query.hostelID;
  try{
    connection.query(`DELETE FROM registeredhostels WHERE HostelID="${hostelID}"`,
    (err, results) => {
      if (err) throw err;
      console.log(results);
      res.send(200);
    });
  }
  catch{
    res.status(500).send();
  }
  });


//plus modal, register hostel
app.post("/api/admin/submit", async (req, res) => {
  if (req.query.type === "H_Info") {
    const hostelInfo = req.body;
    console.log(hostelInfo);
    const hostelID = uuidv4();
    res.json({
      message: "Form data received and logged for admin page, register hostel",
      hostelID: hostelID,
    });
    try {
      connection.query(
        `INSERT INTO registeredhostels VALUES ("${hostelInfo.admin_ID}", 
      "${hostelInfo.hostelName}", 
      "${hostelID}", 
      ${Number(hostelInfo.floors)});`,
        (err, results) => {
          if (err) throw err;
          console.log(results);
        }
      );
    } catch {
      res.status(500).send();
    }
  } else if (req.query.type === "F_Info") {
    // console.log("Floor Info", req.body);
    const floorInfo = req.body;
    // console.log(floorInfo);
    const hostelID = floorInfo.hostelID;

    try {
      connection.query(
        `SELECT Floors FROM registeredhostels WHERE HostelID="${hostelID}";`,
        (err, results) => {
          if (err) throw err;
          const maxFloors = results[0].Floors;
          let queryString = `INSERT INTO floorinfo (HostelID, Floor, MaxRooms) \nVALUES\n`;
          for (let i = 1; i <= maxFloors; i++) {
            queryString += `("${hostelID}", ${i}, ${
              floorInfo[i.toString()]
            }),\n`;
          } 
          queryString = queryString.slice(0, queryString.length - 2) + `;`;
          // console.log(queryString);
          connection.query(queryString, (err, response) => {
            if (err) throw err;
            res.send("Sucessfully updated floorInfo data.");
          });
        }
      );
    } catch {
      res.status(500).send();
    }
  } else {
    res.status(500).send("Invalid query params.");
  }
});

app.get("/getFloors", async (req, res) => {
  const hostelID = req.query.hostelID;
  try {
    connection.query(
      `SELECT Floor, MaxRooms FROM floorinfo WHERE HostelID="${hostelID}";`,
      (err, rows, fields) => {
        if (err) throw err;
        let floors = [];
        rows.forEach((element) => {
          floors.push(element);
        });
        res.send({ floorsInfo: floors });
        // console.log(rows);
      } 
    );
  } catch {
    // console.log(req.query);
    res.status(500).send("Error fetching floors.");
  }
});

app.get("/getHostels", async (req, res) => {
  // console.log("try");
  try {
    connection.query(
      `SELECT HostelID, HostelName FROM registeredhostels WHERE AdminID="${req.query.admin_ID}"`,
      (err, rows, fields) => {
        if (err) throw err;
        let hostels = [];
        rows.forEach((element) => {
          hostels.push(element);
        });
        // console.log(rows);
        res.send({ registered: hostels });
      }
    );
  } catch {
    res.status(500).send("Error fetching registered hostels.");
  }
  // console.log(req.query);
});






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
