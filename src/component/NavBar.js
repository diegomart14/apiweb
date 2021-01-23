import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../assets/css/styles.css';

function NavBar() {
    return (
        <div className="Container">
            <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="white" className="mr-sm-2" variant="white">
                <ReactBootstrap.Navbar.Brand> <Link to='/'><span>A</span><span id='clor'>W</span>ApiWeb</Link></ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">
                        <ReactBootstrap.Nav.Link><Link to='/Document'>Documentación</Link></ReactBootstrap.Nav.Link>
                        <ReactBootstrap.NavDropdown title="Servicios" id="collasible-nav-dropdown">
                            <ReactBootstrap.NavDropdown.Item> <Link to='/Service'>Archivos</Link></ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item><Link to='/Maps'>Mapas</Link></ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item><Link to='/Payment'>Pago</Link></ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item><Link to='/Card'>Tarjetas</Link></ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item><Link to='/Services'>Servicios</Link></ReactBootstrap.NavDropdown.Item>
                        </ReactBootstrap.NavDropdown>
                    </ReactBootstrap.Nav>
                    <ReactBootstrap.Nav>
                        <ReactBootstrap.Nav.Link href="#deets">Iniciar Seción</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
                            Registrarse
                        </ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
        </div>
    );
}

export default NavBar;