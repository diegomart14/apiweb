import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import Navbar from './NavBar';
import { Link } from "react-router-dom";
import File from './File';
import Footer from './Footer';

function Home() {
  return (
    <div className="Container">
        <Navbar></Navbar>
        <div className="Container">
            <Breadcrumb>
                <Breadcrumb.Item><Link to='/'>Inicio</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to='/'>Servicio</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>
                    Archivos
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <File></File>
        <Footer></Footer>
    </div>
  );
}

export default Home;