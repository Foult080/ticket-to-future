import React, { Fragment } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../img/logo.png";

const NavBar = () => {
  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Открытая площадка ККРИТ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link>
              <Button variant="outline-success " className="mr-sm-2">
                Зарегистрироваться
              </Button>
            </Link>
            <Link>
              <Button variant="primary">Войти</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
