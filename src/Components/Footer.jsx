import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Footer(props) {
    return (
        <Container id={props.id}>
            <Row>
                <Col>
                    <a  href="mailto:jbermudezc@yahoo.com"><i className="icons far fa-envelope-open fa-2x"></i>jbermudezc@yahoo.com</a><br></br>    
                    <a href="https://www.linkedin.com/in/jorge-berm%C3%BAdez-celin/" className = ""><i className="icons fab fa-linkedin fa-2x"></i>BJJB - Traducciones</a>
                    <p>Copyright 2020</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;