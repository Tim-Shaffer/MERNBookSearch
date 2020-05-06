import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-color">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto ml-5">
                <li className="nav-item active text-white">
                    <a className="nav-link" href="/">Google Books</a>
                </li>
                <li className="nav-item text-white">
                    <a className="nav-link" href="/search">Search</a>
                </li>
                <li className="nav-item text-white">
                    <a className="nav-link" href="/saved">Saved</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;