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
    const [advertencia, setAdvertencia] = useState(true)

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
            setCondBotonEnviar(false);
            setAdvertencia(false)
        }else{
            setCondBotonEnviar(true)
            setAdvertencia(true)
        }
    },[nombreEmp, cuit, provincia, localidad, direccion, telefono, email]);


    return (<>
        <HeaderToInicio/>
        <form>
            <div className="formInput">
                <label id="labels">Nombre Empresa</label>
                    <input id="nameEmpresa" name="nombreEmpresa" type="text" placeholder="ingrese el nombre de la empresa" onChange={(e)=>{setNombreEmp(e.target.value)}} />
            </div>
            <div className="formInput">
                <label id="labels">CUIT</label>
                    <input name="cuit" type="text" placeholder="ingrese cuit" onChange={(e)=>{setCuit(e.target.value)}}/>
            </div>
            <div className="formInput">
                <label id="labels">Provincia</label>
                    <input name="provincia" type="text" placeholder="ingrese provincia" onChange={(e)=>{setProvincia(e.target.value)}} />
            </div>
            <div className="formInput">
                <label id="labels">Localidad</label>
                    <input name="localidad" type="text" placeholder="ingrese localidad" onChange={(e)=>{setLocalidad(e.target.value)}} />
            </div>
            <div className="formInput">
                <label id="labels">Dirección</label>
                    <input name="direccion" type="text" placeholder="ingrese calle y numero" onChange={(e)=>{setDireccion(e.target.value)}} />
            </div>
            <div className="formInput">
                <label id="labels">Telefono</label>
                    <input name="telefono" type="text" placeholder="ingrese su telefono" onChange={(e)=>{setTelefono(e.target.value)}} />
            </div>
            <div className="formInput">
                <label id="labels">Email</label>
                    <input name="email" type="email" placeholder="ingrese su email" onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className="botonEnviar">
                <Button variant="secondary" onClick={sendFormAndRedirectToFormJob} disabled={condBotonEnviar} >Enviar</Button>
            </div>            
        </form>
        {advertencia && <h1 id="confirmacion">Complete todos los campos para enviar</h1>}
        </>
    )
}

export default FormEmp;