const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const { fileURLToPath } = require("url");
const cors=require('cors');

const app = express();
const port = 3001; 

app.use(bodyParser.json());
app.use(cors());

const customDirectory = path.join(__dirname, '../client/src/pages/'); 

// app.get('/form',(req, res) => { 
//     res.sendFile('Forms.js', { root: customDirectory });

// });

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
