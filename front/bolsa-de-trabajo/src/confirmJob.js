import React, { useState, useEffect } from 'react';
import HeaderToInicio from './components/headerToInicio'; 
import Alert from 'react-bootstrap/Alert'
import './styles/confirmJob.css';
import Col from 'react-bootstrap/Col';
import logoUnaj from './images/logoUnaj.jpg';
import Image from 'react-bootstrap/Image';

const ConfirmJob = () => {
    return (
        <>  
        <HeaderToInicio/>
            <h1 id="textoAviso">Tu oferta de empleo pronto sera aceptada, mientras tanto puede ver <Alert.Link href="http://localhost:3000/searchEmp">los postulantes</Alert.Link> que tenemos actualmente o <Alert.Link href="http://localhost:3000/chargeJob">cargar mas ofertas laborales</Alert.Link></h1>
            <Col id="contenedorImg" md={4} xl={3} lg={5} className="justify-content-lg-center mx-auto" >
                <Image id="logoUnaj" src={logoUnaj} />
                    <h1 class="texto">Portal de empleo</h1>
                    <h1 class="texto">Universidad Nacional</h1>
                    <h1 class="colorTexto texto">ARTURO JAURETCHE</h1>
            </Col>
        </>
    )
}

export default ConfirmJob;