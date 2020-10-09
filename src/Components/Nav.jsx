import React from 'react';
import Navbar from 'react-bootstrap/Navbar';



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
                width="90"
                height="90"
                href="/"
                className="d-inline-block m-1"
                alt="Logo"
            />
            </Navbar.Brand>
        
        </Navbar>
    )
}

export default Navigation;