const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser');
const cors = require('cors')

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'bolsadetrabajodb'
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res) => {    
    const nombre = req.body.nombre
    const apellido = req.body.apellido
        const sqlQuery = 
            "INSERT INTO alumnos (nombre, apellido) VALUES (?, ?);";
        db.query(sqlQuery, [nombre,apellido], (err, result) =>{
            console.log(err)
        });   
});

app.listen(3001, () =>{
    console.log("running on port 3001");
});