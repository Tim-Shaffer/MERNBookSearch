import React, { Component } from "react";
import Wrapper from "../Wrapper";
import Header from "../Header";
import Search from "../Search";
import Saved from "../Saved";
// import Navbar from "../Navbar";
import "./style.css";

class Main extends Component {

 state = {
      showSaved: false,
      showSearch: true
 }

  // componentDidMount() {
  //   this.setState({ showSaved: showSaved, showSearch: showSearch });
  // };

  handleSearchClick() {
    const showSaved = false ;
    const showSearch = true;
    this.setState({ showSaved: showSaved, showSearch: showSearch });
  };

  handleSavedClick() {
    const showSaved = true ;
    const showSearch = false;
    this.setState({ showSaved: showSaved, showSearch: showSearch });
  };

  render() {
    return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-color">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto ml-5">
                <li className="nav-item active text-white">
                    <a className="nav-link" href="/">Google Books</a>
                </li>
                <li className="nav-item text-white">
                    <a className="nav-link" href="/" onClick={this.handleSearchClick}>Search</a>
                    {/* <button onClick={this.handleSavedClick}>Search</button> */}
                </li>
                <li className="nav-item text-white">
                    <a className="nav-link" href="/" onClick={this.handleSavedClick}>Saved</a>
                    {/* <button onClick={this.handleSavedClick}>Saved</button> */}
                </li>
            </ul>
        </div>
      </nav>
        {/* <Navbar/> */}
      <Wrapper>
          <Header />
          <Search isActive={this.state.showSearch}/>
          <Saved isActive={this.state.showSaved}/> 
      </Wrapper>
    </>
    );
  }
}

export default Main;