import React from 'react';
import Team from './Team';
import CountUp from 'react-countup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function About (props) {

    const testimonios = [
        {
            texto: "El ingeniero Jorge Bermúdez Celín nos viene colaborando desde junio de 2015 y durante ese tiempo su trabajo se ha caracterizado por ser de alta calidad y siempre a tiempo, atendiendo nuestras exigencias. Los trabajos realizados por el ingeniero Bermúdez varían desde comunicaciones informales hasta documentos y contratos de alta complejidad en sus contenidos.",
            firma: [
                'Paola Pérez M.',
                'Representante Legal',
                'Royal Haskoning DHV - Colombia.'
            ]
        },
        {
            texto: "Mr. Bermúdez has translated for us several technical reports related to ports and transportation planning since 2012. His work is highly dependable and excellent quality.",
            firma: [
                'Bart Winder',
                'Senior Maritime Consultant',
                'Port Consultants of Rotterdam.'
            ]
        },
        {
            texto: "Jorge Bermúdez Celín ha realizado para nosotros de manera satisfactoria trabajos de traducción oficial del inglés al español de documentos técnicos y comerciales propios de nuestra actividad desde el 2008.",
            firma: [
                'Carlos Sarmiento Jurado',
                'Director de Nuevos Productos',
                'TCL.'
            ]
        },
        {
            texto: "Jorge celebrated my marriage ceremony and translated parts of the ceremony since both of our families come from different language speaking countries. His job was great and added a personal touch to his words. I will always remember this special moment of our lives!",
            firma: [
                'Cynthia Deignan.'
            ]
        },
        {
            texto: "Jorge Bermúdez Celín presta servicios de traducción e interpretación en nuestra empresa desde hace aproximadamente cinco años. Durante ese tiempo ha demostrado seriedad y cumplimiento con sus obligaciones.",
            firma: [
                'Carlos Rafael Casadiego',
                'Gerente',
                'Bastidas TV.'
            ]
        },
        {
            texto: "Jorge Bermúdez Celin realizó la traducción escrita del inglés al español del documento \"Parrish & Co. (1920) Parrish & Co. Report. Des Moines: Floyd Weirick, R.”, el cual dió origen al barrio El Prado de Barranquilla. El trabajo realizado fue de excelente calidad, dada su experiencia profesional como Planificador Urbano y Traductor Oficial, una coincidencia afortunada para nosotros en la Universidad del Norte.",
            firma: [
                'Yalmar Vargas Tovar',
                'Profesor Tiempo Completo',
                'Escuela de Arquitectura Urbanismo y Diseño Universidad del Norte.'
            ]
        },
        {
            texto: "Jorge Bermúdez Celín nos ha prestado servicios de traducción simultánea y consecutiva desde el 2019 en diferentes cursos de capacitación dictados en las ciudades de Barranquilla, Santa Marta y Cartagena. Los cursos dictados están relacionados con temas de desarrollo y regionalización portuaria, gestión de cadenas de suministro, logística y transporte fluvial, y operación  de equipos portuarios. El desempeño del señor Bermúdez ha sido excelente, y esta calificación ha sido otorgada no sólo por nosotros, sino por instructores del SENA también.",
            firma: [
                'Silvina Pereira Marques',
                'Area Maneger Latinoamérica',
                ' STC International.'
            ]
        },
        {
            texto: "When I was married in Santo Domingo in 1998, Jorge assisted me first by translating a printed program that I had prepared in English. The program included lyrics to songs that presented a unique challenge to maintain the spirit of the music and relevance to the wedding.  Then as Best Man at the wedding, Jorge ably provided live translation for speeches and other interactions between guests, many of whom spoke only English or Spanish.  Both his editorial and live translations were excellent and contributed significantly to the bi-lingual wedding.",
            firma: [
                ' Mark C. Walker.'
            ]
        }
    ]

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
            
            <Row className = 'mt-2'>
                {testimonios.map((testimonio, index) => (
                    <Col key={index} sm={true} md={true} lg={true} className='testimonios-col'>
                        <div>
                            <p className='text-center'>{testimonio.texto}</p>
                            {testimonio.firma.map((firma,index) => (<h6 className='text-center font-weight-bold' key={index}>{firma}</h6>))}
                        </div>
                    </Col>
                ))}
            </Row>

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