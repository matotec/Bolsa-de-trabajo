import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';
import HeaderToInicio from './components/headerToInicio';    

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
          <label>Apellido</label>
            <input name="apellido" type="text" placeholder="ingrese su apellido"  />
        </div>
      </form>
      </>
    
  );
}

export default FormAlumn;