import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';



function Navigation(props) {

    const [navBackground, setNavBackground] = React.useState(false);

    const navRef = React.useRef();
    navRef.current = navBackground;
    
    React.useEffect(() => {
      const handleScroll = () => {
          const show = window.scrollY > 50;
          console.log(window.scrollY);
          if (navRef.current !== show) {
              setNavBackground(show)
          }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <Navbar 
            fixed="top"
            className={navBackground ? 'active':'no-active'}
            style={{ transition: '0.5s ease' }}
            expand='md'
        >
            <Navbar.Brand href="/">
            <img
                src="/img/Logo.png"
                width="60"
                height="60"
                href="/"
                className="d-inline-block align-top"
                alt="Logo"
            />
            </Navbar.Brand>
            
            <Button 
                className="ml-auto justify-content-end" 
                variant="primary" 
                href="/contacto"    
            >
            Cotiza ya!
            </Button>

            <Nav className="right-menu" >
                
                <Navbar.Toggle className="toogle-button"aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav.Link className="texto-nav" href="/#about">Equipo</Nav.Link>
                </Navbar.Collapse>
                
            </Nav>
        
        </Navbar>
    )
}

export default Navigation;