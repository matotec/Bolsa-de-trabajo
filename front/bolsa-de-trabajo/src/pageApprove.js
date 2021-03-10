import React, { useState, useEffect } from 'react';
import HeaderToInicio from './components/headerToInicio'; 
import {Form, FormControl, Button, Table} from 'react-bootstrap';   
import Axios from 'axios';
import './styles/pageApprove.css'

const PageApprove = () => {
    const [value, setValue] = useState("aprobar")
    const [dataAlumDisapproved, setDataAlumDisapproved] = useState([]);
    const [dataJobDisapproved, setDataJobDisapproved] = useState([]);

    const alumApproved = (nroDoc) => {
        const newDisapproved = dataAlumDisapproved.filter(alum=>alum.nroDoc !== nroDoc)
        setDataAlumDisapproved(newDisapproved) 
        Axios.put("http://localhost:3001/api/approveAlum", {nroDoc: nroDoc}).then(() => {
            alert("successful")
        });
    }

    const jobApproved = (id) => {
        const newJobDisapproved = dataJobDisapproved.filter(job=>job.id !== id)
        setDataJobDisapproved(newJobDisapproved)
        Axios.put("http://localhost:3001/api/approveJob", {id: id}).then(() => {
            alert("successful")
        });
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getAlum").then((response) => {
            setDataAlumDisapproved(response.data)
        })
        Axios.get("http://localhost:3001/api/getJob").then((response) => {
            setDataJobDisapproved(response.data)
        })
        ;
    },[]);

    const renderAlum = (alum, index) => {
        return(
            <tr key={index}>
                <td id="textoTables">{alum.nombre}</td>
                <td id="textoTables">{alum.apellido}</td>
                <td id="textoTables">{alum.tipoDoc}</td>
                <td id="textoTables">{alum.nroDoc}</td>
                <td id="textoTables">{alum.fechaNacimiento.slice(0,10)}</td>
                <td id="textoTables">{alum.email}</td>
                <td id="textoTables">{alum.carrera}</td>
                <td id="textoTables">{alum.fechaDeInicioCarrera.slice(0,10)}</td>
                <td id="textoTables">{alum.experiencia}</td>
        <td id="textoTables">{<input id="botonAceptar" type="button" variant="outline-primary" onClick={() => {alumApproved(alum.nroDoc)}} value={value}/>}</td>
            </tr>
        )
    }

    const renderJob = (job, index) => {
        return(
            <tr key={index}>
                <td id="textoTables">{job.categoria}</td>
                <td id="textoTables">{job.descripcion}</td>
                <td id="textoTables">{job.fechaInicio.slice(0,10)}</td>
                <td id="textoTables">{job.fechaFinalizacion.slice(0,10)}</td>
        <td id="textoTables">{<input id="botonAceptar" type="button" variant="outline-primary" onClick={() => {jobApproved(job.id)}} value={value}/>}</td>
            </tr>
        )
    }

    return (
        <>
        <HeaderToInicio/>
        <h1 id="textoTables">Alumnos Pendientes de Aprobación</h1>
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <th id="textoTables">Nombre</th>
                    <th id="textoTables">Apellido</th>
                    <th id="textoTables">TipoDeDoc</th>
                    <th id="textoTables">NroDeDoc</th>
                    <th id="textoTables">Fecha de nacimiento</th>
                    <th id="textoTables">Email</th>
                    <th id="textoTables">Carrera</th>
                    <th id="textoTables">Fecha de Inicio De Carrera</th>
                    <th id="textoTables">Experiencia</th>
                    <th id="textoTables">Estado de aprobación</th>
                </thead>
                <tbody>
                    {dataAlumDisapproved.map(renderAlum)}
                </tbody>
            </Table>
        <h1  id="textoTables">Empleos Pendientes de Aprobación</h1>
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <th id="textoTables">Categoria</th>
                    <th id="textoTables">Descripción</th>
                    <th id="textoTables">Fecha De Inicio</th>
                    <th id="textoTables">Fecha de Finalización</th>
                    <th id="textoTables">Estado de aprobación</th>
                </thead>
                <tbody>
                    {dataJobDisapproved.map(renderJob)}
                </tbody>
            </Table>
        </>
    )
}

export default PageApprove;