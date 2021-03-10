import React, { useState, useEffect } from 'react';
import HeaderToInicio from './components/headerToInicio';    
import {Form, FormControl, Button, Table} from 'react-bootstrap';   
import Axios from 'axios';
import './styles/searchAlum.css';
import Col from 'react-bootstrap/Col';

const SearchAlum = () => {
    const [searchText, setSearchText] = useState("")
    const [dataJob, setDataJob] = useState([]);

    const searchJobCat = (searchText) => {
        Axios.get(`http://localhost:3001/api/searchJob/${searchText}`).then((response) => {
            setDataJob(response.data)
        });

    }

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getJobApproved").then((response) => {
            setDataJob(response.data)
        });
    },[searchText]);

    const renderJob = (job, index) => {
        return(
            <tr key={index}>
                <td className="textoTables">{job.categoria}</td>
                <td className="textoTables">{job.descripcion}</td>
                <td className="textoTables">{job.fechaInicio.slice(0,10)}</td>
                <td className="textoTables">{job.fechaFinalizacion.slice(0,10)}</td>
            </tr>
        )
    }

    return (
        <>
        <HeaderToInicio/>
        <h1 className="textoTables">Buscador de empleos</h1>
        <Col id="searchAlum" sm={3} md={6} xl={3} lg={6} className="justify-content-lg-center mx-auto" >
            <Form inline>
                <FormControl type="text" placeholder="Buscar empleo" onChange={(e) => {setSearchText(e.target.value)}}/>
                    <Button variant="outline-primary" onClick={() => {searchJobCat(searchText)}}>Buscar</Button>
            </Form>
        </Col>
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <th className="textoTables">Categoria</th>
                    <th className="textoTables">Descripción</th>
                    <th className="textoTables">Fecha de inicio convocatoria</th>                                        
                    <th className="textoTables">Fecha de finalización convocatoria</th>
                    
                </thead>
                <tbody>
                    {dataJob.map(renderJob)}
                </tbody>
            </Table>
        </>
    )
}

export default SearchAlum;