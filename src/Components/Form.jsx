import React from 'react';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';
import Navigation from './Nav';
import Hero from './Hero';


function Form (props) {


    return (
        <Container id="form-section" fluid>
            <Navigation/>
            <Hero id="container-header"/>
            
            <Container>
                <h3>Si estas interesado, déjanos tus datos y nos pondremos en contacto</h3>

                <form onSubmit="/">
                    <input
                    name="fName"
                    placeholder="Escribe tu nombre"
                    />
                    <input
                    name="lName"
                    placeholder="Escibe tu apellido"
                    />
                    <input
                    name="email"
                    placeholder="Escribe tu Email"
                    />
                    <textarea
                    name="content"
                    placeholder="Déjanos tus comentatios..."
                    rows={3}
                    />
                    <input type='file' className="file-upload" name="file" placeholder='Sube acá tu documento'></input>                   
                    <button>Submit</button>
                </form>
            </Container>

            <Footer id='footer'/>

        </Container>
    )
}

export default Form;