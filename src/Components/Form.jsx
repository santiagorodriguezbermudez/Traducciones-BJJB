import React from 'react';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';
import Navigation from './Nav';
import Hero from './Hero';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';

function Form (props) {


    return (
        <Container id="form-section" fluid>
            <Navigation/>
            <Hero id="container-header"/>
            
            <Container>

                <h3>Si estas interesado, déjanos tus datos y nos pondremos en contacto</h3>

                <FormControl fullWidth className = 'form'>
                    <InputLabel htmlFor="nombre">Nombre</InputLabel>
                    <Input
                        id="nombre"
                        startAdornment = {
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />

                </FormControl>
            
            </Container>

            <Footer id='footer'/>

        </Container>
    )
}

export default Form;