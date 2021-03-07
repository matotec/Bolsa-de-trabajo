const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'bolsadetrabajodb'
});



app.get("/", (req, res) => {    
        const sqlQuery = 
            "INSERT INTO alumnos (nombre, apellido) VALUES ('miguel', 'garcia');";
        db.query(sqlQuery, (err, result) =>{
            res.send("holas");
        });   
});

app.listen(3001, () =>{
    console.log("running on port 3001");
});