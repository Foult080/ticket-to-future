import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import Career from "./img/proud.svg";
import Card1 from "./img/card1.svg";
import Card2 from "./img/card2.svg";

const App = () => {
  return (
    <Router>
      <NavBar />

      <Fragment>
        <section className="main d-flex">
          <div className="container">
            <div className="row my-2">
              <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                <h1 style={styles.mainTitle}>
                  Открытая площадка студентов ККРИТ
                </h1>
                <h4>Твой путь в будущее</h4>
                <div class="d-lg-flex">
                  <Link>
                    <Button size="lg" variant="outline-success">
                      Зарегистрироваться
                    </Button>
                    <Button size="lg" className="ml-1" variant="primary">
                      Войти
                    </Button>
                  </Link>
                </div>
              </div>
              <div
                class="col-lg-6 order-1 order-lg-2"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img src={Career} class="img-fluid animated" alt=""></img>
              </div>
            </div>
          </div>
        </section>
      </Fragment>

      <Fragment>
        <div style={styles.projects} className="container">
          <h1 style={styles.title}>Наши площадки:</h1>
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center align-items-stretch">
              <Card className="my-2">
                <Card.Img variant="top" src={Card1} />
                <Card.Body>
                  <Card.Title>#ККРИТ Хакатон</Card.Title>
                  <Card.Text>
                    Конкурс профессионального мастерства с возможностью начала
                    крупного стартапа. Собери свою команду и получи доступ к
                    кейсовым заданиям.
                  </Card.Text>
                  <Button variant="primary">Подробнее</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-6 d-flex align-items-center align-items-stretch">
              <Card className="my-2">
                <Card.Img variant="top" src={Card2} />
                <Card.Body>
                  <Card.Title>#Работа ККРИТ</Card.Title>
                  <Card.Text>
                    Построй карьеру вместе с нами! Множество работодателей уже
                    здесь. Подай резюме, изучай вакансии и требования
                    работодателей, учавствуй в мастер классах и встречах.
                  </Card.Text>
                  <Button variant="success">Подробнее</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Fragment>
    </Router>
  );
};

const styles = {
  title: {
    textAlign: "center",
    marginTop: "2rem",
  },
  mainTitle: {
    fontWeight: "600",
    letterSpacing: "2px",
    textTransform: "uppercase",

  },
  projects: {
    marginBottom: "2rem",
  },
};

export default App;
