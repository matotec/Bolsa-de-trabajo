import React, { useState, useEffect } from 'react';
import HeaderToInicio from './components/headerToInicio';    
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

import {useHistory} from 'react-router-dom';

const ChargeJob = () => {
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFinalizacion, setFechaFinalizacion] = useState("");
    const [estadoDeAprobacion, setEstadoDeAprobacion] = useState("desaprobado");
    const [condBotonEnviar, setCondBotonEnviar] = useState(true);
    const [advertencia, setAdvertencia] = useState(true)

    const history = useHistory();

    const redirectToConfirmJob = () => {
        history.push("/confirmJob")
    }

    const submitData = () => {
        redirectToConfirmJob()
        Axios.post("http://localhost:3001/api/insertJob",
         {categoria: categoria, descripcion: descripcion, fechaInicio: fechaInicio, fechaFinalizacion: fechaFinalizacion, estadoDeAprobacion: estadoDeAprobacion}).then(() =>{
          alert("successful");
         });
    }

    useEffect(() => {
        if(categoria.length && descripcion.length && fechaInicio.length && fechaFinalizacion.length){
            setCondBotonEnviar(false)
            setAdvertencia(false)
        }else{
            setCondBotonEnviar(true)
            setAdvertencia(true)
        }
    },[categoria, descripcion, fechaInicio, fechaFinalizacion]);

    return (
        <>
        <HeaderToInicio/>
        <div id="formInput">
          <label id="labels">Categoria</label>
            <input name="categoria" type="text" placeholder="ingrese categoria" onChange={(e)=>{setCategoria(e.target.value)}} />
        </div>
        <div id="formInput">
            <Form.Label>Descripción del empleo</Form.Label>
            <Form.Control as="textarea" rows={4} id="tamañoTextArea" onChange={(e)=>{setDescripcion(e.target.value)}}/>
        </div>
        <div id="formInput">
            <label id="labels">Fecha De Inicio Convocatoria</label>
            <input type="date" name="fechaInicio" onChange={(e)=>{setFechaInicio(e.target.value)}}></input>
        </div>
        <div id="formInput">
            <label id="labels">Fecha De Cierre Convocatoria</label>
            <input type="date" name="fechaFin" onChange={(e)=>{setFechaFinalizacion(e.target.value)}}></input>
        </div>
        <div id="botonEnviar">
        <Button variant="secondary" onClick={submitData} disabled={condBotonEnviar}>Enviar</Button>
        </div>
        {advertencia && <h1 id="confirmacion">Complete todos los campos para enviar</h1>}
        </>
    )
}

export default ChargeJob;