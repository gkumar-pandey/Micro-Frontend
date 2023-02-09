import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Badge, Form, Nav } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand className="fw-bold">
            <a>Shopping Cart</a>
          </Navbar.Brand>
          <Navbar.Text className="w-50">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </Navbar.Text>
          <Nav>
            <Badge className="d-flex p-2" bg="success">
              <BsFillCartFill className="fs-5" />
              <span className="fs-5">10</span>
            </Badge>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
