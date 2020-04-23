import React from 'react';

function CardServicio (props) {
    return (
        <div>
            {props.logo}
            <h3 className='servicios-titulo'>{props.titulo}</h3>
            {props.parrafo.map((parrafo,index) => (<p className='servicios-parrafo' key={index}>{parrafo}</p>))}
        </div>
    )
}

export default CardServicio;