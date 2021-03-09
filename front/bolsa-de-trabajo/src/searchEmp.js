import React, { useState, useEffect } from 'react';
import HeaderToInicio from './components/headerToInicio'; 
import {Form, FormControl, Button, Table} from 'react-bootstrap';   
import Axios from 'axios';


const SearchEmp = () => {
    const [searchText, setSearchText] = useState("")
    const [dataAlumnos, setDataAlumnos] = useState([]);

    const searchAlumName = (searchText) => {
        Axios.get(`http://localhost:3001/api/searchAlum/${searchText}`).then((response) => {
            setDataAlumnos(response.data)
        });

    }

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getAlum").then((response) => {
            setDataAlumnos(response.data)
        });
    },[]);

    const renderAlum = (alum, index) => {
        return(
            <tr key={index}>
                <td>{alum.nombre}</td>
                <td>{alum.apellido}</td>
            </tr>
        )
    }

    return (
        <>
        <HeaderToInicio/>
            <Form inline>
                <FormControl type="text" placeholder="Buscar candidato" className="mr-sm-2" onChange={(e) => {setSearchText(e.target.value)}}/>
                    <Button variant="outline-primary" onClick={() => {searchAlumName(searchText)}}>Buscar</Button>
            </Form>
            <Table responsive>
                <thead>
                    <th>nombre</th>
                    <th>apellido</th>
                </thead>
                <tbody>
                    {dataAlumnos.map(renderAlum)}
                </tbody>
            </Table>

        </>
    )
}

export default SearchEmp;