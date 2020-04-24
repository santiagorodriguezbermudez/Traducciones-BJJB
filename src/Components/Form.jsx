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
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Box from '@material-ui/core/Box';

function Form (props) {



    return (
        <Container id="form-section" fluid>
            <Navigation/>
            <Hero id="container-header"/>
            <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={0}
                p={0}
                style={{ width: '30%', height: '100%', margin: "2rem auto", padding:'1rem'  }}
            >
        
                <Container className = 'form'>

                    <h6>Si estas interesado, déjanos tus datos y nos pondremos en contacto.</h6>
                    <hr/>
                    <FormControl required className='form-element' fullWidth margin="normal">
                        <InputLabel htmlFor="nombre">Nombre Completo</InputLabel>
                        <Input
                            id="nombre"
                            startAdornment = {
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl required margin="normal" className='form-element' fullWidth>
                        <InputLabel htmlFor="nombre">Email</InputLabel>
                        <Input
                            id="nombre"
                            startAdornment = {
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <TextField
                        required
                        id="comentario-contacto"
                        label="Comentarios"
                        placeholder="Deja tus comentarios acá"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        multiline
                        rows={4}
                    />

                    <Button style={{ backgroundColor: "#00a8cc"}}className = 'form-button' variant="contained" color='primary' endIcon={<SendIcon />}>
                        Enviar información
                    </Button>

                </Container>
            </Box>
            <Footer id='footer'/>

        </Container>
    )
}

export default Form;