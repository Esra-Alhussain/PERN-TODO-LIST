// Import the Express library and assign it to the 'express' variable
const express = require("express");
const app = express();     // Create an instance of the Express application
const cors = require ("cors");      // Import the CORS library and assign it to the 'cors' variable
const pool = require ("./db");     // import the pool object from a "db" module


// Middleware: Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());
// Middleware: Parse incoming JSON data
app.use(express.json());

//Routes

//create a todo to add the data by seding the data in the body of the request
app.post("/todos", async(req,res) => {
    // handle errors that may occur during the execution of the code inside the try
    try{
        //get data from client side to determine what will be added 
        //extracts the 'description' property from the request body
        const { description } = req.body;
        //instert a new record 'row' to the 'todo' table in a PostgreSQL database with the specified description,
        // and returns all columns of the newly inserted row
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *",
         [description] // the value that was prrovided by the client to be inserted into the description column and replace the $1 placeholder in the SQL query
         ); 
         //send a JSON response to the client containig the result of exectuting the 'pool.query' method tje sql query
         res.json (newTodo.rows[0]);
    } catch (error) {
        console.error(err.message);
    }
    //await to wait for the function before it continues 
});

//get all todos
app.get("/todos", async(req,res) => {
    try{
        const allTodos = await pool.query(" SELECT * FROM todo");
        res.json(allTodos.rows)
    }catch(err){
        console.error(err.message)
    }
});

//get a todo
app.get("/todos/:id", async (req,res) => {
    try{
        const { id } = req.params;  //extracts the value of the id parameter from the request URL's parameters
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0])
        console.log(req.params);
    }catch (err){
        console.error(err.message);
    }
});

//update a todo

//deletee a todo


// Start the server and listen on port 5000
app.listen(5000, () => {
    console.log("server has started on port 5000")
})


