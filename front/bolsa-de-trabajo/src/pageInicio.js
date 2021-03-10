import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import './styles/pageInicio.css';
import logoUnaj from './images/logoUnaj.jpg';
import {useHistory} from 'react-router-dom';

const PageInicio = () => {
    const history = useHistory();

    const redirectToChargeCv = () => {
        history.push("/formAlum")
    }

    const redirectToChargeJob = () => {
        history.push("/formEmp")
    }

    const redirectToSearchJob = () => {
        history.push("/searchAlum")
    }

    const redirectToSearchCandidate = () => {
        history.push("/searchEmp")
    }

    const redirectToLogin = () => {
        history.push("/login")
    }

    return (<>
    <Navbar bg="primary" variant="dark">
     <Nav variant="pills" activeKey="1">
      <NavDropdown title="Soy Estudiante" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1" onClick={redirectToChargeCv}>Cargar CV</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" onClick={redirectToSearchJob}>Buscar empleos</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Soy Empresa" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1" onClick={redirectToChargeJob}>Cargar oferta laboral</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" onClick={redirectToSearchCandidate}>Buscar postulantes</NavDropdown.Item>
      </NavDropdown>
      <Button variant="outline-light" onClick={redirectToLogin}>Login</Button>
     </Nav>
    </Navbar>

    <Col id="contenedorImg" md={4} xl={3} lg={5} className="justify-content-lg-center mx-auto" >
        <Image id="logoUnaj" src={logoUnaj} />
        <h1 class="texto">Portal de empleo</h1>
        <h1 class="texto">Universidad Nacional</h1>
        <h1 class="colorTexto texto">ARTURO JAURETCHE</h1>
    </Col>
        </>
    )
}

export default PageInicio;