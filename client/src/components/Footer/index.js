import React from "react";
import "./style.css";

function Footer({ sticky }) {
  return (
    
    <footer className={`footer mt-auto py-3 ${sticky ? "sticky" : ""}`}>
        <div className="container-sm">

          Copyright &copy; 2020 Tim Shaffer

        </div>

    </footer>
  )
}

export default Footer;