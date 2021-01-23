import React from 'react';
import Navbar from './NavBar';
import Carousel from './Carousell';
import Footer from './Footer';

function Home() {
  return (
    <div className="Container">
        <Navbar></Navbar>
        <section id='imagen'>
          <div class="contenido">
            <h3>Utiliza los diferente tipos de Api's</h3>
          </div>
        </section>
        <Carousel></Carousel>
        <Footer></Footer>
    </div>
  );
}

export default Home;