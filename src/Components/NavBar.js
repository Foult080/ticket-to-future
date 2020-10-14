import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../img/logo.png";

const NavBar = () => {
  return (
    <Fragment>
      <Navbar
        style={{ backgroundColor: "transparent" }}
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
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
              <Button variant="success" className="mr-sm-2">
                Зарегистрироваться
              </Button>
            </Link>
            <Link>
              <Button variant="primary" className="mr-sm-2">Войти</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
