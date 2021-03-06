import React from 'react';
import CardServicio from './CardServicio'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Services (props) {
    
    const servicios = [
        {
            logo: <i className="servicios-iconos fas fa-pen fa-5x"></i>,
            titulo: "Traducciones Escritas",
            parrafo: [
                'Traducciones oficiales de documentos con sello, firma y apostilla.',
                'Traducción escrita de todo tipo de documentos: contratos, escrituras públicas, registros civiles, diplomas de grado, certificados de notas, manuales de equipos, informes, estados financieros, entre otros.',
                'Traducción de documentos para la obtención y renovación del Registro Único de Proponentes - RUP.'
            ]
        },
        {
            logo: <i class="servicios-iconos fas fa-headphones-alt fa-5x"></i>,
            titulo: "Traducciones Simultáneas",
            parrafo: [
                'Traducción en línea de webinars a través de plataformas como ZOOM.',
                'Traducción simultánea de cualquier tipo de exposición: presentaciones en público, reuniones privadas, conversaciones, recorridos por edificaciones, acompañamiento en ferias internacionales y viajes de negocio, entre otras actividades.',
                'Traducción consecutiva de intervenciones personales: matrimonios civiles, audiencias, declaraciones juramentadas, exposiciones, cursos, etc.'
            ]
        }
    ]
    

    return (
        
            <Container id={props.id} >
                <Row>
                    <p className = 'text-white text-center p-5'>
                    Con más de 30 años de experiencia, ofrecemos servicios de traducción escrita e interpretación entre los idiomas español e inglés. Nuestras traducciones son de alta confiabilidad, precisión, calidad y naturalidad. Contamos con un equipo de traductores altamente calificado y comprometido para atender todas sus necesidades de traducción de manera precisa y oportuna. <br></br><br></br>Somos miembros de la American Translators Association (ATA) y Asociación Nacional de Traductores e Intérpretes Oficiales de Colombia (ANATI-O).
                    </p>
                </Row>
                
                <Row>
                    {servicios.map((servicio, index) => (
                        <Col key={index} sm={true} md={true} lg={true} className='servicios-col'>
                            <CardServicio 
                                logo={servicio.logo}
                                titulo={servicio.titulo}
                                parrafo={servicio.parrafo}
                                key={index}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
    )
}

export default Services;