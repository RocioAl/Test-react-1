import React from 'react'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";

const Header = (props) => {
    return (
        <div>
            <Navbar bg="light" variant="light" expand="lg" className="mb-5">
                <Container fluid>
                    <Navbar.Brand href="#">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Button variant="outline-dark m-1" onClick={props.ascending}>
                                {props.textAscending}
                            </Button>

                            <Button variant="outline-dark m-1" onClick={props.descending}>
                                {props.textDescending}
                            </Button>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder={props.placeholder}
                                className="me-2"
                                aria-label="Search"
                                onChange={props.onChange}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header