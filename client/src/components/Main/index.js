import React, { Component } from "react";
import Wrapper from "../Wrapper";
import Header from "../Header";
import { Row, Container } from "../Grid";
import Search from "../Search";

class Main extends Component {

  render() {
    return (
    <Wrapper>
        <Header />
    
        <Search />

    </Wrapper>
    );
  }
}

export default Main;