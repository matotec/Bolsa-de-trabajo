import React, { useState, useEffect } from 'react';
import HeaderToInicio from './components/headerToInicio'; 
import {Form, FormControl, Button, Table} from 'react-bootstrap';   
import Axios from 'axios';

const PageApprove = () => {
    const [value, setValue] = useState("aprobar")
    const [dataAlumDisapproved, setDataAlumDisapproved] = useState([]);
    const [dataJobDisapproved, setDataJobDisapproved] = useState([]);

    const alumApproved = (nroDoc) => {
        const newDisapproved = dataAlumDisapproved.filter(alum=>alum.nroDoc != nroDoc)
        setDataAlumDisapproved(newDisapproved) 
        Axios.put("http://localhost:3001/api/approveAlum", {nroDoc: nroDoc}).then(() => {
            alert("successful")
        });
    }

    const jobApproved = (id) => {
        const newJobDisapproved = dataJobDisapproved.filter(job=>job.id != id)
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
                <td>{alum.nombre}</td>
                <td>{alum.apellido}</td>
                <td>{alum.tipoDoc}</td>
                <td>{alum.nroDoc}</td>
                <td>{alum.fechaNacimiento.slice(0,10)}</td>
                <td>{alum.email}</td>
                <td>{alum.carrera}</td>
                <td>{alum.fechaDeInicioCarrera.slice(0,10)}</td>
                <td>{alum.experiencia}</td>
        <td>{<input id="botonAceptar" type="button" variant="outline-primary" onClick={() => {alumApproved(alum.nroDoc)}} value={value}/>}</td>
            </tr>
        )
    }

    const renderJob = (job, index) => {
        return(
            <tr key={index}>
                <td>{job.id}</td>
                <td>{job.categoria}</td>
                <td>{job.descripcion}</td>
                <td>{job.fechaInicio.slice(0,10)}</td>
                <td>{job.fechaFinalizacion.slice(0,10)}</td>
        <td>{<input id="botonAceptar" type="button" variant="outline-primary" onClick={() => {jobApproved(job.id)}} value={value}/>}</td>
            </tr>
        )
    }

    return (
        <>
        <HeaderToInicio/>
        <h1>Alumnos Pendientes de Aprobación</h1>
            <Table responsive>
                <thead>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>TipoDeDoc</th>
                    <th>NroDeDoc</th>
                    <th>Fecha de nacimiento</th>
                    <th>Email</th>
                    <th>Carrera</th>
                    <th>Fecha de Inicio De Carrera</th>
                    <th>Experiencia</th>
                    <th>Estado de aprobación</th>
                </thead>
                <tbody>
                    {dataAlumDisapproved.map(renderAlum)}
                </tbody>
            </Table>
        <h1>Empleos Pendientes de Aprobación</h1>
            <Table responsive>
                <thead>
                    <th>id</th>
                    <th>Categoria</th>
                    <th>Descripción</th>
                    <th>Fecha De Inicio</th>
                    <th>Fecha de Finalización</th>
                    <th>Estado de aprobación</th>
                </thead>
                <tbody>
                    {dataJobDisapproved.map(renderJob)}
                </tbody>
            </Table>
        </>
    )
}

export default PageApprove;