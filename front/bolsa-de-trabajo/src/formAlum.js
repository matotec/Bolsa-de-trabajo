import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import HeaderToInicio from './components/headerToInicio';    
import Form from 'react-bootstrap/Form';
import './styles/formAlum.css';
import Axios from 'axios';
import Select from 'react-select';

const doc = [{label: "DNI"},{label: "Pasaporte"},{label: "Cedula"}]

const FormAlumn = () => {
    
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [tipoDoc, setTipoDoc] = useState('');
  const [nroDoc, setNroDoc] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [email, setEmail] = useState('');
  const [carrera, setCarrera] = useState('');
  const [fechaDeInicioCarrera, setFechaInicioCarrera] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [estadoDeAprobacion, setEstadoDeAprobacion] = useState("desaprobado");
  const [condBotonEnviar, setCondBotonEnviar] = useState(true);
   
  const submitData = () => {
      Axios.post("http://localhost:3001/api/insertAlum",
       {nombre: nombre, apellido: apellido, tipoDoc: tipoDoc, nroDoc: nroDoc, fechaNacimiento: fechaNacimiento, email: email, carrera: carrera, fechaDeInicioCarrera: fechaDeInicioCarrera, experiencia: experiencia, estadoDeAprobacion: estadoDeAprobacion}).then(() =>{
        alert("successful");
       });
  }

  const selectTipoDoc = (tipo) => {
    setTipoDoc(tipo);
  }
    
  useEffect(() => {
    if(nombre.length && apellido.length && tipoDoc.length && nroDoc.length && fechaNacimiento.length && email.length && carrera.length && fechaDeInicioCarrera.length && experiencia.length){
        setCondBotonEnviar(false)
    }else(setCondBotonEnviar(true))
},[nombre,apellido,tipoDoc, nroDoc, fechaNacimiento, email, carrera, fechaDeInicioCarrera, experiencia]);

  return (<>   
    <HeaderToInicio/>
      <form>
        <div>
          <label>Nombre</label>
            <input name="nombre" type="text" placeholder="ingrese su nombre" onChange={(e)=>{setNombre(e.target.value)}} />
        </div>
        <div>
          <label>Apellidos</label>
            <input name="apellido" type="text" placeholder="ingrese su apellido"  onChange={(e)=>{setApellido(e.target.value)}}/>
        </div>
        <div>
            Tipo y Nro Doc 
            <Select placeholder="Tipo de documento"
                options={doc}
                onChange={(value)=>{selectTipoDoc(value.label)}}
            />
            <input name="nroDoc" type="text" placeholder="ingrese su nro. de documento" onChange={(e)=>{setNroDoc(e.target.value)}} />
        </div>
        <div>
            <label>Fecha De Nacimiento</label>
            <input type="date" name="fechaNacimiento" onChange={(e)=>{setFechaNacimiento(e.target.value)}}></input>
        </div>
        <div>
        <label>Email</label>
            <input name="email" type="email" placeholder="ingrese su email" onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div>
          <label>Carrera</label>
            <input name="carrera" type="text" placeholder="ingrese su carrera" onChange={(e)=>{setCarrera(e.target.value)}} />
        </div>
        <div>
            <label>Fecha De Inicio de Carrera</label>
            <input type="date" name="fechaDeInicioCarrera" onChange={(e)=>{setFechaInicioCarrera(e.target.value)}}/>
        </div>
        <div>
        <Form.Label>Ingrese su experiencia</Form.Label>
        <Form.Control as="textarea" rows={4} id="tamañoTextArea" onChange={(e)=>{setExperiencia(e.target.value)}}/>
        </div>
        <div>
        <Button variant="secondary" onClick={submitData} disabled={condBotonEnviar} >Enviar</Button>
        </div>
      </form>
       
      </>
    
  );
}

export default FormAlumn;