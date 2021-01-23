import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Col, Row, Tab,Breadcrumb} from 'react-bootstrap';
import "../assets/css/document.css";
import Navbar from './NavBar';
import Footer from './Footer';

function CardsItem() {
    return (
        <div className="Container">
            <Navbar></Navbar>
            <div className="Container">
            <Breadcrumb>
                <Breadcrumb.Item><Link to='/'>Inicio</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to='/Service'>Servicio</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to='/Service'>Tarjetas</Link></Breadcrumb.Item>
                <Breadcrumb.Item active>
                    Telmex
                </Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <section id='documentConten'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Pago Cuenta</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Documentación</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Integrar a Proyecto</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Ejemplos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Errore comunes</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <p>
                                    <p>PRIMEROS PASOS</p>
                                    Primero descubrí nuestro catálogo para saber qué APIs tenemos disponibles para vos. En nuestro catálogo podes ver descripciones de las funcionalidades así como documentación técnica de cada API.
                                    Primero descubrí nuestro catálogo para saber qué APIs tenemos disponibles para vos. En nuestro catálogo podes ver descripciones de las funcionalidades así como documentación técnica de cada API.
                                    Primero descubrí nuestro catálogo para saber qué APIs tenemos disponibles para vos. En nuestro catálogo podes ver descripciones de las funcionalidades así como documentación técnica de cada API.
                                    Primero descubrí nuestro catálogo para saber qué APIs tenemos disponibles para vos. En nuestro catálogo podes ver descripciones de las funcionalidades así como documentación técnica de cada API.
                                    Primero descubrí nuestro catálogo para saber qué APIs tenemos disponibles para vos. En nuestro catálogo podes ver descripciones de las funcionalidades así como documentación técnica de cada API.
                                    Primero descubrí nuestro catálogo para saber qué APIs tenemos disponibles para vos. En nuestro catálogo podes ver descripciones de las funcionalidades así como documentación técnica de cada API.
                                    Primero descubrí nuestro catálogo para saber qué APIs tenemos disponibles para vos. En nuestro catálogo podes ver descripciones de las funcionalidades así como documentación técnica de cada API.
                                    Primero descubrí nuestro catálogo para saber qué APIs tenemos disponibles para vos. En nuestro catálogo podes ver descripciones de las funcionalidades así como documentación técnica de cada API.
                                    Primero descubrí nuestro catálogo para saber qué APIs tenemos disponibles para vos. En nuestro catálogo podes ver descripciones de las funcionalidades así como documentación técnica de cada API.
                                    Primero descubrí nuestro catálogo para saber qué APIs tenemos disponibles para vos. En nuestro catálogo podes ver descripciones de las funcionalidades así como documentación técnica de cada API.
                                </p> 
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p>
                                    <p>
                                        ¿Cómo me puedo registrar?
                                    </p>
                                    Registrarse es fácil y rápido. Desde la página de inicio del ApiWeb, Sólo tenés que hacer clic en el botón 'registrar' y completa los campos de correo electrónico, ingresar una contraseña, aceptar los términos y condiciones de uso y presionar el botón 'Confirmar Cuenta', al hacerlo recibirás un link de activación de la cuenta en el e-mail que ingresaste, al presionar el link tu cuenta quedará activada y podrás realizar login en ApiWeb. En caso de no recibir el enlace en la bandeja de entrada de tu correo, recordá revisar la casilla de SPAM. El enlace de activación que recibió tiene una validez de 24 horas.
                                </p> 
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p>
                                1.- Para poder usar una api saliente, tenés que generar un alta de subscripción previamente. Dentro del menu de Operaciones de la api, podés encontrar en la sección Notification Subscriptions el metodo POST para generar el alta asi como métodos para modificar o borrar la subscripción (PATCH / DELETE). En el alta de subscripción tenés que especificar el endpoint que creaste siguiendo los lineamientos de la definición para servicios salientes del Portal que podés encontrar en el menú Operaciones de la Api dentro de la sección Outbound Method. <br></br>
                                2.- Una vez generada la subscripción para la api saliente, podés ejecutar una prueba siguiendo la definición en la sección de Operaciones de la API de la operación POST / test_notifications probando un testcase dentro de los que se ofrecen en el menú de Datos de Prueba de la API .<br></br>
                                3.- Al ejecutar la prueba, el dispatcher enviará el mensaje asociado al caso de prueba ejecutado hacia el endpoint que creaste para subscribirte.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <p>
                                1.- Para poder usar una api saliente, tenés que generar un alta de subscripción previamente. Dentro del menu de Operaciones de la api, podés encontrar en la sección Notification Subscriptions el metodo POST para generar el alta asi como métodos para modificar o borrar la subscripción (PATCH / DELETE). En el alta de subscripción tenés que especificar el endpoint que creaste siguiendo los lineamientos de la definición para servicios salientes del Portal que podés encontrar en el menú Operaciones de la Api dentro de la sección Outbound Method. <br></br>
                                2.- Una vez generada la subscripción para la api saliente, podés ejecutar una prueba siguiendo la definición en la sección de Operaciones de la API de la operación POST / test_notifications probando un testcase dentro de los que se ofrecen en el menú de Datos de Prueba de la API .<br></br>
                                3.- Al ejecutar la prueba, el dispatcher enviará el mensaje asociado al caso de prueba ejecutado hacia el endpoint que creaste para subscribirte.<br></br>
                                4.- Para poder usar una api saliente, tenés que generar un alta de subscripción previamente. Dentro del menu de Operaciones de la api, podés encontrar en la sección Notification Subscriptions el metodo POST para generar el alta asi como métodos para modificar o borrar la subscripción (PATCH / DELETE). En el alta de subscripción tenés que especificar el endpoint que creaste siguiendo los lineamientos de la definición para servicios salientes del Portal que podés encontrar en el menú Operaciones de la Api dentro de la sección Outbound Method. <br></br>
                                5.- Una vez generada la subscripción para la api saliente, podés ejecutar una prueba siguiendo la definición en la sección de Operaciones de la API de la operación POST / test_notifications probando un testcase dentro de los que se ofrecen en el menú de Datos de Prueba de la API .<br></br>
                                6.- Al ejecutar la prueba, el dispatcher enviará el mensaje asociado al caso de prueba ejecutado hacia el endpoint que creaste para subscribirte.
                                </p> 
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <p>
                                1.- Para poder usar una api saliente, tenés que generar un alta de subscripción previamente. Dentro del menu de Operaciones de la api, podés encontrar en la sección Notification Subscriptions el metodo POST para generar el alta asi como métodos para modificar o borrar la subscripción (PATCH / DELETE). En el alta de subscripción tenés que especificar el endpoint que creaste siguiendo los lineamientos de la definición para servicios salientes del Portal que podés encontrar en el menú Operaciones de la Api dentro de la sección Outbound Method. <br></br>
                                2.- Una vez generada la subscripción para la api saliente, podés ejecutar una prueba siguiendo la definición en la sección de Operaciones de la API de la operación POST / test_notifications probando un testcase dentro de los que se ofrecen en el menú de Datos de Prueba de la API .<br></br>
                                3.- Al ejecutar la prueba, el dispatcher enviará el mensaje asociado al caso de prueba ejecutado hacia el endpoint que creaste para subscribirte.<br></br>
                                4.- Para poder usar una api saliente, tenés que generar un alta de subscripción previamente. Dentro del menu de Operaciones de la api, podés encontrar en la sección Notification Subscriptions el metodo POST para generar el alta asi como métodos para modificar o borrar la subscripción (PATCH / DELETE). En el alta de subscripción tenés que especificar el endpoint que creaste siguiendo los lineamientos de la definición para servicios salientes del Portal que podés encontrar en el menú Operaciones de la Api dentro de la sección Outbound Method. <br></br>
                                5.- Una vez generada la subscripción para la api saliente, podés ejecutar una prueba siguiendo la definición en la sección de Operaciones de la API de la operación POST / test_notifications probando un testcase dentro de los que se ofrecen en el menú de Datos de Prueba de la API .<br></br>
                                6.- Al ejecutar la prueba, el dispatcher enviará el mensaje asociado al caso de prueba ejecutado hacia el endpoint que creaste para subscribirte.
                                </p> 
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default CardsItem;