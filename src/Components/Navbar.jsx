import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styles from "./navbar.module.css";

import Logo from '../Img/Logo.png'
const Navb = () => {
    return (

        <>

            <Navbar expand="lg" variant="light" bg="dark">
                <Container>
                    <Navbar.Brand href="#" className='text-light'>Navbar</Navbar.Brand>
                </Container>
            </Navbar>

            <Navbar bg="light" expand="lg" className='h-100' sticky="top">
                <Container className='p-3'>
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className=''>
                            <Nav.Link href="#home" className=''>
                                <Link to="/" className={styles.Link}>
                                    Home
                                </Link>
                            </Nav.Link>

                            <Nav.Link href="#link" className=''>
                                <Link to="/service" className={styles.Link}>
                                    Service
                                </Link>
                            </Nav.Link>

                            <Nav.Link className=''>
                                <Link to="/about" className={styles.Link}>
                                    About Us
                                </Link>
                            </Nav.Link>

                            <Nav.Link className=''>
                                <Link to="/contact" className={styles.Link}>
                                    Contact
                                </Link>
                            </Nav.Link>

                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                 </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar></>

    )
}

export default Navb
