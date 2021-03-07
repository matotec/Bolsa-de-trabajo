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

app.post("/api/insertAlum", (req, res) => {    
    const nombre = req.body.nombre
    const apellido = req.body.apellido
        const sqlQuery = 
            "INSERT INTO alumnos (nombre, apellido) VALUES (?, ?);";
        db.query(sqlQuery, [nombre,apellido], (err, result) =>{
            console.log(err)
        });   
});

app.get('/api/getAlum', (req, res) =>{
    const sqlQuery = 
        "SELECT * FROM alumnos"
    db.query(sqlQuery, (err, result) => {
        res.send(result)
    });    
})

app.get('/api/searchAlum/:searchText', (req, res) =>{
    const searchText = req.params.searchText
    console.log("aca", searchText)
        const sqlQuery = 
        `SELECT * FROM alumnos WHERE nombre LIKE '%${searchText}%';`
        db.query(sqlQuery, (err, result) => {
            console.log(result)
            res.send(result)
    });    
})



app.listen(3001, () =>{
    console.log("running on port 3001");
});