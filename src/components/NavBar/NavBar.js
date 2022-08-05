import React from "react";
import download from "../../img/download.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
const elements = ["Home", "Proyects", "Experience", "Contact"];
export const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">DR</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {elements.map((element) => (
                <>
                  <Nav.Link href="#home">{element}</Nav.Link>
                </>
              ))}
              <div>
                <button type="button" className="btn btn-danger">
                  <img src={download} alt="download" className="" />
                  Resume
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav classNameName="navbar  navbar-dark bg-primary">
        <ul className="navbar-nav flex-row d-none d-sm-flex ">
          
        </ul>
        
      </nav> */}
    </>
  );
};
