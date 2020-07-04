import React from 'react';
import Team from './Team';
import CountUp from 'react-countup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function About (props) {
    return (
        <Container id={props.id}>
                <h2>NUESTROS CLIENTES</h2>
                <h4>Proyectos Completados: 
                    <CountUp
                        end={873}
                        duration={25}
                    />
                </h4>
                <p>Nuestros clientes son tanto empresas como personas naturales, privados como públicos, compañías locales como multinacionales y en varios sectores, tales como: ingeniería, tecnología, educación, planeación, medicina, salud, legal, financiero y mercadeo.</p>
            
            <Row>
                <Col sm={false} md={true} lg={true} className="about-logos-competencia">
                    <img className="about-client-logo" src="img/Empresa-1.png" alt="logo-1"/>
                    <img className="about-client-logo" src="img/Empresa-3.png" alt="logo-3"/>
                    <img className="about-client-logo" src="img/Empresa-2.png" alt="logo-2"/>
                    <img className="about-client-logo" src="img/Empresa-4.png" alt="logo-4"/>
                    <img className="about-client-logo" src="img/Empresa-5.png" alt="logo-5"/>
                    <img className="about-client-logo" src="img/Empresa-6.png" alt="logo-6"/>
                    <img className="about-client-logo" src="img/Empresa-7.png" alt="logo-7"/>
                    <img className="about-client-logo" src="img/Empresa-8.jpg" alt="logo-8"/>
                    <img className="about-client-logo" src="img/Empresa-9.png" alt="logo-9"/>
                    <img className="about-client-logo" src="img/Empresa-10.png" alt="logo-10"/>
                    <img className="about-client-logo" src="img/Empresa-11.png" alt="logo-11"/>
                    <img className="about-client-logo" src="img/Empresa-12.jpg" alt="logo-12"/>
                </Col>
            </Row>
            <Team id="equipo"/>        
        </Container>
    )
}

export default About;