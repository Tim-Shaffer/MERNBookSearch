import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Jumbotron />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
