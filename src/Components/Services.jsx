import React from 'react';
import CardServicio from './CardServicio'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Services (props) {
    
    const servicios = [
        {
            logo: <i className="servicios-iconos fas fa-pen fa-5x"></i>,
            titulo: "Traducción Escrita",
            parrafo: [
                'Traducciones oficiales con sello, firma y apostilla.',
                'Traducción de documentos para la obtención y renovación del Registro Único de Proponentes - RUP.',
                'Traducción escrita de todo tipo de documentos: contratos, escrituras públicas, certificados, registros públicos, diplomas de grado, certificados de notas, manuales de equipos, informes, estados financieros, entre otros.'
            ]
        },
        {
            logo: <i className="servicios-iconos fas fa-microphone fa-5x"></i>,
            titulo: "Traducción Simultánea",
            parrafo: [
                'Apostilla de documentos.',
                'Traducción consecutiva de intervenciones: matrimonios civiles, juicios, declaraciones juramentadas, expoisiones, etc.',
                'Traducción simultánea de cualquier tipo de exposición oral: presentaciones en público, reuniones privadas, conversaciones, recorridos por instalaciones, acompañamiento en ferias internacionales y viajes de negocio, entre otras actividades'
            ]
        }
    ]
    

    return (
        
            <Container id={props.id} >
                <Row>
                    <p className = 'text-white text-center p-5'>
                        Con más de 30 años de experiencia, ofrecemos servicios de traducción escrita e interpretación entre los idiomas español e inglés. Nuestras traducciones son de alta confiabilidad, precisión, calidad y naturalidad.  Contamos con un equipo de traductores altamente calificado y comprometido para atender todas sus necesidades de traducción de manera precisa y oportuna. Estamos registrados ante el Ministerio de Relaciones Exteriores de la República de Colombia, y varias embajadas, entre ellas: Estados Unidos y el Reino Unido. Somos miembros de la American Translators Association  - ATA - y Asociación Nacional de Traductores e Intérpretes Oficiales - ANATI-O Tenemos cobertura en las siguientes ciudades:  Barranquilla, Bogotá y Medellín.
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