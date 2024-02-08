//Importing the pg Library
const Pool = require("pg").Pool;
//Creating a Database Connection Pool
const pool = new Pool({
    user: "postgres",
    password: "ImamAli",
    host: "localhost",
    port: 5432,
    database: "pernotodo"
});

module.exports=  pool;