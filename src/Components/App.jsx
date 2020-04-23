import React from 'react';
import Navigation from './Nav';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Footer from './Footer';
import TrackVisibility from 'react-on-screen';
import Container from 'react-bootstrap/Container';


function App() {

    return(

        <Container id="home" fluid>
            <Navigation/>
        
            <Hero id="container-header"/>
            <Services id='servicios'/>  
            <About id='about'/>
            {/* <TrackVisibility once>
              {({ isVisible }) => isVisible && <About id="about"/>}
            </TrackVisibility>        */}
            <Footer id='footer'/>
        </Container>
    )
}

export default App;