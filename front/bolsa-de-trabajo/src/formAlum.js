import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';
import HeaderToInicio from './components/headerToInicio';    
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form'
import './styles/formAlum.css';


const FormAlumn = () => {
    
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
   
  return (<>      
    <HeaderToInicio/>
      <form>
        <div>
          <label>Nombre</label>
            <input name="nombre" type="text" placeholder="ingrese su nombre"  />
        </div>
        <div>
          <label>Apellidos</label>
            <input name="apellido" type="text" placeholder="ingrese su apellido"  />
        </div>
        <div>
            <label>Tipo</label>
                <div>
                    <label>Dni</label>
                    <input type="checkbox" value="" id="checkbox" name="dni"/>
                    <label>Pasaporte</label>
                    <input type="checkbox" value="" id="checkbox" name="dni"/>
                    <label>Cedula</label>
                    <input type="checkbox" value="" id="checkbox" name="dni"/>
                </div>     
        </div>
        <div>
            <label>Fecha De Nacimiento</label>
            <input type="date" name="fechaNacimiento"></input>
        </div>
        <div>
        <label>Email</label>
            <input name="email" type="email" placeholder="ingrese su email"  />
        </div>
        <div>
          <label>Carrera</label>
            <input name="carrera" type="text" placeholder="ingrese su carrera"  />
        </div>
        <div>
            <label>Fecha De Inicio de Carrera</label>
            <input type="date" name="fechaDeInicioCarrera"></input>
        </div>
        <div>
        <Form.Label>Ingrese su experiencia</Form.Label>
        <Form.Control as="textarea" rows={4} id="tamañoTextArea"/>
        </div>
        <div>
        <Button variant="secondary" >Enviar</Button>
        </div>
      </form>
      </>
    
  );
}

export default FormAlumn;