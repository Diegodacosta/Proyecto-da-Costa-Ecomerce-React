import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'


//Components 
import CartWidget from '../Cart/CartWidget'

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link exact to='/' >
                    <Navbar.Brand>
                        daCosta-Ecommerce
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title="Categorias" id="collasible-nav-dropdown" menuVariant="dark" > 
                        <NavDropdown.ItemText >
                            <Link to='/category/Muebles' className="text-light">Muebles</Link>
                        </NavDropdown.ItemText>
                        <NavDropdown.ItemText >
                            <Link to='/category/Sillas' className="text-light">Sillas</Link>
                        </NavDropdown.ItemText>
                        <NavDropdown.ItemText >
                            <Link to='/category/Electronica' className="text-light">Electronica</Link>
                        </NavDropdown.ItemText>
                        <NavDropdown.ItemText >
                            <Link to='/category/Perisfericos PC' className="text-light">Perisfericos</Link>
                        </NavDropdown.ItemText>
                        
                    </NavDropdown>
                    <Nav.Link>
                        <NavLink to="/contact" className="text-light">
                            Contacto
                        </NavLink>
                    </Nav.Link>
                    </Nav>
                    <Nav>        
                        <Nav.Link eventKey={2} href='/login' >
                            Ingresar
                        </Nav.Link>
                    </Nav>
                <CartWidget /> 
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default MyNavbar

/*
<nav className="navbarCss">
            <Link to="/">Ficu-Ecommerce</Link>
            <div className="dropsdown">
                <button className="dropsbtn">Categorias
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropsdown-content">
                   <Link to='/category/Muebles'>Muebles</Link>
                   <Link to='/category/Sillas'>Sillas</Link>
                   <Link to='/category/Electronica'>Electronica</Link>
                   <Link to='/category/Perisfericos PC'>Perisfericos</Link>
                </div>
            </div>
            <Link to="/contact">Contacto</Link>
            
            <CartWidget className="cart"/>    
        </nav>



*/