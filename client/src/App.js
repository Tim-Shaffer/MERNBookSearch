import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import Saved from "./components/Saved";
import NoMatch from "./pages/NoMatch";
// import Footer from "./components/Footer";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
      {/* <Footer /> */}
    </div>
  </Router>;

export default App;
