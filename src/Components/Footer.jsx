import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Footer(props) {
    return (
        <Container id={props.id}>
            <Row>
                <Col sm={12}>
                    <a  href="mailto:jbermudezc@yahoo.com "><i className="icons far fa-envelope-open fa-2x"></i></a>    
                    <p className="email-contacto">jbermudezc@yahoo.com</p>
                </Col>
                <Col sm={12}>
                    <a href="https://www.linkedin.com/in/jorge-berm%C3%BAdez-celin/"><i className="icons fab fa-linkedin fa-2x"></i></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;