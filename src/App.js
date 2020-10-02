import React, { Fragment, useState } from "react";
import { Navbar, Nav, Button, Image, Form, Modal } from "react-bootstrap";
import main from "./img/main.svg";

const App = () => {
  const [name, setName] = useState("");

  const OnChange = (e) => {
    setName(e.target.value);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <section className="modal">
        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Hello {name}!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're doing great job!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              React is Great!
            </Button>
          </Modal.Footer>
        </Modal>
      </section>

      <section className="nav-bar">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button variant="outline-primary">Button</Button>
        </Navbar>
      </section>

      <section className="container">
        <Image src={main} fluid />
        <Form style={styles.title}>
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="John"
            value={name}
            onChange={OnChange}
          />
          <Form.Text className="text-muted">
            Enter your Name and hit button
          </Form.Text>
          <Button
            style={styles.button}
            variant="outline-primary"
            onClick={handleShow}
          >
            SAY
          </Button>
        </Form>
      </section>
    </Fragment>
  );
};

const styles = {
  title: {
    textAlign: "center",
    margin: "4rem",
    fontSize: "2rem",
    width: "auto",
  },
  button: {
    fontSize: "1.5rem",
    width: "auto",
  },
};

export default App;
