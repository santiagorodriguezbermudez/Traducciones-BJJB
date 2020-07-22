import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Team (props) {

    const teamMembers = [
        {
            perfil: "img/Perfil-JB.jpg",
            nombre: "Jorge Bermudez",
            titulo: 'Gerente General',
            descripción: 'Traductor e intérprete Oficial (Español-Inglés) registrado ante el Ministerio de Relaciones Exteriores de la República de Colombia. Ingeniero Industrial egresado de la Universidad de los Andes con Maestría en Planificación Urbana de New York University.',
            linkLinkedIn: "https://www.linkedin.com/in/jorge-bermudez-celin/"              
        },
        {
            perfil: "img/Perfil-KM.png",
            nombre: "Karol Méndez Oñate",
            titulo: 'Traductor',
            descripción: 'Traductora e Intérprete Certificada en Adelphi University. Comunicadora y Especialista en Relaciones Públicas egresada de Florida International University',
            linkLinkedIn: "https://www.linkedin.com/in/karolmendez/"
        },
        {
            perfil: "img/Perfil-MR.png",
            nombre: "Mateo Rodríguez Bermúdez",
            titulo: 'Traductor',
            descripción: 'Economista y Traductor egresado de la Universidad de los Andes, con Maestría en Desarrollo Social de University College of London',
            linkLinkedIn: "https://www.linkedin.com/in/mateo-rodriguez-bermudez/"
        },
        {
            perfil: "img/Perfil-SR.png",
            nombre: "Santiago Rodríguez Bermúdez",
            titulo: 'Traductor',
            descripción: 'Ingeniero Industrial y Traductor egresado de la Universidad de los Andes con énfasis en el sector de emprendimiento',
            linkLinkedIn: "https://www.linkedin.com/in/srba/"
        }
    ]

    function orderContainerLayout(member, index) {

        let imgOrder;
        let textOrder;
        
        if ((index + 1) % 2 === 0) {
            imgOrder = 1;
            textOrder = 2;
        } else {
            imgOrder = 2;
            textOrder = 1;
        }

        return (
            <Row key={index} className="equipo-perfil">
                <Col md={{span: 4, order:imgOrder}}>
                    <a href={member.linkLinkedIn}><img src={member.perfil} alt="perfil" className="equipo-img"></img></a>
                </Col>
                <Col md={{span:8, order:textOrder}} className="equipo-texto">
                    <h2>{member.nombre}</h2>
                    <h4>{member.titulo}</h4>
                    <p>{member.descripción}</p>
                    <a href={member.linkLinkedIn} className='equipo-texto'><i className="equipo-iconos fab fa-linkedin fa-2x"></i>  {member.linkLinkedIn}</a>
                </Col>
                
            </Row>
        )
    }

    return (

        <Container id={props.id}>
            <h2 className = 'equipo-titulo text-white text-center mb-2 text-larger'>Nuestro Equipo</h2>
            {teamMembers.map((member, index) => orderContainerLayout(member, index))}
        </Container>
        
    )
}

export default Team;