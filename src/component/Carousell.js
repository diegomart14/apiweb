import React from 'react';
import {Carousel} from 'react-bootstrap'; 
import '../assets/css/styles.css';
import transac from '../assets/images/transac.png';
import bd from '../assets/images/bd.png';
import arch from '../assets/images/arch.png';
import maps from '../assets/images/maps.png';

function Carousell() {
  return (
    <div className="Container">
      <section>
      <Carousel>
        <Carousel.Item>
          <img id='place'
            src={arch}
            alt="First slide"
            title='Archivos'
          />
          <img id='place'
            src={bd}
            alt="First slide"
            title='Datos en la nube'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img id='place'
            src={transac}
            alt="Third slide"
            title='Transacciones'
          />
          <img id='place'
            src={maps}
            alt="Third slide"
            title='Mapas'
          />
        </Carousel.Item>
      </Carousel>
      </section>
    </div>
  );
}

export default Carousell;