import React, { useState, useEffect } from 'react';
import HeaderToInicio from './components/headerToInicio';    
import {Form, FormControl, Button, Table} from 'react-bootstrap';   
import Axios from 'axios';


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
                <td>{job.categoria}</td>
                <td>{job.descripcion}</td>
                <td>{job.fechaInicio.slice(0,10)}</td>
                <td>{job.fechaFinalizacion.slice(0,10)}</td>
            </tr>
        )
    }

    return (
        <>
        <HeaderToInicio/>
        <div>buscador de uso de alumnos</div>
        <Form inline>
                <FormControl type="text" placeholder="Buscar empleo" className="mr-sm-2" onChange={(e) => {setSearchText(e.target.value)}}/>
                    <Button variant="outline-primary" onClick={() => {searchJobCat(searchText)}}>Buscar</Button>
            </Form>
            <Table responsive>
                <thead>
                    <th>Categoria</th>
                    <th>Descripción</th>
                    <th>Fecha de inicio convocatoria</th>                                        
                    <th>Fecha de finalización convocatoria</th>
                    
                </thead>
                <tbody>
                    {dataJob.map(renderJob)}
                </tbody>
            </Table>
        </>
    )
}

export default SearchAlum;