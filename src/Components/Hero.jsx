import React from 'react';
import Button from 'react-bootstrap/Button';
import ReactRotatingText from 'react-rotating-text';

function Hero(props) {

    const arrayText = ["ceremonias", 'eventos', 'documentos', 'certificados', 'contratos']

    return (
        <div id={props.id}>      
        <h1 className='titular'><strong>Traduce tus {" "}</strong><ReactRotatingText items={arrayText}/></h1>
        <h3 className='sub-titular'>Construimos puentes de comunicación</h3>
        <Button variant="info" href="/contacto" >Cotiza ya!</Button>
        </div>
    )

    
}

export default Hero;