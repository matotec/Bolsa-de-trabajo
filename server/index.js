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


app.post("/api/insertEmp", (req, res) => {    
    const nombreEmp = req.body.nombreEmp
    const cuit = req.body.cuit
    const provincia = req.body.provincia
    const localidad = req.body.localidad
    const direccion = req.body.direccion
    const telefono = req.body.telefono
    const email = req.body.email
        const sqlQuery = 
            "INSERT INTO empresas (nombreEmp, cuit, provincia, localidad, direccion, telefono, email) VALUES (?, ?, ?, ?, ?, ?, ?);";
        db.query(sqlQuery, [nombreEmp, cuit, provincia, localidad, direccion, telefono, email], (err, result) =>{
            console.log(err)
        });   
});

app.post("/api/insertJob", (req, res) => {  
    const categoria = req.body.categoria;  
    const descripcion = req.body.descripcion;
    const fechaInicio = req.body.fechaInicio;
    const fechaFinalizacion = req.body.fechaFinalizacion;
    const estadoDeAprobacion = req.body.estadoDeAprobacion
        const sqlQuery = 
            "INSERT INTO empleos (categoria, descripcion, fechaInicio, fechaFinalizacion, estadoDeAprobacion) VALUE (?, ?, ?, ?, ?);";
        db.query(sqlQuery, [categoria, descripcion, fechaInicio, fechaFinalizacion, estadoDeAprobacion], (err, result) =>{
            console.log(err)
        });   
});

app.get('/api/getJob', (req, res) =>{
    const sqlQuery = 
        "SELECT * FROM empleos"
    db.query(sqlQuery, (err, result) => {
        res.send(result)
    });    
})

app.get('/api/searchJob/:searchText', (req, res) =>{
    const searchText = req.params.searchText
        const sqlQuery = 
        `SELECT * FROM empleos WHERE categoria LIKE '%${searchText}%';`
        db.query(sqlQuery, (err, result) => {
            console.log(result)
            res.send(result)
    });    
})

      
app.post("/api/insertAlum", (req, res) => {    
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const tipoDoc = req.body.tipoDoc
    const nroDoc = req.body.nroDoc
    const fechaNacimiento = req.body.fechaNacimiento
    const email = req.body.email
    const carrera = req.body.carrera
    const fechaDeInicioCarrera = req.body.fechaDeInicioCarrera
    const experiencia = req.body.experiencia
    const estadoDeAprobacion = req.body.estadoDeAprobacion
        const sqlQuery = 
            "INSERT INTO alumnos (nombre, apellido, tipoDoc, nroDoc, fechaNacimiento, email, carrera, fechaDeInicioCarrera, experiencia, estadoDeAprobacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        db.query(sqlQuery, [nombre,apellido,tipoDoc,nroDoc,fechaNacimiento,email,carrera,fechaDeInicioCarrera,experiencia,estadoDeAprobacion], (err, result) =>{
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