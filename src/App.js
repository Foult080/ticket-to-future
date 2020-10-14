import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Landing />
      <div className="news container">
        <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
          Новости площадки
        </h1>
        <hr/>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
