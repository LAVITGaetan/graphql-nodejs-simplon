const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const app = express();
const services = require('./server/services/render.js')

// Getting PORT variable
dotenv.config({ path : 'config.env' })
const PORT = process.env.PORT || 8080;

// Log request 
app.use(morgan('tiny'));

// Set view engine
app.set("view engine", "ejs");

// Load assets
app.use(express.static(__dirname + '/assets'));

// Main route
app.get('/', services.index)

// Sample route
app.get('/test', services.test)

app.listen(PORT, () => {console.log(`Application is running on http://localhost:${PORT}`);})