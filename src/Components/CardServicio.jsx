import React from 'react';

function CardServicio (props) {
    return (
        <div>
            {props.logo}
            <h3 className='servicios-titulo'>{props.titulo}</h3>
            {props.parrafo.map(parrafo => (<p className='servicios-parrafo'>{parrafo}</p>))}
        </div>
    )
}

export default CardServicio;