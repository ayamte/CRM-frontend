import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const logMeOut = () => {
    navigate('/');
  };

  return (
    <Navbar collapseOnSelect expand="md" bg="info" variant="dark">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" width="100px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/tickets">Tickets</Nav.Link>
            <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
