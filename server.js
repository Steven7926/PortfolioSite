const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

/////////////////////////////////////////
// Added for Heroku deployment.
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '8mb', extended: true }));

/////////////////////////////////////////
// Added for Heroku deployment.
app.set('port', (process.env.PORT || 5000));

// Allows cors to work with react
app.all('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});


///////////////////////////////////////////////////
// For Heroku deployment
app.use(express.static(path.join(__dirname, 'portfoliosite', 'build')));

///////////////////////////////////////////////////
// For Heroku deployment
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfoliosite', 'build', 'index.html'))
});

//app.listen(5000); // start Node + Express server on port 5000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});

