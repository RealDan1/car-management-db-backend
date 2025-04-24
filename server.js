//import dependencies
const dotenv = require('dotenv');

require('dotenv').config();

const uri = process.env.MONGO_URI;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Import routes
const getCars = require('./routes/getCars');

// Initialize express
const app = express();

// Set up port for server to listen on
const PORT = process.env.PORT || 8080;

//enable cors
app.use(cors());

// Connect to the database
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true }).then(
  () => {
    console.log('Successfully connected to the database!');
  },
  (err) => {
    console.log('Could not connect to the database...' + err);
  }
);
// Allow app to accept json and url values
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes to be handled from: http://localhost:8080/cars
app.use('', getCars);

// Start up express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
