import React, { useState, useEffect } from 'react';
import HeaderToInicio from './components/headerToInicio'; 
import Button from 'react-bootstrap/Button';   
import './styles/formEmp.css';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';

const FormEmp = () => {

    const [nombreEmp, setNombreEmp] = useState('');
    const [cuit, setCuit] = useState('');
    const [provincia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [condBotonEnviar, setCondBotonEnviar] = useState(true);

    const history = useHistory();

    const sendFormAndRedirectToFormJob = () =>{
        submitData()
        redirectToFormJob()
    }

    const submitData = () => {
        Axios.post("http://localhost:3001/api/insertEmp",
            {nombreEmp: nombreEmp, cuit: cuit, provincia: provincia, localidad: localidad, direccion: direccion, telefono: telefono, email: email}).then(() => {
                alert("successful");
        });
    }

    const redirectToFormJob = () => {
        history.push("/chargeJob")
    }

    useEffect(() => {
        if(nombreEmp.length && cuit.length && provincia.length && localidad.length && direccion.length && telefono.length && email.length){
            setCondBotonEnviar(false)
        }else(setCondBotonEnviar(true))
    },[nombreEmp, cuit, provincia, localidad, direccion, telefono, email]);


    return (<>
        <HeaderToInicio/>
        <form>
            <div>
                <label>Nombre Empresa</label>
                    <input id="nameEmpresa" name="nombreEmpresa" type="text" placeholder="ingrese el nombre de la empresa" onChange={(e)=>{setNombreEmp(e.target.value)}} />
            </div>
            <div>
                <label>CUIT</label>
                    <input name="cuit" type="text" placeholder="ingrese cuit" onChange={(e)=>{setCuit(e.target.value)}}/>
            </div>
            <div>
                <label>Provincia</label>
                    <input name="provincia" type="text" placeholder="ingrese provincia" onChange={(e)=>{setProvincia(e.target.value)}} />
            </div>
            <div>
                <label>Localidad</label>
                    <input name="localidad" type="text" placeholder="ingrese localidad" onChange={(e)=>{setLocalidad(e.target.value)}} />
            </div>
            <div>
                <label>Dirección</label>
                    <input name="direccion" type="text" placeholder="ingrese calle y numero" onChange={(e)=>{setDireccion(e.target.value)}} />
            </div>
            <div>
                <label>Telefono</label>
                    <input name="telefono" type="text" placeholder="ingrese su telefono" onChange={(e)=>{setTelefono(e.target.value)}} />
            </div>
            <div>
                <label>Email</label>
                    <input name="email" type="email" placeholder="ingrese su email" onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div>
                <Button variant="secondary" onClick={sendFormAndRedirectToFormJob} disabled={condBotonEnviar} >Enviar</Button>
            </div>            
        </form>
        </>
    )
}

export default FormEmp;