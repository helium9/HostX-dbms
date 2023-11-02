const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require('bcrypt');

const { fileURLToPath } = require("url");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const passport = require("passport");
const googleAuth = require("./routes/authentication");
const jwt = require("jsonwebtoken");
require("./controllers/controller.tokenJWT");
require("dotenv").config({ path: ".db_env" });

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/auth", googleAuth);
app.use("/api", googleAuth);

// const customDirectory = path.join(__dirname, "../client/src/pages/");

// const connection = mysql.createConnection({
  
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

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

app.post("/api/submit", (req, res) => {
  const formData = req.body;
  console.log(formData);
  res.json({ message: "Form data received and logged for form page" }); //form page
});

//plus modal, register hostel
app.post("/api/admin/submit", async (req, res) => {
  if (req.query.type === "H_Info") {
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
  }
  else if(req.query.type === "F_Info"){
    res.json({
      message: "Floor data received and logged for admin page, register hostel",
    });
    console.log("Floor Info", req.body);
  }
  else{
    res.status(500).send("Invalid query params.");
  }
});

app.get("/getHostels", async (req, res) => {
  console.log("try");
  try {
    connection.query(
      `SELECT HostelName FROM registeredhostels WHERE AdminID="${req.query.admin_ID}"`,
      (err, rows, fields) => {
        if (err) throw err;
        let hostelNames = [];
        rows.forEach((element) => {
          hostelNames.push(element.HostelName);
        });
        // console.log(rows);
        res.send({ registered: hostelNames });
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
