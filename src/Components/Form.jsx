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
import Modal from '@material-ui/core/Modal';

function Form (props) {

    //const [formSubmitted, sendForm] = React.useState(false)
    const [message, updateMessage] = React.useState('')
    const [nombre, updateName] = React.useState('')
    const [email, updateEmail] = React.useState('')
    const [openModal, updateModal] = React.useState(false)

    const handleClose = () => {updateModal(false)}; 
    
    function handleChange(event) {
        const {name, value} = event.target;

        switch (name) {
            case 'nombre':
                updateName(value);
                break;
            case 'email':
                updateEmail(value);
                break;
            case 'comentario':
                updateMessage(value)   
                break;
            default:
                break;

        }

    };


    function handleSubmit(event) {
        console.log(event)
        event.preventDefault()

        const {
                REACT_APP_EMAILJS_TEMPLATEID: template,
                REACT_APP_EMAILJS_USERID: user,
            } = props.env;

        const templateParams = { 
            from_name: nombre, 
            message: message,
            email: email
        }
        console.log(template, user)
        sendEmail(template, templateParams, user)
    }

    function sendEmail(templateId, templateParams, user) {
  
        window.emailjs.send('default_service', templateId, templateParams, user)
        .then(res => {
            updateName('');
            updateEmail('');
            updateMessage('');
            updateModal(true);
        })
        .catch(err => console.error('Tenemos errores. El error es: ', err));
    }

    const modalBody = (
        
        <Box
        boxShadow={5}
        bgcolor="background.paper"
        style={{ width: '30%', height: '10%', margin: "15rem auto", padding:'1rem', minWidth: '20rem', maxWidth: '30rem'}}
        >
            <p>Gracias! Pronto nos comunicaremos contigo.</p>
        </Box>
    )    

    return (
        <Container id="form-section" fluid>
            <Navigation/>
            <Hero id="container-header"/>
            <Box
                boxShadow={5}
                bgcolor="background.paper"
                style={{ width: '30%', height: '100%', margin: "2rem auto", padding:'1rem', minWidth: '20rem', maxWidth: '30rem' }}
            >
        
                <Container>
                    <form className = 'form' onSubmit={handleSubmit}>
                    
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
                                onChange ={handleChange}
                                value = {nombre}
                                name='nombre'
                            />
                        </FormControl>
                        <FormControl required margin="normal" className='form-element' fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                id="email"
                                startAdornment = {
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                }
                                onChange ={handleChange}
                                value = {email}
                                name='email'
                                type="email"

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
                            onChange ={handleChange}
                            value= {message}
                            name='comentario'
                        />

                        <Button type='submit' style={{ backgroundColor: "#00a8cc"}}className = 'form-button' variant="contained" color='primary' endIcon={<SendIcon />}>
                            Enviar información
                        </Button>
                    </form>
                </Container>
            </Box>

            <Modal
                open={openModal}
                onClose = {handleClose}            
            >
                {modalBody}
            </Modal>
            <Footer id='footer'/>

        </Container>
    )
}

export default Form;