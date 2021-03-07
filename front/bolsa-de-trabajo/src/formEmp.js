import React, { useState, useEffect } from 'react';
import HeaderToInicio from './components/headerToInicio'; 
import Button from 'react-bootstrap/Button';   
import './styles/formEmp.css';

const FormEmp = () => {
    return (<>
        <HeaderToInicio/>
        <form>
            <div>
                <label>Nombre Empresa</label>
                    <input id="nameEmpresa" name="nombreEmpresa" type="text" placeholder="ingrese el nombre de la empresa"  />
            </div>
            <div>
                <label>CUIT</label>
                    <input name="cuit" type="text" placeholder="ingrese cuit"/>
            </div>
            <div>
                <label>Provincia</label>
                    <input name="provincia" type="text" placeholder="ingrese provincia"/>
            </div>
            <div>
                <label>Localidad</label>
                    <input name="localidad" type="text" placeholder="ingrese localidad"/>
            </div>
            <div>
                <label>Dirección</label>
                    <input name="direccion" type="text" placeholder="ingrese calle y numero"/>
            </div>
            <div>
                <label>Telefono</label>
                    <input name="telefono" type="text" placeholder="ingrese telefono"/>
            </div>
            <div>
                <label>Email</label>
                    <input name="email" type="email" placeholder="ingrese su email"  />
            </div>
            <div>
                <Button variant="secondary" >Enviar</Button>
            </div>
        </form>
        </>
    )
}

export default FormEmp;