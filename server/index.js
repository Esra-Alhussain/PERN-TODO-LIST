// Import the Express library and assign it to the 'express' variable
const express = require("express");

// Create an instance of the Express application
const app = express();

// Import the CORS library and assign it to the 'cors' variable
const cors = require ("cors");

// Middleware: Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());
// Middleware: Parse incoming JSON data
app.use(express.json());

//get the data from the client side by get it from request.body object

// Start the server and listen on port 5000
app.listen(5000, () => {
    console.log("server has started on port 5000")
})


