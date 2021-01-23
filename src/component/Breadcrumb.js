import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="Container">
            <Breadcrumb>
                <Breadcrumb.Item><Link to='/'>Inicio</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>
                    Documentación
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
}

export default Navbar;