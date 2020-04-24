import React from 'react';
import Navigation from './Nav';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

function Home() {
    return(
        <Container id="home" fluid>
            <Navigation/>        
            <Hero id="container-header"/>
            <Services id='servicios'/>  
            <About id='about'/>
            <Footer id='footer'/>
        </Container>
    )
}

export default Home;