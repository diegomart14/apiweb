import React from 'react';
import {Card,Button,Breadcrumb} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../assets/css/cards.css';
import Navbar from './NavBar';
import Footer from './Footer';


function Cards() {
    return (
        <div className="Container">
            <Navbar></Navbar>
            <div className="Container">
            <Breadcrumb>
                <Breadcrumb.Item><Link to='/'>Inicio</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to='/Service'>Servicio</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>
                    Tarjetas
                </Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <div id='position'>
                <p id='text'>
                    Tarjetas
                </p>
                <div id='caja'>
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">API's Visa</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Pagos Online</Card.Subtitle>
                        <Card.Text>
                            API's de videos. Esta API permite la subida y la bajada de ....
                            Disponibles a empresas, bancos, apps
                        </Card.Text>
                        <Button variant="outline-primary" className="text-center" size="lg"><Link to='/CardsItem'>Ver API</Link></Button>
                    </Card.Body>
                </Card>
                </div>
                <div id='caja'>
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">API's Visa</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Pagos Online</Card.Subtitle>
                        <Card.Text>
                            API's de videos. Esta API permite la subida y la bajada de ....
                            Disponibles a empresas, bancos, apps
                        </Card.Text>
                        <Button variant="outline-primary" className="text-center" size="lg"><Link to='/CardsItem'>Ver API</Link></Button>
                    </Card.Body>
                </Card>
                </div>
                <div id='caja'>
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">API's Visa</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Pagos Online</Card.Subtitle>
                        <Card.Text>
                            API's de videos. Esta API permite la subida y la bajada de ....
                            Disponibles a empresas, bancos, apps
                        </Card.Text>
                        <Button variant="outline-primary" className="text-center" size="lg"><Link to='/CardsItem'>Ver API</Link></Button>
                    </Card.Body>
                </Card>
                </div>
                <div id='caja'>
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">API's Visa</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Pagos Online</Card.Subtitle>
                        <Card.Text>
                            API's de videos. Esta API permite la subida y la bajada de ....
                            Disponibles a empresas, bancos, apps
                        </Card.Text>
                        <Button variant="outline-primary" className="text-center" size="lg"><Link to='/CardsItem'>Ver API</Link></Button>
                    </Card.Body>
                </Card>
                </div>
                <div id='caja'>
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">API's Visa</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Pagos Online</Card.Subtitle>
                        <Card.Text>
                            API's de videos. Esta API permite la subida y la bajada de ....
                            Disponibles a empresas, bancos, apps
                        </Card.Text>
                        <Button variant="outline-primary" className="text-center" size="lg"><Link to='/CardsItem'>Ver API</Link></Button>
                    </Card.Body>
                </Card>
                </div>
                <div id='caja'>
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">API's Visa</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Pagos Online</Card.Subtitle>
                        <Card.Text>
                            API's de videos. Esta API permite la subida y la bajada de ....
                            Disponibles a empresas, bancos, apps
                        </Card.Text>
                        <Button variant="outline-primary" className="text-center" size="lg"><Link to='/CardsItem'>Ver API</Link></Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Cards;