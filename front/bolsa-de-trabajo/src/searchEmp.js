import React, { useState, useEffect } from 'react';
import HeaderToInicio from './components/headerToInicio'; 
import {Form, FormControl, Button, Table} from 'react-bootstrap';   
import Axios from 'axios';
import './styles/searchEmp.css';
import Col from 'react-bootstrap/Col';

const SearchEmp = () => {
    const [searchText, setSearchText] = useState("")
    const [dataAlumnos, setDataAlumnos] = useState([]);

    const searchAlumName = (searchText) => {
        Axios.get(`http://localhost:3001/api/searchAlum/${searchText}`).then((response) => {
            setDataAlumnos(response.data)
        });

    }

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getAlumApproved").then((response) => {
            setDataAlumnos(response.data)
        });
    },[searchText]);

    const renderAlum = (alum, index) => {
        return(
            <tr key={index}>
                <td className="textoTables">{alum.nombre}</td>
                <td className="textoTables">{alum.apellido}</td>
                <td className="textoTables">{alum.tipoDoc}</td>
                <td className="textoTables">{alum.nroDoc}</td>
                <td className="textoTables">{alum.fechaNacimiento.slice(0,10)}</td>
                <td className="textoTables">{alum.email}</td>
                <td className="textoTables">{alum.carrera}</td>
                <td className="textoTables">{alum.fechaDeInicioCarrera.slice(0,10)}</td>
                <td className="textoTables">{alum.experiencia}</td>
            </tr>
        )
    }

    return (
        <>
        <HeaderToInicio/>
        <h1 className="textoTables">Buscador de Postulantes</h1>
        <Col id="searchEmp" sm={3} md={6} xl={3} lg={6} className="justify-content-lg-center mx-auto" >
            <Form inline>
                <FormControl type="text" placeholder="Buscar candidato"  onChange={(e) => {setSearchText(e.target.value)}}/>
                    <Button variant="outline-primary" onClick={() => {searchAlumName(searchText)}}>Buscar</Button>
            </Form>
        </Col>    
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <th className="textoTables">Nombre</th>
                    <th className="textoTables">Apellido</th>
                    <th className="textoTables">TipoDeDoc</th>
                    <th className="textoTables">NroDeDoc</th>
                    <th className="textoTables">Fecha de nacimiento</th>
                    <th className="textoTables">Email</th>
                    <th className="textoTables">Carrera</th>
                    <th className="textoTables">Fecha de Inicio De Carrera</th>
                    <th className="textoTables">Experiencia</th>
                </thead>
                <tbody>
                    {dataAlumnos.map(renderAlum)}
                </tbody>
            </Table>

        </>
    )
}

export default SearchEmp;