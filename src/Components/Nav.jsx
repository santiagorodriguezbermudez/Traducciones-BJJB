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
            <Navbar.Brand href="/"
                className = 'd-flex flex-row align-items-center'
            >
            <img
                src="/img/Logo.png"
                width="100"
                height="100"
                href="/"
                className="d-inline-block m-1"
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
        
        </Navbar>
    )
}

export default Navigation;