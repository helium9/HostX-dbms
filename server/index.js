const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
const { fileURLToPath } = require("url");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const passport = require("passport");
const googleAuth = require("./routes/authentication");
// const logoutRouter = require("./routes/authentication");

// const { router, sharedToken } = require("./routes/authentication");

const jwt = require("jsonwebtoken");
function con() {
  const connection = mysql.createConnection({
    host: process.db_env.DB_HOST,
    user: process.db_env.DB_USER,
    password: process.db_env.DB_PASSWORD,
    database: process.db_env.DB_NAME,
  });
  return connection;
}

const app = express();
const port = 8000;

require("./controllers/controller.tokenJWT");
require("dotenv/config");

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", googleAuth);

app.use('/api', googleAuth);

const customDirectory = path.join(__dirname, "../client/src/pages/");

app.post("/api/submit", (req, res) => {
  const formData = req.body;
  console.log(formData);
  res.json({ message: "Form data received and logged" });
});

app.post("/api/admin/submit", (req, res) => {
  const formAdminData = req.body;
  console.log(formAdminData);
  res.json({ message: "Form data received and logged" });
});

app.get("/", (req, res) => {
  res.send("Onto the backend");
});
let index = 2;

app.post("/api/admin/hostels", async (req, res) => {
  c = con();
  const id = uuidv4();
  const val = [
    id,
    req.body.hostelName,
    req.body.floors,
    "http://localhost:4000",
  ];
  index = index + 1;
  const insertQuery = "INSERT INTO hostels VALUE (?,?, ?, ?);";

  c.query(insertQuery, val, (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("successfully created hostel ");
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
});
app.get("/api/admin/gethostelname", (req, res) => {
  c = con();
  const getQuery = "Select HostelName from hostels ;";
  const li = c.query(getQuery, (err, results) => {
    if (err) {
      throw err;
    }

    res.send(results);
  });
});



// app.post('/api/logout', (req, res) => {
//   try {
//     // Perform the logout action here
//     // This might include invalidating the user's session, clearing cookies, or revoking tokens.
//     // For example, if you're using session-based authentication:
//     req.session.destroy((err) => {
//       if (err) {
//         console.error('Error destroying session:', err);
//         res.status(500).json({ message: 'Internal Server Error' });
//       } else {
//         res.status(200).json({ message: 'User logged out' });
//       }
//     });
//   } catch (error) {
//     console.error('Error during logout:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// app.post('/api/logout', (req, res) => {
//   // You can simply respond with a success message for a frontend to handle token expiration.
//   // Since JWT tokens are stateless, there's no need to perform complex operations here.
//   res.status(200).json({ message: 'User logged out' });
// });



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
